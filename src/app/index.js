import {configureStore} from '@reduxjs/toolkit'
import UserRegistration from '../features/registrationSlice'
import UserReducer from '../features/UsersSlice'

export const store = configureStore({
    reducer:{
        Registration:UserRegistration,
        UserInfo:UserReducer
    }
})