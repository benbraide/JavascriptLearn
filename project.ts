/*
    Quizzer App:
        Users can create questions
        Users can add options to a question, and specify which is the correct answer
*/

interface ISerializedQuestionOption{
    value: string;
    isCorrect: boolean;
}

class QuestionOption{
    private value_: string;
    private isCorrect_: boolean;

    public constructor(value: string, isCorrect?: boolean){
        this.value_ = value;
        this.isCorrect_ = (isCorrect || false);
    }

    public setValue(value: string){
        this.value_ = value;
    }

    public getValue(){
        return this.value_;
    }

    public setIsCorrectState(state: boolean){
        this.isCorrect_ = state;
    }

    public isCorrect(){
        return this.isCorrect_;
    }

    public serialize(){
        return {
            value: this.value_,
            isCorrect: this.isCorrect_,
        };
    }
}

interface ISerializedQuestion{
    value: string;
    options: Array<ISerializedQuestionOption>;
}

class Question{
    private value_: string;
    private options_: Array<QuestionOption>;

    public constructor(value: string, options?: Array<QuestionOption>){
        this.value_ = value;
        this.options_ = (options || []);//Use the supplied 'options' or an empty array
    }

    public setValue(value: string){
        this.value_ = value;
    }

    public getValue(){
        return this.value_;
    }

    public addOption(option: QuestionOption){
        this.options_.push(option);
    }

    public getOptions(){
        return this.options_;
    }

    public serialize(){
        return {
            value: this.value_,
            options: this.options_.map((option) => option.serialize()),
        };
    }
}

interface IQuizInfo{
    name: string;
    avatar: string;
    questions: Array<ISerializedQuestion>,
}

class Quizzer{
    private db_: IDBOpenDBRequest = null;
    private quizListKey_ = '#AwesomeQuizzer_QuizList#';
    private name_: string = '';
    private avatar_: string = '';

    private questions_: Array<Question> = [];
    private quizList_: Array<string> = null;

    private dbIsOpen_: boolean = false;
    private dbReuestQueue_: Array<() => void> = [];

    private nameInput_: HTMLInputElement = null;
    private avatarInput_: HTMLInputElement = null;

    private handleAddQuestion_: (serializedQuestion?: ISerializedQuestion) => void = null;

    public constructor(){
        this.db_ = this.initializeDB_();
    }

    public create(){
        this.bindCreateable_(this.db_, true);
    }

    public edit(){
        this.bindCreateable_(this.db_, false);
        this.bindPlayable_(this.db_, false);
    }

    public play(){
        this.bindPlayable_(this.db_, true);
    }

    private initializeDB_(){
        // window.indexedDB.deleteDatabase('AwesomeQuizzer');
        let db = window.indexedDB.open('AwesomeQuizzer');

        db.addEventListener('error', () => {
            window.alert('Failed to open DB');
        });

        db.addEventListener('success', () => {
            this.dbIsOpen_ = true;
            this.readFromDB_(db, this.quizListKey_, (result) => {
                this.quizList_ = (result || []);
            });

            this.dbReuestQueue_.forEach((item) => {
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

        db.addEventListener('upgradeneeded', () => {
            window.alert('Upgrade needed. Upgrading...');
            
            db.result.createObjectStore('AwesomeQuizzer');
            db.result.addEventListener('error', () => {
                window.alert('Failed to create store');
            });
        });

        return db;
    }

    private readFromDB_(db: IDBOpenDBRequest, key: string, handler: (result: any) => void){
        let doRead = () => {
            let transaction = db.result.transaction('AwesomeQuizzer', 'readonly');
            let store = transaction.objectStore('AwesomeQuizzer');

            let keyGetter = store.get(key);
            keyGetter.addEventListener('error', () => {
                window.alert('Failed to read from DB');
            });

            keyGetter.addEventListener('success', () => {
                handler(keyGetter.result);
            });
        };

        if (this.dbIsOpen_){
            doRead();
        }
        else{//DB is not yet open -- add to request queue
            this.dbReuestQueue_.push(doRead);
        }
    }

    private writeToDB_(db: IDBOpenDBRequest, key: string, data: any){
        let doWrite = () => {
            let transaction = db.result.transaction('AwesomeQuizzer', 'readwrite');
            let store = transaction.objectStore('AwesomeQuizzer');
            store.put(data, key);
        };

        if (this.dbIsOpen_){
            doWrite();
        }
        else{//DB is not yet open -- add to request queue
            this.dbReuestQueue_.push(doWrite);
        }
    }

    private bindCreateable_(db: IDBOpenDBRequest, isCreating: boolean){
        this.nameInput_ = <HTMLInputElement>document.querySelector('#name')!;
        this.nameInput_.addEventListener('input', () => {
            this.name_ = this.nameInput_.value;
        });

        this.avatarInput_ = <HTMLInputElement>document.querySelector('#avatar')!;
        this.avatarInput_.addEventListener('input', () => {
            this.avatar_ = this.avatarInput_.value;
        });
        
        let addOptionTmpl = <HTMLTemplateElement>document.querySelector('#tmpl-add-option')!;
        let addQuestionTmpl = <HTMLTemplateElement>document.querySelector('#tmpl-add-question')!;

        let questionsContainer = document.querySelector('body.create .questions')!;
        let saveButton = document.querySelector('body.create button.save')!;
        let cancelButton = document.querySelector('body.create button.cancel')!;
        let addButton = document.querySelector('body.create main button.add-question')!;

        function handleAddOption(question: Question, questionView: HTMLElement, questionId: number, serializedOption?: ISerializedQuestionOption){
            let id = (question.getOptions().length + 1);
            let clone = <HTMLElement>addOptionTmpl.content.firstElementChild!.cloneNode(true);

            let title = clone.querySelector('.title')!;
            title.textContent = ('Option ' + id);

            let label = clone.querySelector('.label')!;
            label.setAttribute('for', ('value' + questionId + '' + id));

            let input = <HTMLInputElement>clone.querySelector('.input')!;
            input.setAttribute('id', ('value' + questionId + '' + id));
            
            let option: QuestionOption;
            if (serializedOption){
                option = new QuestionOption(serializedOption.value, serializedOption.isCorrect);
            }
            else{//Serialized option wasn't supplied -- create an empty option
                option = new QuestionOption('');
            }

            input.addEventListener('input', () => {
                option.setValue(input.value);
            });

            input.value = option.getValue();//Assign value of option to input

            let checkbox = <HTMLInputElement>clone.querySelector('input[type="checkbox"]')!;
            if (option.isCorrect()){
                checkbox.checked = true;
            }

            checkbox.addEventListener('change', () => {
                option.setIsCorrectState(checkbox.checked);
            });
            
            let optionsContainer = questionView.querySelector('.options')!;
            optionsContainer.appendChild(clone);

            question.addOption(option);
        }
        
        this.handleAddQuestion_ = (serializedQuestion?: ISerializedQuestion) => {
            let id = (this.questions_.length + 1);
            let clone = <HTMLElement>addQuestionTmpl.content.firstElementChild!.cloneNode(true);

            let title = clone.querySelector('.title')!;
            title.textContent = ('Question ' + id);

            let label = clone.querySelector('.label')!;
            label.setAttribute('for', ('value' + id));

            let input = <HTMLInputElement>clone.querySelector('.input')!;
            input.setAttribute('id', ('value' + id));
            
            let question = this.addQuestion_(serializedQuestion);
            let addOptionButton = clone.querySelector('.add-option')!;

            input.addEventListener('input', () => {
                question.setValue(input.value);
            });

            input.value = question.getValue();//Assing the value of the created question to the input
            
            addOptionButton.addEventListener('click', () => {
                handleAddOption(question, clone, id);
            });

            questionsContainer.appendChild(clone);
            if (serializedQuestion){
                serializedQuestion.options.forEach((option) => {
                    handleAddOption(question, clone, id, option);
                });
            }
            else{//Serialized question wasn't supplied -- add an empty option
                handleAddOption(question, clone, id);
            }
        }

        let beginButton = document.querySelector('body.create main button')!;
        if (isCreating){
            beginButton.addEventListener('click', () => {
                beginButton.classList.add('hidden');
    
                document.body.classList.remove('begin');
                document.body.classList.add('began');
    
                let main = document.querySelector('body.create main')!;
                main.classList.add('container');
    
                let form = document.querySelector('body.create .form')!;
                form.classList.remove('hidden');
            });

            this.handleAddQuestion_();
        }

        let wasCreating = isCreating;
        let handleSave = () => {
            let quizData: IQuizInfo = {
                name: this.name_,
                avatar: this.avatar_,
                questions: this.questions_.map((question) => question.serialize()),
            };
            
            this.writeToDB_(db, this.name_, quizData);
            if (isCreating){//Append new quiz name to quiz list and save
                this.quizList_.push(quizData.name);
                this.writeToDB_(db, this.quizListKey_, this.quizList_);
                isCreating = false;//Disable adding to quiz list for subsequent saves
            }
            else if (!wasCreating){
                let choice = document.querySelector('#choice')!;
                choice.classList.remove('hidden');

                let form = document.querySelector('body.create .form')!;
                form.classList.add('hidden');
            }

            window.alert('Quiz saved');
        };

        let handleCancel = () => {
            if (wasCreating){
                beginButton.classList.remove('hidden');
    
                document.body.classList.add('begin');
                document.body.classList.remove('began');

                let main = document.querySelector('body.create main')!;
                main.classList.remove('container');
    
                let form = document.querySelector('body.create .form')!;
                form.classList.add('hidden');
            }
            else{
                let choice = document.querySelector('#choice')!;
                choice.classList.remove('hidden');

                let form = document.querySelector('body.create .form')!;
                form.classList.add('hidden');
            }
        };

        addButton.addEventListener('click', () => this.handleAddQuestion_());
        saveButton.addEventListener('click', handleSave);
        cancelButton.addEventListener('click', handleCancel);
    }

    private bindPlayable_(db: IDBOpenDBRequest, isPlaying: boolean){
        let choice = document.querySelector('#choice')!;
        let quizList = document.querySelector('body.play .quiz-list')!;
        let quizItemTmpl = <HTMLTemplateElement>document.querySelector('#tmpl-quiz-item')!;

        this.readFromDB_(db, this.quizListKey_, (result) => {
            (result as Array<string>).forEach((item) => {
                this.readFromDB_(db, item, (data) => {
                    let quizInfoData = (data as IQuizInfo);
                    
                    let clone = <HTMLElement>quizItemTmpl.content.firstElementChild!.cloneNode(true);
                    let img = clone.querySelector('img')!;
                    img.src = quizInfoData.avatar;

                    quizList.append(clone);
                    clone.addEventListener('click', () => {
                        choice.classList.add('hidden');
                        
                        if (isPlaying){
                            this.playOne_(quizInfoData);
                        }
                        else{//We are editing
                            this.editOne_(quizInfoData);
                        }
                    });
                });
            });
        });
    }

    private editOne_(data: IQuizInfo){
        let form = document.querySelector('body.create .form')!;
        let questionsContainer = document.querySelector('body.create .questions')!;

        form.classList.remove('hidden');

        this.name_ = data.name;
        this.nameInput_.value = this.name_;

        this.avatar_ = data.avatar;
        this.avatarInput_.value = this.avatar_;

        this.questions_ = [];
        while (questionsContainer.firstChild){
            questionsContainer.firstChild.remove();
        }

        data.questions.forEach((question) => {
            this.handleAddQuestion_(question);
        });
    }

    private playOne_(data: IQuizInfo){
        let playArea = document.querySelector('#play-area')!;
        playArea.classList.remove('hidden');

        let quizTitle = playArea.querySelector('h2')!;
        quizTitle.textContent = data.name;
        
        let questionNumber = playArea.querySelector('#question-value > span')!;
        let questionValue = playArea.querySelector('#question-value > span + span')!;

        let questionIndex = 0;
        let loadQuestion = () => {
            let currentQuestion = data.questions[questionIndex];
            
            questionNumber.textContent = ((questionIndex + 1) + '.');
            questionValue.textContent = currentQuestion.value;

            let questionsView = playArea.querySelector('#question-options');
            let questionOptionTmpl = <HTMLTemplateElement>document.querySelector('#tmpl-quiz-question-option')!;

            while (questionsView.firstChild){//Empty questions view
                questionsView.firstChild.remove();
            }
            
            let optionNumbers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
            currentQuestion.options.forEach((option, index) => {
                let clone = <HTMLElement>questionOptionTmpl.content.firstElementChild.cloneNode(true);

                let optionNumber = clone.querySelector('span')!;
                let optionValue = clone.querySelector('button')!;

                optionNumber.textContent = (optionNumbers[index] + '.');
                optionValue.textContent = option.value;

                questionsView.appendChild(clone);
            });
        };

        let nextQuestion = playArea.querySelector('#next-question');
        nextQuestion.addEventListener('click', () => {
            questionIndex += 1;// questionIndex = (questionIndex + 1);
            loadQuestion();
        });

        let timerView = playArea.querySelector('#timer > span + span')!;
        timerView.textContent = '0 seconds';
        
        let timeSpent = 0;// 0s
        let intervalId = setInterval(() => {//Call me every 1000ms || 1s
            timeSpent += 1;// Add 1s to the time spent
            timerView.textContent = (timeSpent + ' seconds');
        }, 1000);

        loadQuestion();
    }
    
    private addQuestion_(serializedQuestion?: ISerializedQuestion){
        let question: Question;
        if (serializedQuestion){
            question = new Question(serializedQuestion.value);
        }
        else{//Serialized question wasn't supplied -- create an empty question
            question = new Question('');
        }
        
        this.questions_.push(question);

        return question;
    }
}
