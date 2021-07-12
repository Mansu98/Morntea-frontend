import React from 'react';
import {Link} from "react-router-dom";

export default function UserList() {
  return (
    <div>
          <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/2 text-center sm:p-14 sm:py-8">
          <div className="w-25 h-25 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img src="https://res.cloudinary.com/dhtobgfyw/image/upload/v1625728069/images_sh6hoj.jpg" 
              class="w-25 h-25  rounded-full" alt="director"/>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield</h2>

            <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
            <div className="md:flex flex-wrap">
    <Link to="/dashboard/editprofile" className="inline-flex text-white bg-green-500 border-0 ml-3
     py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-md text-base mt-4 md:mt-0">Edit Profile
      </Link>
      </div>
          </div>
        </div>
        <div className="sm:w-2/3 sm:p-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t 
        mt-4 pt-4 sm:mt-0 text-justify sm:text-left">
        
          <div className=" text-lg mb-4 ">
          <h2 class=" title-font font-medium text-green-500 mb-2">Username: 
          <h2 className= "title-font font-medium text-gray-700">Phoebe Caulfield</h2></h2> 
            
          <h2 class=" title-font font-medium text-green-500 mb-2">Email: 
          <h2 className= "title-font font-medium text-gray-700">PhoebeCaulfield@gmail.com</h2></h2>
       

          <h2 class=" title-font font-medium text-green-500 mb-2">Gender: 
          <h2 className= "title-font font-medium text-gray-700">Female</h2></h2>

          <h2 class=" title-font font-medium text-green-500 mb-2">Contact no: 
          <h2 className= "title-font font-medium text-gray-700">123-456-7890</h2></h2>
          
          </div>
         

        </div>
      </div>
    </div>
  )
}
