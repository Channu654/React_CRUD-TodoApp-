import { React } from 'react';

const TodoItem = ({ index, elem, value, handeldelet, handeledit }) => {
  console.log('value:', value);
  return (
    <div>
      <h1>{value.title}</h1>
      <button onClick={() => handeldelet(value.id)}>Delete</button>
      <button onClick={() => handeledit(value.title, value.id)}>Edit</button>
    </div>
  );
};
export { TodoItem };
