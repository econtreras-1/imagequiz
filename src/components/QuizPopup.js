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

    
    return (
        <Row><Col>
        

        </Col></Row>
    );
}