import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Checkbox, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import './todo.css'
import { connect } from 'react-redux';
import { fetchData } from '../action';



const Todo = ({data,loading,error,fetchData}) => {

    const [rows,setRows]=useState([])
    //Connecting external API
        useEffect(()=>{
          fetchData()
        },[])


          // Handle checking/unchecking of the task
  const handleToggle = (id) => {
    setRows(prevRows => 
      prevRows.map(row => 
        row.id === id ? { ...row, completed: !row.completed } : row
      )
    );
  };


  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="employee table">
      <TableHead >
        <TableRow >
          <TableCell align="center" style={{ fontWeight: 'bold' }}>USER ID</TableCell>
          <TableCell align="center" style={{ fontWeight: 'bold' }}>ID</TableCell>
          <TableCell align="center" style={{ fontWeight: 'bold' }}>TITLE</TableCell>
          <TableCell align="center" style={{ fontWeight: 'bold' }}>COMPLETED</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((row) => (
          <TableRow key={row.userId} className="tableRow">
            <TableCell align="center">{row.userId}</TableCell>
            <TableCell align="center">{row.id}</TableCell>
            <TableCell align="center">{row.title}</TableCell>
            <TableCell align="center">                
                <Checkbox
                  checked={row.completed}
                  onChange={() => handleToggle(row.id)}
                  color="primary"
                />
                </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

const mapState=(state)=>({
  data:state.data,
  loading:state.loading,
  error:state.error
})

export default connect (mapState,{fetchData}) (Todo)