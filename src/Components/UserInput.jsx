
export default function UserInput({userInputProp, handleChangesProp}) {
  
  return (
    <section id="user-input">

      <div className="user-group">
        <p>
          <label>Initial Investment</label>
          <input 
            type="number" 
            required
            value={userInputProp.initialInvestment}
            onChange={(event) => handleChangesProp('initialInvestment', event.target.value)}
            />
        </p>
      
    
       <p>
           <label>Annual Investment</label>
          <input 
            type="number" 
            required 
            value={userInputProp.annualInvestment}
            onChange={(event) => handleChangesProp('annualInvestment', event.target.value)}
            />
        </p>
      </div>

      <div className="user-group">
        <p>
           <label>Expected Return</label>
           <input 
            type="number" 
            required 
            value={userInputProp.expectedReturn}
            onChange={(event) => handleChangesProp('expectedReturn', event.target.value)}
            />
        </p>
        <p>
           <label>Duration</label>
           <input 
            type="number" 
            required 
            value={userInputProp.duration}
            onChange={(event) => handleChangesProp('duration', event.target.value)}
            />
        </p>
      </div>
    </section>
      
  )
}