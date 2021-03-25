import flowerQuiz from '../flowerQuiz';
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
        if(flowerQuiz[props.quizNum][props.questionNum].choices[event.target.id] === flowerQuiz[props.quizNum][props.questionNum].answer) {
            setAnswer("Your answer "+ flowerQuiz[props.quizNum][props.questionNum].answer+ " is correct!");
            props.onAnswerGiven(true);
        } else {
            setAnswer("Wrong Answer. Correct answer is: "+ flowerQuiz[props.quizNum][props.questionNum].answer);
            props.onAnswerGiven(false);
        }
    }
    return (
        <Row><Col>
            <Figure>
                <Figure.Image width={171} height={180}
                    alt={flowerQuiz[props.quizNum][props.questionNum].answer}
                    src={flowerQuiz[props.quizNum][props.questionNum].picture} />
                <Figure.Caption>
                    <Button disabled={btnState} id={0} onClick={onAnswerGiven}>{flowerQuiz[props.quizNum][props.questionNum].choices[0]}</Button>
                    <Button disabled={btnState} id={1} onClick={onAnswerGiven}>{flowerQuiz[props.quizNum][props.questionNum].choices[1]}</Button>
                    <Button disabled={btnState} id={2} onClick={onAnswerGiven}>{flowerQuiz[props.quizNum][props.questionNum].choices[2]}</Button>
                    <br/>{answer}                   
                </Figure.Caption>
            </Figure>

        </Col></Row>
    );
}