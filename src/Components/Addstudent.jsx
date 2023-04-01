import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudent = (props) => {
    var[input,setInput] = useState(props.data)
        console.log(props.data)


    const inputhandler=(e)=>{
        const{name,value}=e.target 
        setInput({...input,[name]:value})
    }

       const readvalues=()=>{
        console.log("clicked")
        if (props.method==="post") {
        axios.post("http://localhost:3005/student",input)
        .then(responce=>{
            console.log("post data"+responce.data)
            alert('SUCCESS')

        })
        .catch((err)=>{
            console.log(err)
        })
       } 

    }

  return (
 <div>

        <br></br>
        <br></br>
        <br></br>

    
<TextField label='Name' name='name' variant='outlined' value={input.name}
onChange={inputhandler}></TextField>
<Typography>{input.name}</Typography><br></br>
<TextField label='brand' name='brand' variant='outlined' value={input.brand}
onChange={inputhandler}></TextField>
<Typography>{input.brand}</Typography>
<br></br>
<TextField label='quantity' name='quantity' variant='outlined' value={input.quantity}
onChange={inputhandler}></TextField>
<Typography>{input.quantity}</Typography><br></br>
<TextField label='ruppes' name='ruppes' variant='outlined' value={input.ruppes}
onChange={inputhandler}></TextField>
<Typography>{input.ruppes}</Typography><br></br>
<Button onClick={readvalues} variant='contained' >add</Button>
</div>   
  )
}
export default Addstudent

