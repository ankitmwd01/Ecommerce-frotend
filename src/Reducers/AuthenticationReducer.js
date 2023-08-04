import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'js-cookie';

export const UserLogin = createAsyncThunk("UserLogin", async (data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_ENDPOINT}/v1/user/login`, data)
        return response;
    
  } catch (error) {
        console.log(error);
  }
})


export const AuthenticationReducer = createSlice({
    name: "AuthenticationReducer",
    initialState: {
        login: false,
        err: null,
        loading: false,
        UserArr: null,
    },
    reducers: {
        SetLogin(state) {
            state.login = true;
        },
        SetLogout(state) {
            state.login = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(UserLogin.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(UserLogin.fulfilled, (state, action) => {
            state.UserArr = action.payload?.data;
            if (action.payload?.data?.login == "login") {
                state.login = true;
                Cookies.set("login", String(action.payload.data.id), {
                    expires: 7
                });
            }
            state.loading = false;
        });
        builder.addCase(UserLogin.rejected, (state, action) => {
            state.err = action.payload;
            state.loading = false;
        });
    }
}
);
export const { SetLogin, SetLogout } =AuthenticationReducer.actions;
export default AuthenticationReducer.reducer;