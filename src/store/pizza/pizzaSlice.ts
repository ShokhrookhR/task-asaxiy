import { RootState } from './../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
	items:PizzaType[]
}
const initialState:IItems= {
  items:[],
}

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addItem: (state,action: PayloadAction<PizzaType>) => {
      
      state.items.push(action.payload)
    },
    removeItem: (state,action: PayloadAction<PizzaType>) => {
      
      state.items=state.items.filter(item=>item.id!==action.payload.id)
    },
    
  },
})

// Action creators are generated for each case reducer function
export const favouritesSelector=(state:RootState)=>state.favourites.items
export const { addItem,removeItem } = favouritesSlice.actions

export default favouritesSlice.reducer