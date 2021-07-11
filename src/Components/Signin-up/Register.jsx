import React ,{useRef} from 'react';
import Header from "../Header";
import Footer from "../footer";
import {Link,useHistory} from "react-router-dom";



export default function Register() {

const history =useHistory();
  const username =useRef();
  const email =useRef();
  const password =useRef();
  const cpassword =useRef();
  const image =useRef();

  const handleClick = async (e) =>{
    e.preventDefault();
    if(cpassword.current.value !== password.current.value){
      cpassword.current.setCustomValidity("Password doesnot match!")
    } else{
      const user ={
        username:username.current.value,
        email:email.current.value,
        password:password.current.value,
        image:image.current.value,
      };
      try{
        console.log(user);
        await fetch("/api/users/register",
    {
method:"POST",
headers:{
  "Content-Type":"application/json"
},
body:JSON.stringify({
  user
})
        }).catch(error => {
          console.log("error")
    
        }).then(response => {
            // this is now called!
        });
        history.push("/login");
      }
      catch(err){
        console.log(err);
      }
    }
  };


    return (
        <div>
        <Header/>

        <section className="text-gray-600 body-font relative mb-10">
  <div className="container px-5 py-15 mt-10 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 overflow-hidden sm:mr-10 rounded
     flex items-end justify-start relative">
    <img className="object-cover object-center " alt="hero" src="https://source.unsplash.com/1000x885/?information"/>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-green-200 flex flex-col md:ml-auto w-full p-10">
    <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src="https://res.cloudinary.com/dhtobgfyw/image/upload/v1625649334/download_brk2p6.png"  
        className="w-10 h-10 text-white p-0.5 bg-green-500 rounded-full" alt="logo"/>
        <span className="ml-3 text-xl">Morntea</span>
      </Link>
    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 mt-4 text-gray-900 text-justify">Register
            </h2>
            <form className="registerForm" id="registerForm" onSubmit={handleClick}>
            <div className="relative mb-4">
        <label htmlFor="username" className="leading-7 text-sm text-gray-600">Username</label>
        <input type="text" required minLength="4" ref={username} id="username" name="username" 
        className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 
        focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors 
        duration-200 ease-in-out" />
      </div>
        
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" required id="email" name="email" ref={email}
        className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 
        focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors 
        duration-200 ease-in-out" />
      </div>

      <div className="relative mb-4">
        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
        <input type="password" required minLength="6" id="password" ref={password} name="password" className="w-full bg-white 
        rounded border border-gray-300 
        focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 
        leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      
      <div className="relative mb-4">
        <label htmlFor="cpassword"  className="leading-7 text-sm text-gray-600">Confirm Password</label>
        <input type="password"  ref={cpassword} required minLength="6" id="cpassword" name="cpassword" className="w-full bg-white 
        rounded border border-gray-300 
        focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 
        leading-8 transition-colors duration-200 ease-in-out" />
      </div>
     
      <div className="relative mb-4">
        <label htmlFor="image" className="leading-7 text-sm text-gray-600">Upload Your Photo</label>
        <input type="file" ref={image}  required  id="image" name="image" accept="image/*" className="w-full bg-white 
        rounded border border-gray-300 
        focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 
        leading-8 transition-colors duration-200 ease-in-out" />
      </div>


     
      <input class="text-white w-full bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 
      rounded text-lg"  name="register" id="register" type="submit" value="Register" />

</form>

      <p className="text-sm text-gray-600 mt-3 text-center">Already have an account?
      <Link to="/login" className="text-sm text-green-600 mt-3 hover:text-gray-600"> Login</Link>
      </p>


    </div>
  </div>
</section>

        <Footer/>
            
        </div>
    )
}
