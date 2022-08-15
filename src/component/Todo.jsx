import React, { useState } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  const [input, setInput] = useState(''); //to set input
  const [list, setList] = useState([]); // to show list of todo here

  const handlechange = (e) => {
    setInput(e.target.value);
  };
  console.log('input:', input);

  const formsubmit = (e) => {
    e.preventDefault();
  };

  const Additem = () => {
    let payload = {
      title: input,
      id: uuidv4(),
    };
    setList([payload, ...list]);
    setInput('');
  };

  // delete
  const handeldelet = (id) => {
    let newlist = list.filter((item) => {
      return  item.id !== id;
    });
    setList(newlist);
  };

  // edit
const handeledit=(value ,id)=>{
  setInput(value)
  handeldelet(id)
}

  return (
    <div>
      <h1>TodoApp</h1>
      <form action=' ' onSubmit={formsubmit}>
        <input type='text' value={input} onChange={handlechange} />
        <button onClick={Additem}>Add</button>

        <TodoList
          list={list}
          handeldelet={handeldelet}
          handeledit={handeledit}
        />
      </form>
    </div>
  );
};

export default Todo;
