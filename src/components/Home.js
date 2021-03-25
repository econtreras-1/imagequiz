import flowers from '../flowers';
import {Link} from "react-router-dom";
import Figure from 'react-bootstrap/Figure';
import 'bootstrap/dist/css/bootstrap.css';


function Home(props) {

    let imageClicked = (event) => {
        props.quizClicked(event.target.id);
    }

    return (
        <div>
            <h2 style={{textAlign: "center"}}>Home</h2>
            {createFlowers()}
        </div>
    );
}

function createFlowers() {
    let images = [];
    let i = 0;
    for (let flwr in flowers) {
        images.push(
            <Link id={i} onClick={imageClicked} className='link' to='/quiz'>
                <Figure>
                    <Figure.Image width={171} height={180}
                        alt={flowers[flwr].name}
                        src={flowers[flwr].picture} />
                    <Figure.Caption>{flowers[flwr].name}</Figure.Caption>
                </Figure>
            </Link>)
            i++;
    }
    return images;
}

export default Home;