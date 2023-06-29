import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import moment from 'moment/moment';
import { deleteExpense } from '../ExpenseReducer';

function ExpenseList() {
    const expense = useSelector((state) => state.expense) 
    const dispatch = useDispatch()

    const handleDelete = (item) => {
      if(window.confirm("Are you sure you want to delete this Expense?")){
        dispatch(deleteExpense(item))
      }
    }
    
  return (
    <>
       <main className='bg-gray-100 mt-10'>
            <div className="px-5 mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {
                        expense.map((item) => (
                            <div key={item.id}>
                                <div className='border rounded-lg p-10 mb-3'>
                                <div className='capitalize text-3xl border-b-4 border-indigo-500'>{item.category}</div>
                                <div className='flex justify-between p-5'>
                                  <div>
                                    <div className='capitalize'>{item.title}</div>
                                    {/* <div>{item.createdAt}</div> */}
                                    <div>{moment(item.createdAt).fromNow()}</div>
                                  </div>
                                  <div>
                                    <div onClick={() => handleDelete(item)}><MdDelete size={30} /></div>
                                    <div>${item.amount}</div>
                                  </div>
                                </div>
                                {/* <button className='bg-lime-400'>Edit Expense</button> */}
                            </div>
                            </div>
                    ))}
                
            </div>
        </main>
    </>
  )
}

export default ExpenseList
