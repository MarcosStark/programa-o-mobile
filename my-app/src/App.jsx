import { useState} from "react"

function App() {

  const[valueInput_petrol, setValueInput_petrol] = useState('')
  const[valueInput_ethanol, setValueInput_ethanol] = useState('')

  const onChangeInput_petrol = (event) => {
    setValueInput_petrol(event.target.value)
  }

  const onChangeInput_ethanol = (event) => {
    setValueInput_ethanol(event.target.value)
  }

  return ( 
    <div>
      <h1>Bomba de combustível</h1>
      <div>
        <label>Valor da Gasolina</label><br></br>
        <input onChange={onChangeInput_petrol} placeholder="Informe o valor da gasolina..."></input><br></br><br></br>
        <label>Valor do Etanol</label><br></br>
        <input onChange={onChangeInput_ethanol} placeholder="Informe o valor do etanol..."></input>
      </div>
   </div>
  )
   
}

export default App