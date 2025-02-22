import useSound from 'use-sound';
import './MainScreen.css';
import Timer from './Timer';
import Trivia from './Trivia';
import Pyramid from './Pyramid';
import { data, pyrmaid } from '../data';
import { useEffect, useState } from 'react';
import Start from './Start';
import Win from "../assets/sounds/win.mp3";

function Main() {

    const [username, setUsername] = useState("");
    const [quesNum, setQuesNum] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const [timerOut, setTimerOut] = useState(false);
    const [earned, setEarned] = useState("$ 0");
    const [win] = useSound(Win);

    useEffect(() => {
        quesNum > 0 && setEarned(pyrmaid.find((i) => i.id === quesNum ).amount)
    }, [pyrmaid, quesNum]);

    useEffect(() => {
        if(quesNum === data.length) {
            win();
        }
    }, [quesNum])

    return (
        <main className="grid grid-cols-12">
            {username ?
            <>
            {quesNum < data.length ?
            <>
            <section className='main-container col-span-9 h-screen bg-cover text-white text-left flex flex-col justify-around'>
                {timerOut ? <h1 className='text-center text-2xl lg:text-4xl font-bold'>You Earned : {earned}</h1> : 
                (
                <>
                <div className='top '>
                    <div className='timer'>
                        <Timer quesNum={quesNum} setTimerOut={setTimerOut} isAnswered={isAnswered}/>
                    </div>
                </div>
                <div className='bottom '>
                    <div className='ques'>
                        <Trivia data={data} quesNum={quesNum} setQuesNum={setQuesNum} setTimerOut={setTimerOut} isAnswered={isAnswered} setIsAnswered={setIsAnswered}/>
                    </div>
                </div>
                </>
                )}
            </section>
            <section className='col-span-3'><Pyramid quesNum={quesNum}/></section>
            </> : 
            <div className='col-span-12 h-screen font-bold text-white flex justify-center items-center flex-col'>
                <h1 className='text-2xl lg:text-5xl mb-4 text-amber-400'>Congratulations {username}</h1>
                <span className='block text-xl lg:text-4xl'>You Earned : {earned}</span>
            </div>
            }
            </> :
            <section className='col-span-12'>
                <Start setUsername={setUsername}/>
            </section>
            }
        </main>
    )
}

export default Main;