import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialExpense = () => {
    const list = localStorage.getItem("expense-list")
    let expenseList = []
    if(list) {
        expenseList = JSON.parse(list)
    }
    return expenseList
}


const expenseSlice = createSlice({
    name:"expense",
    initialState: initialExpense(),
    reducers: {
        addExpense: (state, action) => {
            const newExpense = {...action.payload, id: uuidv4()}
            state.push(newExpense)
            localStorage.setItem("expense-list", JSON.stringify(state))
        },
        editExpense: (state, action) => {
            // state.map((expense) => expense.id === action.payload.id ? action.payload : expense)
            // localStorage.setItem("expense-list", JSON.stringify(state))
            const { id } = action.payload;
            const index = state.findIndex((expense) => expense.id === id);
            if (index !== -1) {
              state[index] = action.payload;
              localStorage.setItem('expense-list', JSON.stringify(state));
            }
        },
        deleteExpense: (state, action) => {
            const { id } = action.payload
            const updatedExpense = state.filter((item) => item.id !== id)
            localStorage.setItem("expense-list", JSON.stringify(updatedExpense))
            return [...updatedExpense]
        },
        searchExpense: (state, action) => {
            const { query } = action.payload
            const filteredExpense = state.filter((expense) => {
                const title = expense.title.toLowerCase().includes(query.toLowerCase())
                const category = expense.category.toLowerCase().includes(query.toLowerCase())
                return title || category
            })
            return filteredExpense
        }

    }
})

export const { addExpense, editExpense, deleteExpense, searchExpense } = expenseSlice.actions
export default expenseSlice.reducer