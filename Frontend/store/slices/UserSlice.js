import { createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';

const UserSlice = createSlice({
    name: "user",
    initialState: {
        status: 'Not Authenticated',
        user: null,
    },
    reducers: {
        setUser(state, action) {
            state.status = "Authenticated";
            state.user = action.payload;
        },
        removeUser(state, action) {
            state.status = "Not Authenticated";
            state.user = null;
        }
    }
});

export const { setUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;


export function checkauth() {
    return async function checkAuthThunk(dispatch, getState) {

        try {
            console.log("Checking Auth");
            const response = await fetch('http://192.168.137.1:8000/auth/getAuth', {
                method: 'GET',
                credentials: 'include'
            });
            const data = await response.json();
            
            console.log("Data")
            console.log(data);
            if (data.status === 'Authenticated') {
                dispatch(addStatus(data.user));
            }
            else {
                dispatch(removeStatus());
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}