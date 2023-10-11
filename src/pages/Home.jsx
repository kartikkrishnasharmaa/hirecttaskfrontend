import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';

const Home = () => {

  const authState = useSelector(state => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : "Task Manager";
  }, [authState]);



  return (
    <>
      <MainLayout>
        {!isLoggedIn ? (
          <div className='bg-blue-600 text-white py-8 text-center'>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
    <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
      <h2 class="text-xl text-white tracking-widest font-medium title-font mb-1">HIRECT TASK</h2>
      <h1 class="md:text-3xl text-2xl font-medium title-font text-white">MERN Stack Task Project</h1>
    </div>
    <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
      <Link to="/login" class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="title-font font-medium">LOGIN</span>
        </span>
      </Link>
      <Link to="/signup" class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="title-font font-medium">REGISTER</span>
        </span>
      </Link>
    </div>
  </div>
</section>
          </div>
        ) : (
          <>
              <h1 className='text-lg mt-8 mx-8 border-b border-b-gray-300'>Welcome , <b>{ authState.user.name }</b> </h1>
              
              <h1 className='text-lg mt-8 mx-8 border-b border-b-gray-300'>Email : { authState.user.email }</h1>
              
             
            <Tasks />
          </>
        )}
      </MainLayout>
    </>
  )
}

export default Home