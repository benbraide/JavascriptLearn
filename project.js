"use strict";
/*
    Quizzer App:
        Users can create questions
        Users can add options to a question, and specify which is the correct answer
*/
var QuestionOption = /** @class */ (function () {
    function QuestionOption(value, isCorrect) {
        this.value_ = value;
        this.isCorrect_ = (isCorrect || false);
    }
    QuestionOption.prototype.setValue = function (value) {
        this.value_ = value;
    };
    QuestionOption.prototype.getValue = function () {
        return this.value_;
    };
    QuestionOption.prototype.setIsCorrectState = function (state) {
        this.isCorrect_ = state;
    };
    QuestionOption.prototype.isCorrect = function () {
        return this.isCorrect_;
    };
    QuestionOption.prototype.serialize = function () {
        return {
            value: this.value_,
            isCorrect: this.isCorrect_,
        };
    };
    return QuestionOption;
}());
var Question = /** @class */ (function () {
    function Question(value, options) {
        this.value_ = value;
        this.options_ = (options || []); //Use the supplied 'options' or an empty array
    }
    Question.prototype.setValue = function (value) {
        this.value_ = value;
    };
    Question.prototype.getValue = function () {
        return this.value_;
    };
    Question.prototype.addOption = function (option) {
        this.options_.push(option);
    };
    Question.prototype.getOptions = function () {
        return this.options_;
    };
    Question.prototype.serialize = function () {
        return {
            value: this.value_,
            options: this.options_.map(function (option) { return option.serialize(); }),
        };
    };
    return Question;
}());
var Quizzer = /** @class */ (function () {
    function Quizzer() {
        this.db_ = null;
        this.quizListKey_ = '#AwesomeQuizzer_QuizList#';
        this.name_ = '';
        this.avatar_ = '';
        this.questions_ = [];
        this.quizList_ = null;
        this.dbIsOpen_ = false;
        this.dbReuestQueue_ = [];
        this.nameInput_ = null;
        this.avatarInput_ = null;
        this.handleAddQuestion_ = null;
        this.db_ = this.initializeDB_();
    }
    Quizzer.prototype.create = function () {
        this.bindCreateable_(this.db_, true);
    };
    Quizzer.prototype.edit = function () {
        this.bindCreateable_(this.db_, false);
        this.bindPlayable_(this.db_, false);
    };
    Quizzer.prototype.play = function () {
        this.bindPlayable_(this.db_, true);
    };
    Quizzer.prototype.initializeDB_ = function () {
        var _this = this;
        // window.indexedDB.deleteDatabase('AwesomeQuizzer');
        var db = window.indexedDB.open('AwesomeQuizzer');
        db.addEventListener('error', function () {
            window.alert('Failed to open DB');
        });
        db.addEventListener('success', function () {
            _this.dbIsOpen_ = true;
            _this.readFromDB_(db, _this.quizListKey_, function (result) {
                _this.quizList_ = (result || []);
            });
            _this.dbReuestQueue_.forEach(function (item) {
                item();
            });
            // let transaction = db.result.transaction('AwesomeQuizzer', 'readonly');
            // let store = transaction.objectStore('AwesomeQuizzer');
            // let nameGetter = store.get('A Generic Quiz');
            // nameGetter.addEventListener('error', () => {
            //     window.alert('Failed to read from DB');
            // });
            // nameGetter.addEventListener('success', () => {
            //     if (!nameGetter.result){
            //         return;
            //     }
            //     this.name_ = nameGetter.result['name'];
            //     nameInput.value = this.name_;
            //     (nameGetter.result['questions'] as Array<ISerializedQuestion>).forEach((question) => {
            //         handleAddQuestion(question);
            //     });
            //     console.log(nameGetter.result);
            //     // this.name_ = (nameGetter.result || '');
            //     // nameInput.value = this.name_;
            // });
        });
        db.addEventListener('upgradeneeded', function () {
            window.alert('Upgrade needed. Upgrading...');
            db.result.createObjectStore('AwesomeQuizzer');
            db.result.addEventListener('error', function () {
                window.alert('Failed to create store');
            });
        });
        return db;
    };
    Quizzer.prototype.readFromDB_ = function (db, key, handler) {
        var doRead = function () {
            var transaction = db.result.transaction('AwesomeQuizzer', 'readonly');
            var store = transaction.objectStore('AwesomeQuizzer');
            var keyGetter = store.get(key);
            keyGetter.addEventListener('error', function () {
                window.alert('Failed to read from DB');
            });
            keyGetter.addEventListener('success', function () {
                handler(keyGetter.result);
            });
        };
        if (this.dbIsOpen_) {
            doRead();
        }
        else { //DB is not yet open -- add to request queue
            this.dbReuestQueue_.push(doRead);
        }
    };
    Quizzer.prototype.writeToDB_ = function (db, key, data) {
        var doWrite = function () {
            var transaction = db.result.transaction('AwesomeQuizzer', 'readwrite');
            var store = transaction.objectStore('AwesomeQuizzer');
            store.put(data, key);
        };
        if (this.dbIsOpen_) {
            doWrite();
        }
        else { //DB is not yet open -- add to request queue
            this.dbReuestQueue_.push(doWrite);
        }
    };
    Quizzer.prototype.bindCreateable_ = function (db, isCreating) {
        var _this = this;
        this.nameInput_ = document.querySelector('#name');
        this.nameInput_.addEventListener('input', function () {
            _this.name_ = _this.nameInput_.value;
        });
        this.avatarInput_ = document.querySelector('#avatar');
        this.avatarInput_.addEventListener('input', function () {
            _this.avatar_ = _this.avatarInput_.value;
        });
        var addOptionTmpl = document.querySelector('#tmpl-add-option');
        var addQuestionTmpl = document.querySelector('#tmpl-add-question');
        var questionsContainer = document.querySelector('body.create .questions');
        var saveButton = document.querySelector('body.create button.save');
        var cancelButton = document.querySelector('body.create button.cancel');
        var addButton = document.querySelector('body.create main button.add-question');
        function handleAddOption(question, questionView, questionId, serializedOption) {
            var id = (question.getOptions().length + 1);
            var clone = addOptionTmpl.content.firstElementChild.cloneNode(true);
            var title = clone.querySelector('.title');
            title.textContent = ('Option ' + id);
            var label = clone.querySelector('.label');
            label.setAttribute('for', ('value' + questionId + '' + id));
            var input = clone.querySelector('.input');
            input.setAttribute('id', ('value' + questionId + '' + id));
            var option;
            if (serializedOption) {
                option = new QuestionOption(serializedOption.value, serializedOption.isCorrect);
            }
            else { //Serialized option wasn't supplied -- create an empty option
                option = new QuestionOption('');
            }
            input.addEventListener('input', function () {
                option.setValue(input.value);
            });
            input.value = option.getValue(); //Assign value of option to input
            var checkbox = clone.querySelector('input[type="checkbox"]');
            if (option.isCorrect()) {
                checkbox.checked = true;
            }
            checkbox.addEventListener('change', function () {
                option.setIsCorrectState(checkbox.checked);
            });
            var optionsContainer = questionView.querySelector('.options');
            optionsContainer.appendChild(clone);
            question.addOption(option);
        }
        this.handleAddQuestion_ = function (serializedQuestion) {
            var id = (_this.questions_.length + 1);
            var clone = addQuestionTmpl.content.firstElementChild.cloneNode(true);
            var title = clone.querySelector('.title');
            title.textContent = ('Question ' + id);
            var label = clone.querySelector('.label');
            label.setAttribute('for', ('value' + id));
            var input = clone.querySelector('.input');
            input.setAttribute('id', ('value' + id));
            var question = _this.addQuestion_(serializedQuestion);
            var addOptionButton = clone.querySelector('.add-option');
            input.addEventListener('input', function () {
                question.setValue(input.value);
            });
            input.value = question.getValue(); //Assing the value of the created question to the input
            addOptionButton.addEventListener('click', function () {
                handleAddOption(question, clone, id);
            });
            questionsContainer.appendChild(clone);
            if (serializedQuestion) {
                serializedQuestion.options.forEach(function (option) {
                    handleAddOption(question, clone, id, option);
                });
            }
            else { //Serialized question wasn't supplied -- add an empty option
                handleAddOption(question, clone, id);
            }
        };
        var beginButton = document.querySelector('body.create main button');
        if (isCreating) {
            beginButton.addEventListener('click', function () {
                beginButton.classList.add('hidden');
                document.body.classList.remove('begin');
                document.body.classList.add('began');
                var main = document.querySelector('body.create main');
                main.classList.add('container');
                var form = document.querySelector('body.create .form');
                form.classList.remove('hidden');
            });
            this.handleAddQuestion_();
        }
        var wasCreating = isCreating;
        var handleSave = function () {
            var quizData = {
                name: _this.name_,
                avatar: _this.avatar_,
                questions: _this.questions_.map(function (question) { return question.serialize(); }),
            };
            _this.writeToDB_(db, _this.name_, quizData);
            if (isCreating) { //Append new quiz name to quiz list and save
                _this.quizList_.push(quizData.name);
                _this.writeToDB_(db, _this.quizListKey_, _this.quizList_);
                isCreating = false; //Disable adding to quiz list for subsequent saves
            }
            else if (!wasCreating) {
                var choice = document.querySelector('#choice');
                choice.classList.remove('hidden');
                var form = document.querySelector('body.create .form');
                form.classList.add('hidden');
            }
            window.alert('Quiz saved');
        };
        var handleCancel = function () {
            if (wasCreating) {
                beginButton.classList.remove('hidden');
                document.body.classList.add('begin');
                document.body.classList.remove('began');
                var main = document.querySelector('body.create main');
                main.classList.remove('container');
                var form = document.querySelector('body.create .form');
                form.classList.add('hidden');
            }
            else {
                var choice = document.querySelector('#choice');
                choice.classList.remove('hidden');
                var form = document.querySelector('body.create .form');
                form.classList.add('hidden');
            }
        };
        addButton.addEventListener('click', function () { return _this.handleAddQuestion_(); });
        saveButton.addEventListener('click', handleSave);
        cancelButton.addEventListener('click', handleCancel);
    };
    Quizzer.prototype.bindPlayable_ = function (db, isPlaying) {
        var _this = this;
        var choice = document.querySelector('#choice');
        var quizList = document.querySelector('body.play .quiz-list');
        var quizItemTmpl = document.querySelector('#tmpl-quiz-item');
        this.readFromDB_(db, this.quizListKey_, function (result) {
            result.forEach(function (item) {
                _this.readFromDB_(db, item, function (data) {
                    var quizInfoData = data;
                    var clone = quizItemTmpl.content.firstElementChild.cloneNode(true);
                    var img = clone.querySelector('img');
                    img.src = quizInfoData.avatar;
                    quizList.append(clone);
                    clone.addEventListener('click', function () {
                        choice.classList.add('hidden');
                        if (isPlaying) {
                            _this.playOne_(quizInfoData);
                        }
                        else { //We are editing
                            _this.editOne_(quizInfoData);
                        }
                    });
                });
            });
        });
    };
    Quizzer.prototype.editOne_ = function (data) {
        var _this = this;
        var form = document.querySelector('body.create .form');
        var questionsContainer = document.querySelector('body.create .questions');
        form.classList.remove('hidden');
        this.name_ = data.name;
        this.nameInput_.value = this.name_;
        this.avatar_ = data.avatar;
        this.avatarInput_.value = this.avatar_;
        this.questions_ = [];
        while (questionsContainer.firstChild) {
            questionsContainer.firstChild.remove();
        }
        data.questions.forEach(function (question) {
            _this.handleAddQuestion_(question);
        });
    };
    Quizzer.prototype.playOne_ = function (data) {
        var playArea = document.querySelector('#play-area');
        playArea.classList.remove('hidden');
        var quizTitle = playArea.querySelector('h2');
        quizTitle.textContent = data.name;
        var questionNumber = playArea.querySelector('#question-value > span');
        var questionValue = playArea.querySelector('#question-value > span + span');
        var questionIndex = 0;
        var loadQuestion = function () {
            var currentQuestion = data.questions[questionIndex];
            questionNumber.textContent = ((questionIndex + 1) + '.');
            questionValue.textContent = currentQuestion.value;
            var questionsView = playArea.querySelector('#question-options');
            var questionOptionTmpl = document.querySelector('#tmpl-quiz-question-option');
            while (questionsView.firstChild) { //Empty questions view
                questionsView.firstChild.remove();
            }
            var optionNumbers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
            currentQuestion.options.forEach(function (option, index) {
                var clone = questionOptionTmpl.content.firstElementChild.cloneNode(true);
                var optionNumber = clone.querySelector('span');
                var optionValue = clone.querySelector('button');
                optionNumber.textContent = (optionNumbers[index] + '.');
                optionValue.textContent = option.value;
                questionsView.appendChild(clone);
            });
        };
        var nextQuestion = playArea.querySelector('#next-question');
        nextQuestion.addEventListener('click', function () {
            questionIndex += 1; // questionIndex = (questionIndex + 1);
            loadQuestion();
        });
        var timerView = playArea.querySelector('#timer > span + span');
        timerView.textContent = '0 seconds';
        var timeSpent = 0; // 0s
        var intervalId = setInterval(function () {
            timeSpent += 1; // Add 1s to the time spent
            timerView.textContent = (timeSpent + ' seconds');
        }, 1000);
        loadQuestion();
    };
    Quizzer.prototype.addQuestion_ = function (serializedQuestion) {
        var question;
        if (serializedQuestion) {
            question = new Question(serializedQuestion.value);
        }
        else { //Serialized question wasn't supplied -- create an empty question
            question = new Question('');
        }
        this.questions_.push(question);
        return question;
    };
    return Quizzer;
}());
