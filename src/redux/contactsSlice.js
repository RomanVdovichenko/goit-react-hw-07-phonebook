import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://649cfa449bac4a8e669d2286.mockapi.io/phonebook/' }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `contacts`,
      providesTags: ['Contact']
    }),
    addContact: builder.mutation({
      query: value => ({
        url: 'contacts',
        method: 'POST',
        body: value
      }),
      invalidatesTags: ['Contact']
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Contact']
    })
  }),
})

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation } = contactsApi