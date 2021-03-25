import { HashRouter, Switch, Route } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

import Container from "react-bootstrap/Container";
import Home from "./components/Home";
import Login from "./components/Login";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Quiz from './components/Quiz';



function App() {
  
  const history = useHistory();
  const [username, setUsername] = useState(localStorage.getItem('username')|| '');
  const [quizNumber, setQuizNumber] = useState(localStorage.getItem('quizID')|| 0);
  
  let loggedIN = (email) => {
    localStorage.setItem('username', email);
    setUsername(email);
  }

  let quizClicked = (quizID) => {
    localStorage.setItem('quizID', quizID);
    setQuizNumber(quizID);
  }
  
  return (
    <HashRouter>
      <Header />
      <Container fluid>
        <NavigationBar username={username} />
        <Switch>
          <Route exactpath="/">
            <Home quizClicked={quizClicked} />
          </Route>
          <Route path="/login">
            <Login loggedIN={loggedIN} />
          </Route>
          <Route path='/quiz'>
            <Quiz quizNumber={quizNumber}/>
          </Route>
        </Switch>
      </Container>
      <Footer />
    </HashRouter>
  );
}

export default App;
