import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData : null
}

export const userSlice = createSlice({
    name : 'userSlice' ,
    initialState ,
    reducers : {
        updateData : (state,action)=>{
            state.userData = action.payload
        }
    }
})

export const { updateData } = userSlice.actions ;
export default userSlice.reducer ;