import { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
function LessonStartCard() {
    const [lessonState, setLessonState] = useState(0);

    const changeLessonState = (state) => {
        setLessonState(state);
      }

    

    const getBackgroundColor = (lessonState) => {
        switch (lessonState) {
          case 1:
            return '#EBFEEB'; // Green color for lessonState 1
          case 2:
            return '#FFFDCC'; // Yellow color for lessonState 2
          case 3:
            return '#FFDBCC'; // Red colour
          default:
            return '#D1D5DB'; // Default color for other states
        }
      };
    
      const getText = (lessonState) => {
        switch (lessonState) {
          case 1:
            return 'Lesson in Progress'; // Green color for lessonState 1
          case 2:
            return 'Lesson paused'; // Yellow color for lessonState 2
          case 3:
            return 'Lesson ended'; // Red colour
          default:
            return 'Start Lesson'; // Default color for other states
        }
      };
    
      const getBorderColor = (lessonState) => {
        switch (lessonState) {
          case 1:
            return '#2A8433'; // Green color for lessonState 1
          case 2:
            return '#FFCE70'; // Yellow color for lessonState 2
          case 3:
            return '#FF7070'; // Red colour
          default:
            return '#27936a'; // Default color for other states
        }
      };
    

    return (
        
     
    <div className={` w-full h-[12vh] mt-8 rounded-3xl border-2  pt-2 ${
        lessonState === 0 ? "text-white bg-gradient-to-r from-green-300 to-cyan-300 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800" : 
        lessonState === 1 ? "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700" : 
        lessonState === 2 ? " bg-gradient-to-r from-yellow-100 to-pink-100 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700" : 
        lessonState === 3 ? " bg-gradient-to-r from-red-300 to-pink-200 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700" : 
        ""
        
      }`}
    style={{ borderColor: getBorderColor(lessonState)}}>
    
    <div className='flex flex-col items-center'>
    {lessonState === 0 && (
      <div className="border-2 h-10 w-10 rounded-full flex justify-center items-center hover:animate-pulse"
      style={{borderColor: getBorderColor(lessonState)}}>
        <svg onClick={() => changeLessonState(1)} style={{ fill: getBorderColor(lessonState) }}  className="svg-icon h-7 pl-1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M891.161 512l-749.992 450v-900l749.992 450z"  /></svg>

      </div>      

    )}
    {lessonState === 1 && (
      <div class="border-2 h-10 w-10 rounded-full flex justify-center items-center animate-pulse"
      style={{borderColor: getBorderColor(lessonState)}}>
        <svg onClick={() => changeLessonState(2)}  width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 0V15" stroke="#2A8433" stroke-width="3"/>
        <path d="M7 0V15" stroke="#2A8433" stroke-width="3"/>
        </svg>
      </div>      

    )}

{lessonState === 2 && (
<div style={{ display: 'flex' }}>
<div
className="border-2 h-10 w-10 rounded-full flex justify-center items-center"
style={{ borderColor: getBorderColor(lessonState), marginRight: '10px' }}
>
<svg
onClick={() => changeLessonState(1)}
style={{ fill: getBorderColor(lessonState) }}
className="svg-icon h-7 pl-1"
viewBox="0 0 1024 1024"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
>
<path d="M891.161 512l-749.992 450v-900l749.992 450z" />
</svg>
</div>

<div
className="border-2 h-10 w-10 rounded-full flex justify-center items-center"
style={{ borderColor: getBorderColor(lessonState) }}
>
<svg  onClick={() => changeLessonState(3)} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="17" height="17" fill="#FFCE70" />
</svg>
</div>
</div>
)}




   
    
    <span className="text-black">{getText(lessonState)}</span>
    </div>
  </div>

  
        
            );
            }

export default LessonStartCard;