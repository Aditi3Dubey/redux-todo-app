import { createSlice, nanoid } from "@reduxjs/toolkit"

let initialState ={
    todos:[
        {
            id:1,
            text:'First Todo'
        }
    ]
}

let todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            let obj ={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(obj);
    },

    removeTodo:(state,action)=>{
        state.todos =state.todos.filter(e=>e.id!==action.payload);
    },
    removeAll:(state,action)=>{
        state.todos=[]
    }
},
    })

export default todoSlice.reducer;
export const {addTodo,removeTodo,removeAll} = todoSlice.actions
