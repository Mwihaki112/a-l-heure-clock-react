import { useState, useEffect } from 'react';
import { format } from "date-fns";
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);  
    }, []);

    return (
      <div className = "myContainer">
        <h1 className = "myH1">a` l'heure</h1>
        <p className = "time">{format(currentTime, "HH:mm:ss a")}</p>
        <p className = "date">{format(currentTime, "EEEE, MMM do yyyy")}</p>
      </div>
    );
  }
export default App;
