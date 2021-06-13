import React, {useState, useEffect} from 'react'
import {DataGrid} from '@material-ui/data-grid'

const columns = [
  {field: 'id', value: 'ID'},
  {field: 'first_name', value: 'First_name', width: 300},
  {field: 'last_name', value: 'Last_name', width: 300},
  {field: 'email', value: 'Email',width:400},
  {field: 'avatar',value: 'Avatar', width: 400},

]

const DataTable = () => {

  const [tableData, setTableData] = useState([])

 useEffect(() => {
   fetch("https://reqres.in/api/users?page=2")
    .then((data) => data.json())
    .then((data) => setTableData(data.data))
 })

  return (
    <div style={{height: 700, width: '100%'}}>
      <DataGrid 
        rows={tableData}
        columns={columns}
        pageSize={3}
      />
    </div>
  )
}

export default DataTable