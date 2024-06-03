import  {configureStore} from '@reduxjs/toolkit'
import getUserDetails from '../features/authSlice'

 const store =configureStore({
    reducer:{
        getUserDetails:getUserDetails
    }
})

export default store;