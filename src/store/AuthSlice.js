import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    role: ["STUDENT"], 
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
        setRole(state, action) {
            
            state.role = [...state.role, action.payload]
            
            state.isAuthenticated = true;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;