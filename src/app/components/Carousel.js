'use client';

import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";
import axios from 'axios';
import Link from "next/link";


function LessonCarousels() {
  return (
    <div className="w-full h-full px-1 mr-2 bg-white rounded-lg">
      <h1 class="font-poppins text-2xl font-semibold text-black mb-2 mt-2 pl-4">Recent lessons</h1>
      <Carousel indicators={false} slide={false} className="dark h-5/6">
        {renderLessonGroups(lessonData)}
      </Carousel>
    </div>
  );
}

function LessonCard(props)  {
  return (
    <Link href={"classes/" + props.id} className="bg-white hover:bg-slate-100 rounded-lg mx-1 border-2 border-slate-200/50 overflow-hidden">
      <div className="h-1/3 w-full overflow-hidden object-center">
        <img className="object-center" src={props.image} />
      </div>
      <h1 className="font-poppins text-lg capitalize pt-2 pl-3 font-semibold">{props.lessonName}</h1>
    </Link>
  )
}


export default LessonCarousels;