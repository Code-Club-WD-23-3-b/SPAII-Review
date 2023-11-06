import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import one from './assets/1.jpg';
import two from './assets/2.jpg';
import three from './assets/3.jpg';
import four from './assets/4.jpg';
import five from './assets/5.jpg';

function App() {

  const imgs = [one, two, three, four, five];

  return (
    <>
      {(imgs.length === 0) ? // Konditionale Abfage, ist der array leer?
      <h1> array ist leer </h1> : // falls true
      imgs.map((imagePath, index) => { // falls false
        return (
          <div key={index}>
            <h1>image: {index}</h1>
            <img src={imagePath} />
            <p>das hier ist bild nummer: {index}</p>
          </div>
        )
      })}
    </>
  )
}

export default App
