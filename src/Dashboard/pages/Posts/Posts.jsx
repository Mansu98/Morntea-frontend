
import { Link , useHistory} from "react-router-dom";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useDispatch, useSelector } from "react-redux";
import { deletePostAction, listPosts } from "../../../actions/postsActions";
import {useEffect} from "react";
import ErrorMessage from "../../../Components/ErrorMessage";
import Loading from "../../../Components/Loading";

import React from 'react';

function Posts() {
  const history= useHistory();
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);
  const { loading, error, posts } = postList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postDelete = useSelector((state) => state.postDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = postDelete;

  const postCreate = useSelector((state) => state.postCreate);
  const { success: successCreate } = postCreate;

  const postUpdate = useSelector((state) => state.postUpdate);
  const { success: successUpdate } = postUpdate;

  useEffect(() => {
    dispatch(listPosts());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    successUpdate,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deletePostAction(id));
    }
  };

  return (
    <div>

<section class="text-gray-600 body-font overflow-hidden">
<h2 class="text-3xl font-large text-lg text-green-600 title-font mb-3 mt-5 text-center">Your Posts</h2>

  <div class="container px-5 py-10 mx-auto">
 
    <div class="-my-8 divide-y-2 divide-gray-100">
    {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loading && <Loading />}
      {loadingDelete && <Loading />} */}
    {posts?.map((post) => (
    <div class="py-5 flex flex-wrap md:flex-nowrap bg-green-100 mb-7" key={post._id}>
        <div class="md:w-120 md:mb-0 mb-6 m-5 flex flex flex-col">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block "
           src={post.image} />
        </Link>
          
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-700 title-font mb-2">{post.title}</h2>
          <span class="mt-1 text-gray-500 text-sm">{post.createdAt.substring(0, 10)}</span>
          <p class="leading-relaxed">{post.content}</p>
          <div className="md:flex flex-wrap mt-3">
          <Link to ="/dashboard/post" class="text-green-700 ml-3 hover:text-green-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          <div className="md:flex flex-wrap mt-3">  
    <Link to={`/dashboard/editpost/${post._id}`} className="text-white bg-green-500 border-0 ml-3
     py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-md ">Edit Post
      </Link>

      <Link onClick={() => deleteHandler(post._id)} className="text-white bg-red-500 border-0 ml-3
     py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-md"><DeleteForeverIcon />
      </Link>
      </div>
      </div>
        </div>
        </div>
    ))};
     </div>
     </div>

      {/* <div class="py-5 flex flex-wrap md:flex-nowrap bg-green-100 mb-7">
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
          <Link to ="/dashboard/post" class="text-green-700 ml-3 hover:text-green-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          <div className="md:flex flex-wrap mt-3">  
    <Link to="/dashboard/editpost" className="text-white bg-green-500 border-0 ml-3
     py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-md ">Edit Post
      </Link>

      <Link to="#" className="text-white bg-red-500 border-0 ml-3
     py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-md"><DeleteForeverIcon />
      </Link>
      </div>
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
          <Link to ="/dashboard/post" class="text-green-700 ml-3 hover:text-green-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          <div className="md:flex flex-wrap mt-3">  
    <Link to="/dashboard/editpost" className="text-white bg-green-500 border-0 ml-3
     py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-md ">Edit Post
      </Link>

      <Link to="#" className="text-white bg-red-500 border-0 ml-3
     py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-md"><DeleteForeverIcon />
      </Link>
      </div>
      </div>
        </div>
      </div> */}
</section>
   
    </div>
  )
}

export default Posts;