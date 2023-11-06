import { createSlice } from "@reduxjs/toolkit";


const initialState={
    counter:0
}

export const countSlice = createSlice({

    name:'count',
    initialState,
    reducers:{
        plus:(state)=>{
            state.counter+=1
        },
        minus:(state)=>{
            state.counter-=1
        },
        plusByAmount:(state,action)=>{
            state.counter = state.counter+action.payload
        }
    }

})

export const  {plus,minus,plusByAmount} = countSlice.actions;
export default countSlice.reducer