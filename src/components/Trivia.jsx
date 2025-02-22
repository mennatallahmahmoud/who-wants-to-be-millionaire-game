import { useEffect, useState } from 'react';
import './Trivia.css';
import useSound from 'use-sound';
import Play from "../assets/sounds/src_sounds_play.mp3";
import Correct from "../assets/sounds/src_sounds_correct.mp3";
import Wrong from "../assets/sounds/src_sounds_wrong.mp3";

export default function Trivia({data, quesNum, setQuesNum, setTimerOut, isAnswered, setIsAnswered}) {

  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const[play] = useSound(Play);
  const[correctAns] = useSound(Correct);
  const[wrongAns] = useSound(Wrong);

  useEffect(() => {
    setQuestion(data[quesNum]);
    setIsAnswered(false);
  }, [data, quesNum])

  const handleAnswer = (answer) => {

    if(isAnswered) {
      return;
    } else {
      play();
    }

    setIsAnswered(true);
    setSelectedAnswer(answer);

    setTimeout(() => {
      const ans = document.querySelector(".ans.active");
      if(ans) {
        if (answer.correct) {
          setTimeout(() => {
            correctAns();
          }, 2000);
          ans.classList.add('correct')
        } else {
          setTimeout(() => {
            wrongAns();
          }, 2000);
          ans.classList.add("wrong")
        }
      }
    }, 2000)

    setTimeout(() => {
      answer.correct ? setQuesNum(quesNum + 1) : setTimerOut(true);
    }, 6000)
    
  }

  return (
    <section className='trivia-sec flex flex-col items-center'>
        <div className="question w-[80%] text-center p-[20px] text-lg lg:text-2xl font-bold border-[2px] border-solid border-white rounded-xl">
            {question && question.question}
        </div>
        <div className="answers w-[80%] grid grid-cols-12 gap-2 mt-6">
          {question && question.answers.map((a) => (
            <div key={a.text} className={`ans ${selectedAnswer === a ? `active` : ''} 
            col-span-6 p-[10px] cursor-pointer text-center border-[2px] border-solid border-white rounded-xl`}
            onClick={() => handleAnswer(a)}>{a.text}</div>
          ))}
        </div>
    </section>
  )
}
