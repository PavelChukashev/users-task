import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getToken = createAsyncThunk(
    'token/getToken',
    async () => {
        const res = await fetch(
            'http://emphasoft-test-assignment.herokuapp.com/api-token-auth/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: 'test_super',
                    password: 'Nf<U4f<rDbtDxAPn',
                }),
            },
        )
        
        const tokenResult = await res.json()
        sessionStorage.setItem('Token', tokenResult.token)
    }
)


const defaultState = { name: '', password: '', isAuth: false }

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: defaultState },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = defaultState
        }
    },
    extraReducers: {
        [getToken.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getToken.fulfilled]: (state, {payload}) => {
            state.users = payload
            state.status = 'success'
        },
        [getToken.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
})
export const {login, logout} = userSlice.actions

export default userSlice.reducer