import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


import { fetchCEP } from './searchcepAPI';



const initialState = {
    value: 0,
    status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const getCEP = createAsyncThunk(
    'adress/fetchCEP',
    async (cep) => {
        const response = await fetchCEP(cep);
        return (
            // console.log('async run')
            display(response) 
            // console.log(response)
            // response
            // console.log(state)
        )
    }
)



export const searchcepSlice = createSlice({
    name: 'counter',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {

        selectValue: (state) => {
            console.log(state.value);
        },

        saveStateCEP: (state, action) => {
            
            console.log('save state');
            console.log(action.payload);

            state.value = action.payload
        }

    }

});

export const { selectValue, saveStateCEP } = searchcepSlice.actions;



export default searchcepSlice.reducer;


export let display = (searched) => {

    let inps = document.querySelectorAll('input')

    inps[1].value = searched.cep
    inps[2].value = searched.uf
    inps[3].value = searched.localidade
    inps[4].value = searched.logradouro
}
