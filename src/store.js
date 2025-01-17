import { configureStore } from "@reduxjs/toolkit";
import {userSlice} from './features/user/userSlice';

export const store = configureStore({
    user: userSlice
})