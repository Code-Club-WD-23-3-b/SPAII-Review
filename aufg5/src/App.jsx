import { useState } from 'react'


/* Bonus: Entwickle ein kleines Quiz, bei dem jede Antwort über einen Button ausgewählt wird. Der aktuelle Score und die ausgewählte Antwort sollen im State gehalten und auf dem Bildschirm angezeigt werden. */

function App() {
  const questions = [
    {
      questionText: "Was ist die Hauptstadt von Frankreich?",
      answerOptions: [
        { answerText: 'Berlin', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Rom', isCorrect: false },
        { answerText: 'Madrid', isCorrect: false },
      ]
    },
    {
      questionText: "Wer von euren Lehrern kann einen Kickflip ohne sich tierisch weh zu tun?",
      answerOptions: [
        { answerText: 'Niels', isCorrect: false },
        { answerText: 'Antonio', isCorrect: false },
        { answerText: 'Florian', isCorrect: false },
        { answerText: 'Micha', isCorrect: true }
      ]
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  const handleAnswerButtonClick = (answerObj) => {
    // falls es noch eine nächste Frage gibt:
    if (currentQuestion < questions.length-1) {
      // falls die Antwort richtig ist, setze score += 1
      if (answerObj.isCorrect) setScore(score + 1);
      // gehe zur nächsten Frage: 
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentQuestion === questions.length-1) { // falls wir bi der letzten Frage sind
      // falls das quiz noch nicht beatwortet wurde 
      if(!quizDone){
        if (answerObj.isCorrect) setScore(score + 1);
        setQuizDone(true);
      }
    }
  }

return (
  <>
    <div>Du hast einen Score von {score} aus {questions.length} </div>
    <h1>{questions[currentQuestion].questionText}</h1>
    <ul>
      {questions[currentQuestion].answerOptions.map((answerObj) => (

        <li key={answerObj.answerText}>
          <button onClick={() => handleAnswerButtonClick(answerObj)}>{answerObj.answerText}</button>
        </li>
      ))}
    </ul>

  </>
)
}

export default App
