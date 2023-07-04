import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsDatabaseFillAdd } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { useRef } from 'react';

function Header() {

  return (
    <>
        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Expense Tracker</h1>
            </div>
            <div className='flex justify-around px-4'>
              <div className='relative mt-2 rounded-md shadow-sm'>
                {/* <form>
                  <input 
                    type='text' 
                    placeholder='Search for expenses' 
                    className='block w-full rounded-md border-0 py-3.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' 
                  />
                  <div className='absolute inset-y-0 right-0 flex items-center px-2'>
                    <button>Submit</button>
                  </div>
                </form> */}
                <h1 className='text-3xl font-bolder'>Total Expense:</h1>
              </div>
              <div className="">
                <Link to='/add'><h1 className='pl-5 pt-4 flex justify-end sm:flex sm:text-2xl text-sm font-extrabold invisible sm:visible'>
                  <span className='visible sm:invisible' ><BsDatabaseFillAdd size={40}/></span>Add Expense </h1>
                </Link>
              </div>
            </div>
        </header>
    </>
  )
}

export default Header
        
