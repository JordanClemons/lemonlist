import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import JoinPage from './components/joinPage/joinPage';
import todoPage from './components/todoPage/todoPage';
import HeaderPage from './components/headerPage/headerPage';

function App() {
  return (
    <div>
      <HeaderPage></HeaderPage>
      <Router>
        <Switch>
          <Route path="/" exact component={JoinPage}/>
          <Route path="/todo" exact component={todoPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
