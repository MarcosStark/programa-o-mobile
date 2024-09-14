import { useState} from "react"
import './App.css'

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

  function result(){
    const dataFormNew = { ...dataForm }
    const resultCalc = dataFormNew.ethanol / dataFormNew.petrol
    alert(resultCalc)
  }

  console.log(dataForm);

  return ( 
    <div calss="bomb">
      <img id="station-img" src="src/assets/gas-station.jpg"></img>
      <h3>Bomba de combustível</h3>
      <div>
        <label>Valor da Gasolina</label><br></br>
        <input name="petrol" onChange={changeDataForm} placeholder="Informe o valor da gasolina"></input><br></br><br></br>
        <label>Valor do Etanol</label><br></br>
        <input name="ethanol" onChange={changeDataForm} placeholder="Informe o valor do etanol"></input><br></br><br></br>
        <button onClick={result}>Calcular</button>
      </div>
   </div>
  )
   
}

export default App