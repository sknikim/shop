import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'



let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 1, name : 'Grey Yordan', count : 1},
    {id : 2, name : 'yoke', count : 1}
  ], 
reducers : {
  addCount(state, action){
    state[action.payload].count++
  },
  addItem(state, action){
    state.push(action.payload)
  }
}
})

export let { addCount, addItem } = cart.actions


export default configureStore({
  reducer: { 
   user : user.reducer,
   cart : cart.reducer

    
  }
}) 