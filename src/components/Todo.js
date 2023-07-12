// import { useEffect, useState } from "react";

// function App() {
//   const [toDo, setToDo] = useState("")
//   const [toDos, setToDos] = useState([])
//   const onChange = (event) => setToDo(event.target.value)
//   const onSubmit = (event) => {
//     event.preventDefault()
//     if (toDo === "") {
//       return      
//     }
//     // toDos.push(event.target.value) --> state를 직접적으로 수정할 수 없다!!! (toDos를 state로 지정)
//     setToDos((currentArray) => [toDo, ...currentArray])
//     setToDo("")
//   }
//   useEffect(() => console.log(toDos), [toDos])
//   return (
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do" />
//         <button>Add To Do</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((item, index) => <li key={index}>{item}</li>)}
//       </ul>
//     </div>
//   );
// }

// export default App;
