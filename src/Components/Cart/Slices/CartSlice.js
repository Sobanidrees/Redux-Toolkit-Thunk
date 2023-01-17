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
            const Spro=state.data.findIndex((d)=>{
                if(d.id===action.payload.id)
                {
                    return d;
                }
            })
            let cont=state.data[Spro].count;
            state.price-=action.payload.price*cont;
        state.data=state.data.filter((item)=>item.id!==action.payload.id);
       
        },

        addCount(state,action){
            const Spro=state.data.findIndex((d)=>{
                if(d.id===action.payload.id)
                {
                    return d;
                }
            })
         
            state.data[Spro].count+=1;
            state.price+=action.payload.price;
        },
        removeCount(state,action){
            const Spro=state.data.findIndex((d)=>{
                if(d.id===action.payload.id)
                {
                    return d;
                }
            })

           if(state.data[Spro].count===1)
           {
            state.data=state.data.filter((item)=>item.id!==action.payload.id);
            state.price-=action.payload.price;
           }
           else{
            state.data[Spro].count-=1;
            state.price-=action.payload.price;
           }
          
        }
    },
})
export default CartSlice.reducer;
export const {add, remove,addCount,removeCount}=CartSlice.actions;