import React from 'react';
import {Link} from "react-router-dom";

export default function editprofile() {
    return (
        <div>
      
            <div className="lg:w-4/5 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full
             mt-10 md:mt-30 relative z-5 shadow-md mb-10">
             
      <b className="text-green-600 text-xl font-large title-font mb-5">Edit Profile</b>

      <form method="POST">
      <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4
       sm:px-0 items-end mb-5">
      <div class="relative flex-grow w-full">
        <label for="username" class="leading-7 text-md text-gray-600">Username</label>
        <input type="text" id="username" name="username" class="w-full bg-gray-100 bg-opacity-50 
        rounded border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 
        focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
         duration-200 ease-in-out " />
      </div>
      <div class="relative flex-grow w-full">
      <label for="email" class="leading-7 text-md text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 
        rounded border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 
        focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
         duration-200 ease-in-out" />
      </div>
      </div>
  

      <div class="flex lg:w-full w-full mb-5 sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      
      <div class="relative flex-grow w-full">
<label for="image" class="leading-7 text-md text-gray-600">Upload Your Photo</label>
  <input type="file" id="image" name="image" accept="image/*" class="w-full bg-gray-100 bg-opacity-50 
  rounded border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 
  focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
   duration-200 ease-in-out" />
</div>

      <div class="relative flex-grow w-full ">
      <label for="password" class="leading-7 text-md text-gray-600">Current Password</label>
        <input type="password" id="password-" name="password" class="w-full bg-gray-100 bg-opacity-50 
        rounded border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 
        focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
         duration-200 ease-in-out" />
      </div>
      </div>

      <div class="flex lg:w-full w-full mb-5 sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 
      space-y-4 sm:px-0 items-end">
      
      <div class="relative flex-grow w-full">
      <label for="npassword" class="leading-7 text-md text-gray-600">New Password</label>
        <input type="password" id="npassword" name="npassword" class="w-full bg-gray-100 bg-opacity-50 
        rounded border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 
        focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
         duration-200 ease-in-out" />
      </div>

      <div class="relative flex-grow w-full">
<label for="cpassword" class="leading-7 text-md text-gray-600">Confirm Password</label>
  <input type="password" id="cpassword" name="cpassword" class="w-full bg-gray-100 bg-opacity-50 
  rounded border border-green-500 focus:border-green-500 focus:bg-white focus:ring-2 
  focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
   duration-200 ease-in-out" />
</div>
      </div>

      <Link to="/dashboard/users"  className="text-white bg-green-500 border-0 py-2 px-8 mt-2 focus:outline-none 
      hover:bg-green-600 rounded text-md " type="submit">Save Changes</Link>
      </form>
      </div>

    
    </div>
    
    )
}
