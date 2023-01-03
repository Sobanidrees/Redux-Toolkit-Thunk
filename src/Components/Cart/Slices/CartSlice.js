import { createSlice } from "@reduxjs/toolkit";


const CartSlice=createSlice({
    name:'cart',
    initialState:{
        data:[],
        price:0,
    },
    reducers:{
        add(state,action)
        {
            const result=state.data.find((data)=>
            {
                if(data.id===action.payload.id)
                {
                    return data;
                }            
            });

            if(result===undefined)
            {
                state.data.push(action.payload); 
                state.price+=action.payload.price
               
            }
           
           
        },
        remove(state,action){  
            
        state.data=state.data.filter((item)=>item.id!==action.payload.id);
        state.price-=action.payload.price;
        },
    },
})
export default CartSlice.reducer;
export const {add, remove}=CartSlice.actions;