import React, {useState} from 'react';
import Todo from './components/Todo';

import './App.css';

function App() {
  const [inputTitle, setInputTitle] = useState('');
  // const [todo, setTodo] = useState({
  //   id: '',
  //   title: '',
  //   complete: false,
  // });
  const [lists, setLists] = useState([]);

  const todoHandler = (e) => {

    setInputTitle(e.target.value);
  };

  const addTodoHandler = () => {
    const newTodo = {id: Date.now().toString(), title: inputTitle};
    setLists([newTodo, ...lists]);
    setInputTitle('');
  };

  const removeTodoHandler = (deleteId) => {
    const filteredTodoList = lists.filter(item=>item.id !== deleteId);
    setLists(filteredTodoList);
  };

  const completeTodoHanlder = (completeId) => {
    const completeIndex = lists.findIndex(item => item.id === completeId);
    const newLists = [...lists];
    newLists[completeIndex].complete = !newLists[completeIndex].complete;
    setLists(newLists);
  };

  let total = lists.length;
  let completeLists = lists.filter(item => item.complete=== true);
  let completedNum = completeLists.length;
  let activeLists = lists.filter(item => item.complete === false);
  let activeNum = activeLists.length;


  return (
    <div className='container'>
      <h1>Todos</h1>
      <div className='inputContainer'>
        <input type='text' value={inputTitle} onChange={todoHandler}/>
        <button onClick={addTodoHandler}>add</button>
      </div>
      <div className='static'>
        <div className='staticItem'>Total:{total}</div>
        <div className='staticItem'>Completed:{completedNum}</div>
        <div className='staticItem'>Active:{activeNum}</div>
      </div>
      <div className='listContainer'>
        <table>
          {lists.map((item)=>{
            return <Todo 
                      key={item.id} 
                      todoItem={item} 
                      removeHandler={removeTodoHandler}
                      completeHandler={completeTodoHanlder}
                    />
          })}
        </table> 
      </div>
    </div>
  );
}

export default App;
