import { ThemeProvider } from './ThemeContext'
import TextDisplay from './TextDisplay';
import Dropdown from './Dropdown';
/* 
4. Entwickle eine kleine App mit drei Komponenten: Eine Komponente setzt die Farbe des Themes (Context), eine zweite Komponente zeigt einen Text in dieser Farbe an und eine dritte Komponente lässt den Nutzer die Farbe über ein Dropdown-Menü ändern. */

function App() {

  return (
    <>
      <ThemeProvider>
        <h1>Color Picker App</h1>
        <TextDisplay />
        <Dropdown />
      </ThemeProvider>
    </>
  )
}

export default App
