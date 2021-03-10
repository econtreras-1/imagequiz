import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Header from "./components/Header";



function App() {
  return (
    <HashRouter>
      <Header />
      <NavigationBar />
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
