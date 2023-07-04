import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import moment from 'moment/moment';
import { deleteExpense } from '../ExpenseReducer';
import { useState } from 'react';
import Modal from './Modal';
import EditExpense from './EditExpense';

function ExpenseList() {
    const expense = useSelector((state) => state.expense)
    const expenseContainer = useSelector((state) => state.expense.expenseContainer) 
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const [prefill, setPrefill] = useState(null)

    const handleOpen = (item) => {
      setPrefill(item)
      setShowModal(true)
    }

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
                  expenseContainer.map((item) => (
                      <div key={item.id} item={item}>
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
                          <button onClick={() => handleOpen(item) } className='bg-lime-400'>Edit Expense</button>
                      </div>
                      </div>
              ))}
                
            </div>
        </main>
        <Modal openModal={showModal} onClose={() => setShowModal(false)}>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="p-10 border-b border-solid border-slate-200 rounded-t">
                  <EditExpense prefill={prefill} onClose={() => setShowModal(false)} />
                </div>
              </div>
            </div>
          </div>
        </Modal>
    </>
  )
}

export default ExpenseList
