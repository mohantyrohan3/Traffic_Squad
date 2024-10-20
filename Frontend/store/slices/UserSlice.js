import { createSlice } from "@reduxjs/toolkit";
import {IP_ADDRESS} from '@env'

const UserSlice = createSlice({
    name: "user",
    initialState: {
        status: 'Not Authenticated',
        user: null,
        role: null
    },
    reducers: {
        setUser(state, action) {
            state.status = "Authenticated";
            state.user = action.payload.user,
            state.role = action.payload.role
        },
        removeUser(state, action) {
            state.status = "Not Authenticated";
            state.user = null;
            state.role = null;
        }
    }
});

export const { setUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;


export function checkauth() {
    return async function checkAuthThunk(dispatch, getState) {

        try {
            console.log("Checking Auth");
            const response = await fetch(`http://${IP_ADDRESS}:8000/auth/getAuth`, {
                method: 'GET',
                credentials: 'include'
            });
            const data = await response.json();
            
            console.log("Inside Thunk" , data);
            if (data.status === 'Authenticated') {
                dispatch(setUser({"user":data.user,"role":data.user.usertype}));
            }
            else {
                dispatch(removeUser());
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}