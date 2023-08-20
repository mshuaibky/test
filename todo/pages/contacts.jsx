import React from 'react'
import { useGetAllContactsQuery } from './services/api';
function Contacts() {
   const {
    data:value,
    error,
    isLoading,
    isError
   }=useGetAllContactsQuery()
   console.log(value,'value');
  return (
    <div>Contacts</div>
  )
}

export default Contacts