import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuizPopup from './QuizPopup';
import { useState } from 'react';



export default function Quiz(props) {

    const [result, setResult] = useState(0);
    const [answerCount, setAnswerCount] = useState(1);

    let onRestart = (event) => {
        window.location.reload();
    }

    let onAnswerGiven = (answer) => {
        setAnswerCount(answerCount + 1);
        
        let prevResult = 0;
        
        if (answer) {
            setResult(result + 1);
            prevResult = 1;
        }
        
        if (answerCount >= 6) {
            alert("Total score is: " + (result + prevResult));
        }
    }

    return (
        <Col>
            <Row>
                <Button onClick={onRestart}>Restart Quiz</Button>
            </Row>
            <Row>
                <h2>Current Score: {result}/6</h2>
            </Row>
            <Row>
                <QuizPopup onAnswerGiven={onAnswerGiven} quizNum={props.quizNum} questionNum={0} />
            </Row>
            <Row>
                <QuizPopup onAnswerGiven={onAnswerGiven} quizNum={props.quizNum} questionNum={1} />
            </Row>
            <Row>
                <QuizPopup onAnswerGiven={onAnswerGiven} quizNum={props.quizNum} questionNum={2} />
            </Row>
            <Row>
                <QuizPopup onAnswerGiven={onAnswerGiven} quizNum={props.quizNum} questionNum={3} />
            </Row>
            <Row>
                <QuizPopup onAnswerGiven={onAnswerGiven} quizNum={props.quizNum} questionNum={4} />
            </Row>
            <Row>
                <QuizPopup onAnswerGiven={onAnswerGiven} quizNum={props.quizNum} questionNum={5} />
            </Row>
        </Col>
    );
}