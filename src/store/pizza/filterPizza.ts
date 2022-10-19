import { RootState } from './../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPizza } from '../../models/models';

type PizzaType ={
	id: string;
	imageUrl: string;
	title: string;
	types: number[];
	sizes: number[];
	price: number;
	category: number;
	rating: number;
}
interface IItems{
	items:IPizza[]
}
const initialState:IItems= {
  items:[],
}

export const filterPizza = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setItems: (state,action: PayloadAction<IPizza[]>) => {
      
      state.items = action.payload
    },
    
    
  },
})

// Action creators are generated for each case reducer function
export const filterSelector=(state:RootState)=>state.filter.items
export const { setItems } = filterPizza.actions

export default filterPizza.reducer