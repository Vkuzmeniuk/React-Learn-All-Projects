import { useState, useEffect } from "react";
function useCounter(forwards=true){
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (forwards===true){
            setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);
  
      return () => clearInterval(interval);
    }, [forwards]);

    return counter;

};


export default useCounter;