import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialExpense = () => {
    const list = localStorage.getItem("expense-list")
    // const expenseList = JSON.parse(localStorage.getItem("expense-list")) || []
    let expenseList = []
    if(list) {
        expenseList = JSON.parse(list)
    }
    return expenseList
}


const expenseSlice = createSlice({
    name:"expense",
    initialState: {
        expenseContainer: initialExpense(),
    },
    // initialState: initialExpense,
    reducers: {
        addExpense: (state, action) => {
            const newExpense = {...action.payload}
            state.expenseContainer.push(newExpense)
            localStorage.setItem("expense-list", JSON.stringify(state.expenseContainer))
        },
        editExpense: (state, action) => {
            // state.map((expense) => expense.id === action.payload.id ? action.payload : expense)
            // localStorage.setItem("expense-list", JSON.stringify(state))
            const { id } = action.payload;
            const index = state.expenseContainer.findIndex((expense) => expense.id === id);
            if (index !== -1) {
              state.expenseContainer[index] = action.payload;
              localStorage.setItem('expense-list', JSON.stringify(state.expenseContainer));
            }
        },
        deleteExpense: (state, action) => {
            const { id } = action.payload
            const updatedExpenseContainer = state.expenseContainer.filter((item) => item.id !== id)
            localStorage.setItem("expense-list", JSON.stringify(updatedExpenseContainer))
            return {
                ...state,
                expenseContainer: updatedExpenseContainer
            }
        },
    }
})

export const { addExpense, editExpense, deleteExpense } = expenseSlice.actions
export default expenseSlice.reducer