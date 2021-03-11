import { HashRouter, Switch, Route } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Home from "./components/Home";
import Login from "./components/Login";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Header from "./components/Header";



function App() {
  return (
    <HashRouter>
      <Header />
      <Container fluid>
      <NavigationBar />
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
      </Switch>
      </Container>
      <Footer />
    </HashRouter>
  );
}

export default App;
