import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuizPopup from './QuizPopup';


export default function Quiz(props) {
    
    const [result, setResult] = useState(0);
    const [resultCount, setResultCount] = useState(1);

    let onRestart = (event) => {
        window.location.reload();
    }

    let onresultGiven = (result) => {
        setResultCount(resultCount + 1);
        let prevScore = 0;

        if (result) {
            setResult(result + 1);
            prevScore = 1;
        } else if (resultCount >= 6) {
            alert("Total result is: "+ (result + prevScore));
        }
    }

    return (
        <Col>
            <Row>
                <Button onClick={onRestart}>Restart Quiz</Button>
            </Row>
            <Row>
                <h2>Current result: {result}/6</h2>
            </Row>
            <Row>
                <QuizPopup onresultGiven={onresultGiven} quizNumber={props.quizNumber} questionNum={0} />
            </Row>
            <Row>
                <QuizPopup onresultGiven={onresultGiven} quizNumber={props.quizNumber} questionNum={1} />
            </Row>
            <Row>
                <QuizPopup onresultGiven={onresultGiven} quizNumber={props.quizNumber} questionNum={2} />
            </Row>
            <Row>
                <QuizPopup onresultGiven={onresultGiven} quizNumber={props.quizNumber} questionNum={3} />
            </Row>
            <Row>
                <QuizPopup onresultGiven={onresultGiven} quizNumber={props.quizNumber} questionNum={4} />
            </Row>
            <Row>
                <QuizPopup onresultGiven={onresultGiven} quizNumber={props.quizNumber} questionNum={5} />
            </Row>
        </Col>
    );
}