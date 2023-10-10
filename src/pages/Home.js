import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'
import Bgimage from '../images/bgimage.jpg'
import '../style/Home.css'
import { Card, Grid, CardContent, Typography, CardMedia, Button, Autocomplete, TextField, InputLabel, Input, FormControl} from '@mui/material'
import From from './From'
import To from './To'
const Home = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage:`url(${Bgimage})`}}>
          <div className="headerContainer">

          <h1>The Best Flight Deals</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis accusamus ventur aperiam.
          </p>

          <From/>
           <To/>
              {/* <FormControl>
      <InputLabel htmlFor="my-input">Enter something</InputLabel>
      <Input id="my-input" aria-describedby="my-input-placeholder" />
    </FormControl>
   */}


<Grid style={{ marginTop: '50px' }} container spacing={1}>

        <Card style={{ marginLeft: '55px' }} sx={{ maxWidth: 300,height:90 }}>
          <CardMedia
            sx={{ height: 14, width:44, ml: 14}}
            // image={require('../images/identity.png')}
            title="identity.png"
          />
          <CardContent>
            <Typography style={{ fontSize: '24px', color: "#0c2c5f", fontWeight: '700', textAlign: 'center', marginTop: '20px' }} gutterBottom variant="h5" component="div">
            From
            </Typography>
          </CardContent>
        </Card>

        <Card style={{ marginLeft: '10px' }} sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 52, width:38.876, ml: 14}}
            // image={require('../images/lock.png')}
            title="lock.png"
          />
          <CardContent>
            <Typography style={{ fontSize: '24px', color: "#0c2c5f", fontWeight: '700', textAlign: 'center', marginTop: '20px' }} gutterBottom variant="h5" component="div">
            Secure Digital Records
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ marginLeft: '10px' }} sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 52, width:52, ml: 14}}
            // image={require('../images/setting.png')}
            title="setting.png"
          />
          <CardContent>
            <Typography style={{ fontSize: '24px', color: "#0c2c5f", fontWeight: '700', textAlign: 'center', marginTop: '20px' }} gutterBottom variant="h5" component="div">
            Scalable Service Fulfilment
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ marginLeft: '10px' }} sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 52, width:51.966, ml: 14}}
            // image={require('../images/home.png')}
            title="home.png"
          />
          <CardContent>
            <Typography style={{ fontSize: '24px', color: "#0c2c5f", fontWeight: '700', textAlign: 'center', marginTop: '20px' }} gutterBottom variant="h5" component="div">
            Augmented Care with Data Analytics and Artificial Intelligence Information
            </Typography>
          </CardContent>
        </Card>
      </Grid>


         




         

          <Link to='/menu'>
          <Button variant="contained">
            Book Now
          </Button>
          </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home