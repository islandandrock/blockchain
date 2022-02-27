
import './App.css';
import React, { useEffect, useState } from "react";


function App() {  
    const calcTimeLeft = () => {
        return {
            hours: 23 - new Date().getHours(),
            minutes: 59 - new Date().getMinutes(),
            seconds: 59 - new Date().getSeconds()
        };
    };

    const [timeLeft, setTimeLeft] = useState(calcTimeLeft()); 
    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calcTimeLeft());
        }, 1000);
      });
    return (
    <div className="App">
        <div className="header"></div>
        <form>
            <div>
                <input type="color"/>
            </div>
            <div>
                <input placeholder="Position..."/>
            </div>
            <div>
                zzzz
            </div>
            <div>
                {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds} 
            </div>
        </form>
    </div>
  );
}

export default App;