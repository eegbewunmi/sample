import React from 'react'
import Sidebar from "../sidebar/Sidebar"
import Content from '../content/Content'
import {Grid} from "@material-ui/core"
import Navbar from '../dashboard/Navbar'

const Dashboard
 = () => {
  return (
    <Grid container>
        <Grid item xs={2} >
            <Sidebar />
        </Grid>
        <Grid item xs={10}>
             <Content />
        </Grid>   
    </Grid>    
  )
}

export default Dashboard
