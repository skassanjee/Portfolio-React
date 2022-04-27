import React from 'react'
import { Button, CardContent, CardMedia, Paper, Typography } from '@material-ui/core'
import img from '../../../Assets/images/laptop.jpg'
import  useStyles from './styles'



const Card = ({title, description, gitlink, livelink}) => {

  const classes = useStyles()
  return (
    
    <Paper elevation={8} className={classes.card}>
            <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">
            {title}
          </Typography>
        <Typography className={classes.description}>
          {description}
        </Typography>
<div className={classes.buttons}>
<Button variant='outlined'>Github</Button>
<Button variant='outlined'>View Live</Button>
</div>

        </CardContent>

    </Paper>
  
    
  )
}

export default Card