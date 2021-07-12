import "./postList.css";

import { Link } from "react-router-dom";

import React from 'react'

export default function postList() {
  return (
    <div>

<section class="text-gray-600 body-font overflow-hidden">
<h2 class="text-3xl font-large text-lg text-green-600 title-font mb-3 mt-5 text-center">Your Posts</h2>

  <div class="container px-5 py-10 mx-auto">
 
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-5 flex flex-wrap md:flex-nowrap bg-green-100 mb-7">
        <div class="md:w-120 md:mb-0 mb-6 m-5 flex flex flex-col">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block "
           src="https://source.unsplash.com/420x270/?news" />
        </Link>
          
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-700 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
          <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <div className="md:flex flex-wrap mt-3">
          <Link to="/dashboard/post" class="text-green-700 hover:text-green-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          
    <Link to="/dashboard/editpost" className="text-white bg-green-500 border-0 ml-7
     py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-md pt-2 ">Edit Post
      </Link>
      </div>
        </div>
      </div>
      <div class="py-5 flex flex-wrap md:flex-nowrap bg-green-100 mb-7">
        <div class="md:w-120 md:mb-0 mb-6 m-5 flex flex flex-col">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block "
           src="https://source.unsplash.com/420x260/?news" />
        </Link>
          
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-700 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
          <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <div className="md:flex flex-wrap mt-3">
          <Link to ="/dashboard/post" class="text-green-700 hover:text-green-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          
    <Link to="/dashboard/editpost" className="text-white bg-green-500 border-0 ml-7
     py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-md pt-2 ">Edit Post
      </Link>
      </div>
        </div>
      </div>

      <div class="py-5 flex flex-wrap md:flex-nowrap bg-green-100 mb-7">
        <div class="md:w-120 md:mb-0 mb-6 m-5 flex flex flex-col">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block "
           src="https://source.unsplash.com/420x280/?news" />
        </Link>
          
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-700 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
          <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          
          <div className="md:flex flex-wrap mt-3">
          <Link to="/dashboard/post" class="text-green-700 hover:text-green-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          
    <Link to="/dashboard/editpost" className="text-white bg-green-500 border-0 ml-7
     py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-md pt-2 ">Edit Post
      </Link>
      </div>
        </div>
      </div>
      </div>
  </div>
</section>
   
    </div>
  )
}
