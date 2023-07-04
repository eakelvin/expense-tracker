import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";
import { addExpense } from '../ExpenseReducer';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Components/Modal';
import { FcCheckmark } from "react-icons/fc";
import { MdSchool } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";


function AddExpense() {
  const expense = useSelector((state) => state.expense)
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false)

  const [dataForm, setDataForm] = useState({
    id: uuidv4(),
    title: "",
    amount:"",
    category: ""
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setDataForm(prevState => {
      return {
      ...prevState,
      [name]: value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch((addExpense({...dataForm})))
    setDataForm({
      title: "",
      amount: "",
      category: ""
    })
  }

  return (
    <>
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Expense Tracker</h1>
              {/* <div className='pt-5'>
                <Link to='/'>
                <button className='bg-red-500'>
                  <IoMdArrowBack />Back</button>
                </Link>
              </div> */}
        </div>

        <div className="isolate bg-white px-6 py-24 sm:py-15 lg:px-8">
          <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
            <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Add Expense</h2>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">Title</label>
                <div className="mt-2.5">
                  <input
                    id='title' 
                    type="text" 
                    name="title" 
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                    value={dataForm.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
     
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Amount</label>
                <input
                  id='phone-number' 
                  type="tel" 
                  name="amount" 
                  className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={dataForm.amount}
                  onChange={handleChange}
                />
              </div>
            </div>
           
           <div className='sm:col-span-2 pt-7'>
            {/* <label htmlFor="category" className="block text-sm font-medium text-gray-900 dark:text-white pt-5">Select your Category</label> */}
            <select id='category' 
              name="category"
              value={dataForm.category}
              onChange={handleChange} 
              className=" text-gray-900 text-sm rounded-md border focus:ring-blue-500 focus:border-blue-500 block w-full px-3.5 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">Select Category</option>
              <option value='Education'>Education</option>
              <option value='Healthcare'>Healthcare</option>
              <option value='Shopping'>Shopping</option>
              <option value='Food'>Food</option>
              <option value='Other'>Other</option>
            </select>
            </div>

            <div className="mt-10">
              <button onClick={() => setOpenModal(true)} type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit Expense</button>
            </div>
          </form>
        </div>

        <Modal openModal={openModal} onClose={() => setOpenModal(false)}>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="p-10 border-b border-solid border-slate-200 rounded-t">
            <div className='flex justify-center bg-lime-400 w-16 h-[50px] pt-3 mx-auto rounded-full'>
              <FcCheckmark size={30}/>
            </div>
            <h3 className="text-3xl font-semibold pt-10 pb-10">
                Expense Added Successfully
            </h3>
            <Link to='/'>
              <button onClick={() => setOpenModal(false)} className='bg-indigo-500 text-black'>Go back to the Home Page</button>
            </Link>
        </div>
        </div>
        </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </Modal>

    </>
  )
}

export default AddExpense
