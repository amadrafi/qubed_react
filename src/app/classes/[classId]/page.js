'use client';

import { useState, useEffect } from 'react';
import { Badge } from 'flowbite-react';
import axios from 'axios';
import playButton from './triangle-play.svg'
import Image from 'next/image';
import { width } from '@mui/system';
import styled, { keyframes } from 'styled-components'


function ClassDetails({ params }) {

  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [lessonState, setLessonState] = useState(0);




  // 0 - not started, 1 - in progress, 2 - paused, 3 - finished

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
        return '#363636'; // Default color for other states
    }
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const changeLessonState = (state) => {
    setLessonState(state);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://0988-185-92-25-79.ngrok-free.app/findLesson/${params.classId}`,
          {
            headers: {
              'ngrok-skip-browser-warning': '69420',
            },
          }
        );

        console.log(response.data);
        setLesson(response.data);
      
       
        
        setLoading(false);
        return null;
     
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    
    <>

{loading ? (
        // Show loading symbol or message
        <div class="bg-slate-100 flex flex-col justify-start items-center  h-full h-screen flex items-center">
        <svg aria-hidden="true" class="w-8 h-[100vh] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span class="sr-only">Loading...</span>
    </div>

    

      ) : (

        <div className='bg-slate-100 min-h-full'>
         

  
        <div className="bg-white-500 w-full h-[6vh] flex items-center">
        {/* <div className='bg-slate-100'> */}
        <a href={`/classes/`}>
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
      </svg>
      </a>
        </div>
        <di className="flex justify-center items-center">
        <div className="bg-zinc-300 w-full h-[30vh] rounded-t-3xl flex flex-col">
        <img class="object-cover max-h-full rounded-t-3xl" src={lesson.lessonImage} />
        </div>
        </di>
    
        <div class="bg-white-500 p-1 h-full">
      <div class="bg-white-500 flex flex-col justify-start  mt-16 mx-auto w-full max-w-[45vw] h-full">
        
        <p class="mt-0 font-poppins text-2xl font-semibold text-black">{lesson.lessonName}</p>
        <div class="flex">
  <div class="mt-2 inline-block max-w-min mr-2">
    <Badge color="purple">
      {lesson.subject}
    </Badge>
  </div>
  <div class="mt-2 inline-block max-w-min">
    <Badge color="blue">
      {formatDate(lesson.date)}
    </Badge>
  </div>
</div>

{lesson.lessonStatus != 'completed' && (
            <div class="w-full h-[12vh] mt-8 rounded-3xl border-2 flex flex-col items-center pt-2" 
            style={{backgroundColor: getBackgroundColor(lessonState), borderColor: getBorderColor(lessonState)}}>
            

            {lessonState === 0 && (
              <div class="border-2 h-10 w-10 rounded-full flex justify-center items-center"
              style={{borderColor: getBorderColor(lessonState)}}>
                <svg onClick={() => changeLessonState(1)} style={{ fill: getBorderColor(lessonState) }}  class="svg-icon h-7 pl-1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M891.161 512l-749.992 450v-900l749.992 450z"  /></svg>

              </div>      

            )}
            {lessonState === 1 && (
              <div class="border-2 h-10 w-10 rounded-full flex justify-center items-center"
              style={{borderColor: getBorderColor(lessonState)}}>
                <svg onClick={() => changeLessonState(2)} class="animate-pulse" width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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




           
            
            <span class="text-black">{getText(lessonState)}</span>
          </div>
          
          )}


    
        <p class="font-poppins text-lg font-semibold text-black mt-10 mb-6">View Lesson plan</p>
        <div class="w-2/3">

        </div>
    
        
    
        <p class="font-poppins text-lg font-semibold text-black mt-10 mb-6">Extra notes</p>
        <div class="w-2/3">

          </div>
       
    
    
    
       
      </div>
    </div>
    </div>

        )}
    
    
    
    </>
  );
}

export default ClassDetails