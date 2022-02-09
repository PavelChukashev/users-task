import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        return fetch(
            'http://emphasoft-test-assignment.herokuapp.com/api/v1/users/',
            {
                method: 'GET',
                headers: {
                    Authorization:
                        'Token 781bd9f1de084f4daa7ba2aa8a71a2eab855354e',
                },
            },
        )
        .then ( (res) => res.json() )
    })


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: null
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getUsers.fulfilled]: (state, {payload}) => {
            state.users = payload
            state.status = 'success'
        },
        [getUsers.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
})

export default usersSlice.reducer