import {configureStore} from '@reduxjs/toolkit'
import UserRegistration from '../features/registrationSlice'

export const store = configureStore({
    reducer:{
        Registration:UserRegistration
    }
})