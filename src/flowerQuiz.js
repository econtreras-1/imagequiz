import flowers from './flowers';


let createQuestions = () => {
    let questions = [];
    let selection = 0;
    for(let i = 0; i < flowers.length; i++) {
        selection = i;
        if(selection > (flowers.length - 4)){
           selection = i - 2;
        }
        let question = {
            picture: flowers[i].picture,
            choices: [flowers[selection].name, flowers[selection+1].name, flowers[selection+2].name],
            answer: flowers[i].name
        };
        questions.push(question);
    }
    return questions;
};

let createQuiz = () => {
    let flowerQuiz = []; 
    let questionPos = 0;
    let questions = createQuestions();

    for(let i = 0; i < questions.length; i++){
        questionPos = i;
        
        if(questionPos > (questions.length - 7)) {
            questionPos = i - 5;
        }
        let quiz = [
            questions[questionPos], 
            questions[questionPos+1], 
            questions[questionPos+2], 
            questions[questionPos+3], 
            questions[questionPos+4],
            questions[questionPos+5]
        ];
        flowerQuiz.push(quiz);
    }
    return flowerQuiz;
};

let flowerQuiz = createQuiz();


export default flowerQuiz;