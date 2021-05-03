import quizzes from '../data';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { useState } from 'react';


export default function QuizSlide(props) {
    const [answer, setAnswer] = useState("");
    const [btnState, setBtnState] = useState(false);

    let onAnswerGiven = (event) => {
        setBtnState(true);
        if (quizzes[props.quizNum][props.questionNum].choices[event.target.id] === quizzes[props.quizNum][props.questionNum].answer) {
            setAnswer("Your answer " + quizzes[props.quizNum][props.questionNum].answer + " is correct!");
            props.onAnswerGiven(true);
        } else {
            setAnswer("Wrong Answer. Correct answer is: " + quizzes[props.quizNum][props.questionNum].answer);
            props.onAnswerGiven(false);
        }
    }

    useEffect(() => {
        if (quizzes === null) {
            api.getFlowers()
                .then(x => setQuizzes(generateQuizzes(x)))
                .catch(e => console.log(e));
        }
    });

    // Create Quiz Questions
    function createQuizQuestions(flowers) {
        let questions = [];
        let selectIndex = 0;

        for (let i = 0; i < flowers.length; i++) {
            selectIndex = i;
            if (selectIndex > (flowers.length - 4)) {
                selectIndex = i - 2;
            }
            let question = {
                picture: flowers[i].picture,
                choices: [flowers[selectIndex].name, flowers[selectIndex + 1].name, flowers[selectIndex + 2].name],
                answer: flowers[i].name
            };
            questions.push(question);
        }
        return questions;
    };

    
    return (
        <Row><Col>
        

        </Col></Row>
    );
}