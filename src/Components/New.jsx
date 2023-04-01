import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const New = () => {
    var[update,setUpdate]=useState(false)
    var[selected,setstudents]=useState([])
    var[students,setstudents]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/product")
        .then(response=>{
            setstudents(students=response.data)
        console.log(students)})
    .catch(error=>console.log(error))
    },[])
    const deleteVslue=(id)=>{
        console.log(id)
        axios.delete("http://localhost:3005/student/")
    }
  return (
    <div>
    <TableContainer>
        <Table>
        <TableHead>
            <TableRow>
                <TableCell>id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>brand</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>price</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {students.map((value,index)=>{
                return<TableRow>
                     <TableCell>{value.id}</TableCell>
                     <TableCell> {value.name}</TableCell>
                     <TableCell>{value.brand}</TableCell>
                     <TableCell>{value.quantity}</TableCell>
                     <TableCell>{value.ruppes}</TableCell>
                     </TableRow>
            })}
           
        </TableBody>

        </Table>                   
    </TableContainer>
  </div>
  )
}

export default New
