import React, {useState} from 'react'; 
import defaultAnswers from './answers.json';
import choice from './random';


/** EightBall generate random answer and has a color pertaining to the answer
 * 
 * props: answers should be an array with {msg, color} object
 * 
 * state: {msg, color} of current answer
 * 
 */
const EightBall = ({answers = defaultAnswers}) => {

    const [answer, setAnswer ] = useState({
        msg:"Think of a Question",
        color:"black"
    });

    function handleClick(evt){
        setAnswer(choice(answers));
    }

    return (
        <div
        onClick ={handleClick}
        style={{backgroundColor: answer.color}}>
            <b>{answer.msg}</b>
        </div>
    )
}

export default EightBall;