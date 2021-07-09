import React, { FC } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList'

const App: FC = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
