import { useState, useEffect } from 'react'
import './App.css'

/*
3. Mach eine einfache Anwendung, die eine Liste von Einträgen von einer öffentlichen API (z.B. von https://jsonplaceholder.typicode.com/posts) abruft und anzeigt. */
function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    async function fetchData(){
      // 1. ich hole mir dir Daten aus der API
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      const myArray = await resp.json();
      console.log(myArray)
      // 2. ich setze mit diesen daten meinen posts State
      setPosts(myArray);
    }
    fetchData();
  }, []) // wenn wir als dependency einen leeren Array angeben, dann holen wir uns den fetch nur 1-2 mal. 
  return (
    <>
      {posts.map(postObj => {
        return(
          <div key={postObj.id}>
            <p>{postObj.title}</p>
          </div>
        )
      })}
    </>
  )
}

export default App
