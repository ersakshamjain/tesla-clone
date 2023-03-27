// quick overview for react-redux

import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y"]
}

const carSlice = createSlice({
    name: "Car", 
    initialState, 
    reducers: {}
})
// here we are mapping cars array 
export const selectCars = state => state.car.cars

export default carSlice.reducer