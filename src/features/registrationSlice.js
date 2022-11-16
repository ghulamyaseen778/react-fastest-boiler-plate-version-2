import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    Loginerror:false,
    statement:[]
}

const registrationSlice = createSlice({
    name:'registration',
    initialState,
    reducers:{
        LoginError:(state,action)=>{
           const Error = action.payload;
           state.Loginerror=Error.bool;
           state.statement=Error.statement;
        }
    }
})

export const {LoginError}=registrationSlice.actions;
export default registrationSlice.reducer