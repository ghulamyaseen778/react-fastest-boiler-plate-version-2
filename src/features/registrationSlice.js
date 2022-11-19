import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    Loginerror:false,
    statement:[],
    IfModal:false
}

const registrationSlice = createSlice({
    name:'registration',
    initialState,
    reducers:{
        LoginError:(state,action)=>{
           const Error = action.payload;
           state.Loginerror=Error.bool;
           state.statement=Error.statement;
        },
        ModalOpen:(state,action)=>{
            const ModalOpen = action.payload;
            state.IfModal=ModalOpen
        }
    }
})

export const {LoginError,ModalOpen}=registrationSlice.actions;
export default registrationSlice.reducer