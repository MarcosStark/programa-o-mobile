import { useState} from "react"

function App() {

  const[valueInput, setValueInput] = useState('')
  return ( 
    <div>
      <h1>Bomba de combustível</h1>
      <div>
        <label>Valor da Gasolina</label><br></br>
        <input placeholder="Informe o valor da gasolina..."></input><br></br><br></br>
        <label>Valor do Etanol</label><br></br>
        <input placeholder="Informe o valor do etanol..."></input>
      </div>
   </div>
  )
   
}

export default App