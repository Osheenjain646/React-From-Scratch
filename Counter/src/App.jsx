import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [count , setCount] = useState(15)

  const Increment = () =>{
    if(count<20){
      setCount(count+1);
    }
  }

  const Decrement = () =>{
    if(count>0){
      setCount(count-1);
    }
  }

  return (
    <div className="app-wrapper">
      <div className="counter-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h1 className="counter-title">Counter App</h1>
          
          <div className="display-section">
            <h2 className="count-label">Current Value</h2>
            <div className="count-display-wrapper">
              <span className={`count-value ${count === 20 ? 'max' : ''} ${count === 0 ? 'min' : ''}`}>
                {count}
              </span>
            </div>
            
            <div className="progress-bar-container">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${(count / 20) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="controls-section">
            <button 
              className="btn btn-decrement" 
              onClick={Decrement}
              disabled={count === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              <span>Decrease</span>
            </button>
            <button 
              className="btn btn-increment" 
              onClick={Increment}
              disabled={count === 20}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              <span>Increase</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App