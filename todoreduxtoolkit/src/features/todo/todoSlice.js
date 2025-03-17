import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{
        id:1,
        text:'Buy groceries',    
    }]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({
                id:nanoid(),
                text:action.payload
            })
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter(todo=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            const {id,text}=action.payload
            state.todos=state.todos.map(todo=>todo.id===id? {...todo,text}:todo)
        }
    }
})

export const {addTodo,deleteTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer;