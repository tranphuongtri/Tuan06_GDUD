import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React,{ useReducer,useRef } from 'react';
function App() {
  // const [count, setCount] = useState(0)
  const initState = 0;
  const [inputValue, setInputValue] = useState("");
  // const count1 = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  function reducer(state,action){
    switch(action.type){
      case 'Cong':
        return state + 1;
      case 'Tru':
        return state -1;
      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
     
      <p>You clicked {count}</p>
      <button onClick={() => dispatch({ type: 'Cong' })}>+</button>
      <button onClick={() => dispatch({ type: 'Tru' })}>-</button>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h3>Render Count: {count.current}</h3>
    </div>
    
  );


  // return (
  //       <div>
  //         <p>You clicked {count}</p>
  //         <button onClick={() => setCount(count + 1)}>+</button>
  //         <button onClick={() => setCount(count -1)}>-</button>
  //       </div>
  //     );
};

// const initialTodos = [
//   { id: 'a', task: 'Hoc 1-3', complete: true },
//   { id: 'b', task: 'Hoc 4-6', complete: true },
//   { id: 'c', task: 'Hoc 7-9', complete: false },
// ];
// const todoReducer = (state, action) => {
//   switch (action.type) {
//     case 'DO_TODO':
//       return state.map(todo =>
//         todo.id === action.id ? { ...todo, complete: true } : todo
//       );
//     case 'UNDO_TODO':
//       return state.map(todo =>
//         todo.id === action.id ? { ...todo, complete: false } : todo
//       );
//     default:
//       return state;
//   }
// };

// const App = () => {
//   const [todos, dispatch] = React.useReducer(todoReducer, initialTodos);

//   const handleChange = todo => {
//     dispatch({
//       type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
//       id: todo.id,
//     });
//   };

//   return (
//     <ul>
//       {todos.map(todo => (
//         <li key={todo.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={todo.complete}
//               onChange={() => handleChange(todo)}
//             />
//             {todo.task}
//           </label>
//         </li>
//       ))}
//     </ul>
//   );
// };

export default App;
