import { configureStore } from "@reduxjs/toolkit";
import slice from  '../features/todo/todoSlice'

let store = configureStore(
    {reducer:slice}
)

export default store;