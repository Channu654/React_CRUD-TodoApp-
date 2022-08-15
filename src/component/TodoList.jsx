import React from 'react';
import { TodoItem } from './TodoItem';

const TodoList = ({ list, handeldelet ,handeledit }) => {
  return (
    <div>
      TodoList
      {list.map((elem, index) => {
        return (
          <div>
            <TodoItem
              index={index}
              key={elem.id}
              value={elem}
              handeldelet={handeldelet}
              handeledit={handeledit}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
