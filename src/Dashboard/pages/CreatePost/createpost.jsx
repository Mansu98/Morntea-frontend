import {Link} from "react-router-dom";

import React from 'react'

export default function createpost() {
  return (
    <div>
      
      <section className="text-gray-600 body-font relative">
      <h2 class="text-3xl font-large text-lg text-green-600 title-font mb-3 mt-5 text-center">Create New Post</h2>
  <div className="container px-5  mx-auto">
    <div className="lg:w-1/2 md:w-2/3 mx-auto bg-gray-100 p-7 mb-10 rounded border">
    
    <form method="POST">
      <div className="flex flex-wrap -m-2">

        <div className="p-2 w-full">
        <label for="title" class="leading-7 text-md text-gray-600"> Post Title</label>
        <input type="text" id="title" name="title" class="w-full bg-gray-100 bg-opacity-50 
        rounded border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 
        focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
         duration-200 ease-in-out " />
        </div>
        <div className="p-2 w-full">
          <div className="relative">
          <label for="image" class="leading-7 text-md text-gray-600">Choose Your Image</label>
          <input type="file" id="image" name="image" accept="image/*" class="w-full bg-gray-100 bg-opacity-50 
            rounded border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 
              focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
             duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-md text-gray-600">Your Post Detail</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded
             border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 
             h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors 
             duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full ">
          <Link className="flex text-center mx-auto text-white bg-green-500 border-0 py-2 px-8 
          focus:outline-none hover:bg-green-600 rounded text-lg "> Post</Link>
        </div>
     
    </div>
    </form>
    </div>
  </div>
</section>
    </div>
  )
}
