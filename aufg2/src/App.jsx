import { useState } from 'react'
import './App.css'

/* Baue eine To-Do-App, bei der man über ein Eingabefeld Einträge hinzufügen und über einen Button wieder entfernen kann. Nutze dabei State, um die Liste der To-Dos zu verwalten.*/
function App() {
  const [todos, setTodos] = useState(["aufräumen", "einkaufen"]) // alle todos werden in einem Array gespeichert
  const [todoInput, setTodoInput] = useState(""); // State für das input feld aus unserem html
  const handleInputChange = (event) => {
    setTodoInput(event.target.value); // Wenn wir was ins input feld tippen, setzen wir unseren todoInput State.
  }

  const handleTodoSubmit = () => {
    setTodos([...todos, todoInput]); // Wenn submit geklickt wird, pushen wir den Text aus unserem input feld in den todos Array
    setTodoInput(""); // ... und wir leeren wieder das todo Input html Feld.
  }

  const deleteTodo = (todoText) => {
    const updatedTodoArray = todos.filter(todo => todo !== todoText); // Wir bauen einen neuen Array in dem nur die todos drinnen sind, die nicht den selben Text wie unserem Funktionsaufruf haben. 
      setTodos(updatedTodoArray); // Diesen neuen Array benutzen wir, um den State todos wieder neu zu setzen. 
  }
  return (
    <>
      <label for="todoInput">TODO:</label>
      <input name="todoInput" onChange={handleInputChange} value={todoInput}></input> {/* bei jedem Tastendruck, wird der todoInput State neu gesetzt. Und wir holen uns, dass was in dem input stehen soll, wieder aus dem todoInput State. */}
      <button onClick={handleTodoSubmit}>add todo</button>

      <h3>Todos:</h3>
      {todos.length === 0 ? <p>keine todos</p> : // Wenn der todos Array leer ist, dann render <p> keine todos </p>
        todos.map((todo, index) => { // sonst gehe durch den array und rendere für jedes element im array folgendes: 
          return (<div key={index}>
            <p>{todo}</p>
            <button onClick={() => deleteTodo(todo)}>delete</button> {/* wir führen deleteTodo aus und übergeben den Text des jetzigen Elements im Array */}
          </div>)
        })
      }
    </>
  )
}

export default App
