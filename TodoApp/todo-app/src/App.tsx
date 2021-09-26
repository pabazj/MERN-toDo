import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditToDo';

function App() {
  return (
    <div className="App">
   <Switch>
     <Route exact path="/" component={Main} />
     <Route exact path="/addTodo" component={AddTodo} />
     <Route exact path="/editTodo/:id" component={EditTodo} />
   </Switch>
    </div>
  );
}

export default App;
