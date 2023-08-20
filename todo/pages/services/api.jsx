import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { contact } from '../models/contactModel'


export const contactApi = createApi({
    
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3006/' }),
    endpoints: (builder) => ({
      getAllContacts: builder.query({
        query: () => '/contacts'
      }),
      getSingleContact:builder.query({
        query:(id)=>{`/contacts/${id}`}
      })
    }),
  })

export const {useGetAllContactsQuery,useGetSingleContactQuery} = contactApi