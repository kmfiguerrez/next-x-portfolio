'use client'

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export default function DisappearingText() {
    const jobTitles: Array<string[]> = [['IT', 'SPECIALIST'], ['JAVASCRIPT', 'DEVELOPER']];
    const firstJob = jobTitles[0]
    const secondJob = jobTitles[1]
    const [currentJob, setCurrentJob] = useState<string>('first-job'); // first-job, second-job.
    const [firstWord, setFirstWord] = useState<string>('');
    const [secondWord, setSecondWord] = useState<string>('');
    const [status, setstatus] = useState<string>('displaying'); // displaying, sleeping, removing.
    const [nextWord, setNextWord] = useState<string>('first-word'); // first-word, second-word.
    const countRef = useRef(0);


    const displayTextSync = (
        text: string,
        customHook: Dispatch<SetStateAction<string>>,
        currentWord: string,
        delay: number
        ) => {
        /**
         * text - characters to display.
         * customHook - state functions(setFirstWord, setSecondWord).
         * currentWord - state variables(firstWord, secondWord).
        */

        const timeoutId = setTimeout(() => {            
            customHook(currentWord + text[countRef.current])                        
            countRef.current++ // Count characters.
        }, delay)

        // To prevent displaying undefined.
        if (countRef.current === text.length) {
            clearTimeout(timeoutId)

            // Reset characters count.
            countRef.current = 0
            
            // To display the next word.
            setNextWord('second-word') 

            // If done with the second word.
            if (nextWord === 'second-word') {
                // Set the status.
                setstatus('sleeping')         
            }
        }        
    }

    const removeTextSync = (        
        customHook: Dispatch<SetStateAction<string>>,
        currentWord: string,
        delay: number
        ) => {
        /**         
         * customHook - state functions(setFirstWord, setSecondWord).
         * currentWord - state variables(firstWord, secondWord).
        */
        
        // Set the countRef to the length of the second word
        // then to the first word by reading the nextWord state variable.
        nextWord === 'second-word' ? countRef.current = secondWord.length : countRef.current = firstWord.length

        const timeoutId = setTimeout(() => {
            // Remove each character from the last char position.
            // Start first with the second word.
            let wordToRemove = currentWord.split('')
            wordToRemove.pop();
            
            customHook(wordToRemove.join(''))
            countRef.current--
        }, delay)

        // To prevent displaying undefined.
        if (countRef.current === 0) {
            clearTimeout(timeoutId)

            // If done with the second word then set it to first word.
            setNextWord('first-word')

            // If done with the first word then set the status.
            if (nextWord === 'first-word') {
                setstatus('displaying')    
            }            
        }         
    }

    const sleep = async (delay: number) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Done sleeping!")
                setstatus('removing')
            }, delay)
        })
    }

    useEffect(() => {

        const display = async () => {            
            
            // switch (status) {
            //     case 'displaying': {
            //         if (nextWord === 'first-word') {
            //             displayTextSync(firstJob[0], setFirstWord, firstWord, 100);
            //         } else {
            //             displayTextSync(firstJob[1], setSecondWord, secondWord, 100)                   
            //         }
            //         break;
            //     }
            //     case 'sleeping': {
            //         await sleep(3000)
            //         break;
            //     }
            //     case 'removing': {
            //         if (nextWord === 'second-word') {
            //             removeTextSync(setSecondWord, secondWord, 100)
            //         } else {
            //             removeTextSync(setFirstWord, firstWord, 100)
            //         }
            //         break;
            //     }                           
            //     default:
            //         break;
            // }


            switch (currentJob) {
                case 'first-job': {
                    // Check status
                    if (status === 'displaying') {                            
                        nextWord === 'first-word' ? (
                            displayTextSync(firstJob[0], setFirstWord, firstWord, 100)
                        ) : (
                            displayTextSync(firstJob[1], setSecondWord, secondWord, 100)
                        )
                        break;
                    } else if (status === 'sleeping') {
                        await sleep(3000)
                        break;
                    } else {
                        // Otherwise status is removing.
                        nextWord === 'second-word' ? (
                            removeTextSync(setSecondWord, secondWord, 100)
                        ) : (
                            removeTextSync(setFirstWord, firstWord, 100)
                        )                        
                    }                        

                    // If done with the first job, then set the next job.
                    if (currentJob === 'first-job' && status === 'removing' && nextWord === 'first-word') {
                        setCurrentJob('second-job')
                        break;
                    }                                        
                }
                case 'second-job':{
                    // Check status
                    if (status === 'displaying') {                            
                        nextWord === 'first-word' ? (
                            displayTextSync(secondJob[0], setFirstWord, firstWord, 100)
                        ) : (
                            displayTextSync(secondJob[1], setSecondWord, secondWord, 100)
                        )
                        break;
                    } else if (status === 'sleeping') {
                        await sleep(3000)
                        break;
                    } else {
                        // Otherwise status is removing.
                        nextWord === 'second-word' ? (
                            removeTextSync(setSecondWord, secondWord, 100)
                        ) : (
                            removeTextSync(setFirstWord, firstWord, 100)
                        )                        
                    }

                    // If done with the second job, then back to the first job.
                    if (currentJob === 'second-job' && status === 'removing' && nextWord === 'first-word') {
                        setCurrentJob('first-job')                    
                        break;
                    }
                }
            
                default:
                    console.log('Error: cant read jobs!')
                    break;
            }
            
        }        

        display()        
        
    }, [firstWord, secondWord, status, nextWord])    

    return (                            
      <p className={`
        before:content-[open-quote] 
        after:content-[close-quote]        
        sm:text-lg
        md:text-xl
        lg:text-3xl
        tracking-wider
      `}>
        {firstWord} <span className="text-blue-600">{secondWord}</span>
      </p>

      // <p>{nextWord.toString()}</p>
      // <p>{currentJob}</p>
      // <p>current count: {countRef.current}</p>
      // <p>status: {status.toString()}</p>
      // <p>{firstJob[0].length}</p>  
        
    )
}