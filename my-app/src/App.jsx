import { useState} from "react"

function App() {

  const[dataForm, setDataForm] = useState({
    petrol: '',
    ethanol: '',
  })

  const changeDataForm = (event) => {
    setDataForm((dataForm) => ({
      ...dataForm,
      [event.target.name]: event.target.value,
    }))
  }

  console.log(dataForm);

  return ( 
    <div>
      <h1>Bomba de combustível</h1>
      <div>
        <label>Valor da Gasolina</label><br></br>
        <input name="petrol" onChange={changeDataForm} placeholder="Informe o valor da gasolina..."></input><br></br><br></br>
        <label>Valor do Etanol</label><br></br>
        <input name="ethanol" onChange={changeDataForm} placeholder="Informe o valor do etanol..."></input><br></br><br></br>
      </div>
   </div>
  )
   
}

export default App