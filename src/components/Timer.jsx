import { useEffect, useState } from "react"

export default function Timer({quesNum, setTimerOut, isAnswered}) {

  const [timer, setTimer] = useState(30);

  useEffect(() => {

    if(timer == 0) return setTimerOut(true);
    if(isAnswered) return;

    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);

    return () => clearInterval(interval);

  }, [timer, setTimerOut])

  useEffect(() => {
    setTimer(30)
  }, [quesNum])

  return (
    <div className="ms-3 text-5xl w-20 h-20 border-3 rounded-[50%] flex justify-center items-center relative left-8 top-24 md:left-28 md:top-28">
        <span>{timer}</span>
    </div>
  )
}
