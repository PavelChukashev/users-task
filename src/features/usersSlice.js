import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        const authToken = sessionStorage.getItem('Token')
            return await fetch(
                'http://emphasoft-test-assignment.herokuapp.com/api/v1/users/',
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Token ${authToken}`
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