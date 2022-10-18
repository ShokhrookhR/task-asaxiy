import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPizza } from '../../models/models'
export const pizzaApi = createApi({
	reducerPath:'pizza/api',
	baseQuery:fetchBaseQuery({
		baseUrl:'https://62deabb69c47ff309e797094.mockapi.io/items'
	}),
	refetchOnFocus:true,
	endpoints:build=>({
		getItems:build.query<IPizza[],number>({
			query:(page:number)=>({
				url:'',
				params:{
					page,
					limit:8,
					
					
				}
			}),
			transformResponse:(response:IPizza[])=>response
		}),
		searchItems:build.query<IPizza[],string>({
			query:(search:string)=>({
				url:'',
				params:{
					search
					
					
				}
			}),
			transformResponse:(response:IPizza[])=>response
		}),
		getOneItem:build.query<IPizza,string>({
			query:(id:string)=>({
				url:'',
				params:{
					id,
					
					
				}
			}),
			transformResponse:(response:IPizza)=>response[0]
		}),
	})
})
export const {useGetItemsQuery,useSearchItemsQuery,useGetOneItemQuery}=pizzaApi


