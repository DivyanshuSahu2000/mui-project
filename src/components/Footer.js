import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
  return (
    <>
<Box sx={{textAlign:'center',color:'white', bgcolor:'black', p:1}}>
  <Box sx={{my:1, "& svg":{
    fontSize:'40px',
    cursor: "pointer",
    m:1
  },
  "& svg:hover":{
    color:"goldenrod",
    transform:"translateX(5px)",
    transition:'all 400ms'
  }
  }}>
    <InstagramIcon/>
    <TwitterIcon/>
    <GitHubIcon/>
    <YouTubeIcon/>
  </Box>
    <Typography variant='h9'  sx={{"@media(max-width:600px)":{
      fontSize:'1rem'
    }}}>
        All Rights Reserved &copy; Divyanshu
    </Typography>
</Box>
    </>
  )
}
export default Footer;