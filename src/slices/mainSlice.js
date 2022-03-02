import {createSlice} from '@reduxjs/toolkit'


export const mainSlice= createSlice({
  name:"main",
  initialState:{
    page:'story'
  },
  reducers:{
    changePage: (state,action)=>{
      state.page=action.payload
    }
  }

})

export const {changePage} = mainSlice.actions
export default mainSlice.reducer
