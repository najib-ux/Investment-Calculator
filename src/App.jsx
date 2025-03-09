import { useState } from "react";

import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Result from "./Components/Result"


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const validYear = userInput.duration >= 1;

  function handleChanges(inputIdentifier, newValue) {
    setUserInput(prevInputUser => {
      return {
        ...prevInputUser,
        [inputIdentifier]: +newValue
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput userInputProp={userInput} handleChangesProp={handleChanges} />
      {validYear ? 
        <Result input={userInput}/> : 
        <p className="center">Please, Enter Valid Data(Year greater than one)</p>
      };
    </>
    

      

    
  )
}

export default App
