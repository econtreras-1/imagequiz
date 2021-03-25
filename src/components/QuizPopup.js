import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import flowerQuiz from '../flowerQuiz';


export default function QuizPopup(props) {
    const [answer, setAnswer] = useState("");
    const [btnState, setBtnState] = useState(false);

    let answerGiven = (event) => {
        setBtnState(true);
        if(flowerQuiz[props.quizNumber][props.questionNumber].choices[event.target.id] === flowerQuiz[props.quizNumber][props.questionNumber].answer) {
            setAnswer("Your answer "+ flowerQuiz[props.quizNumber][props.questionNumber].answer+ " is correct!");
            props.answerGiven(true);
        } else {
            setAnswer("Wrong Answer. Correct answer is: "+ flowerQuiz[props.quizNumber][props.questionNumber].answer);
            props.answerGiven(false);
        }
    }
    
    return (
        <Row><Col>
            <Figure>
                <Figure.Image width={171} height={180}
                    alt={flowerQuiz[props.quizNumber][props.questionNumber].answer}
                    src={flowerQuiz[props.quizNumber][props.questionNumber].picture} />
                <Figure.Caption>
                    <Button disabled={btnState} id={0} onClick={answerGiven}>{flowerQuiz[props.quizNumber][props.questionNumber].choices[0]}</Button>
                    <Button disabled={btnState} id={1} onClick={answerGiven}>{flowerQuiz[props.quizNumber][props.questionNumber].choices[1]}</Button>
                    <Button disabled={btnState} id={2} onClick={answerGiven}>{flowerQuiz[props.quizNumber][props.questionNumber].choices[2]}</Button>
                    <br/>{answer}                   
                </Figure.Caption>
            </Figure>

        </Col></Row>
    );
}