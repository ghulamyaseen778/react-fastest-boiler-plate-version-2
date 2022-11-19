import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../config/firbase'
import { doc, getDoc } from "firebase/firestore"


const STATUSES = {
    IDLE: "idle",
    LOADING: "loading",
    ERROR: "error",
};

export const FetchUser = createAsyncThunk(
    'product/fetch',
    async () => {

        const uid = localStorage.getItem("User-Info")
        const Ref = doc(db, 'Users', `${uid}`)
        const docSnap = await getDoc(Ref);
        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            return { bool:true, data: docSnap.data() }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            return{bool:false,data:''}
        }

    }
)


const UserSlice = createSlice({
    name: "User",
    initialState: {
        data: [],
        bool: false,
        status: STATUSES,
    },
    extraReducers: (builder) => {
        builder.addCase(FetchUser.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        });
        builder.addCase(FetchUser.fulfilled, (state, action) => {
            state.status = STATUSES.IDLE;
            state.data = action.payload.data
            state.bool = action.payload.bool
        });
        builder.addCase(FetchUser, (state, action) => {
            state.status = STATUSES.ERROR;
        });
    }
})


const { reducer } = UserSlice;
export default reducer;