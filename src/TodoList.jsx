import React, { useState } from 'react';
import './App.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h2>Meine To-Do Liste</h2>
//       <input
//         type="text"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//       />
//       <button className="primary-button" onClick={addTodo}>Add</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//             {todo.text}
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => toggleTodo(index)}
//             />
//             {todo.completed && <button className="danger-button"  onClick={() => removeTodo(index)}>Delete</button>}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
return (
  <div style={{ textAlign: 'center', backgroundImage: 'url(" ")', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h2>Meine To-Do Liste</h2>
    <input
      type="text"
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
    />
    <button className="primary-button" onClick={addTodo}>Add</button>
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(index)}
          />
          {todo.completed && <button className="danger-button" onClick={() => removeTodo(index)}>Delete</button>}
        </li>
      ))}
    </ul>
  </div>
);
      }
export default TodoList;
