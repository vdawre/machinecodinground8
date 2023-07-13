import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import useNavigate, { useParams } from 'react-router-dom';

const SingleCard = ({props}) => {
  const meetup = useParams();
  const navigate = useNavigate();

  return (
      <Card sx={{ width: 300, }} onClick={(() => navigate(`/${props.title}`))} >
        <CardMedia
          sx={{ height: 140 }}
          image={props.eventThumbnail}
          title="green iguana"
        />
        <CardContent>
          <Typography variant='h6' component='div'>
            {props.title}
          </Typography>
          <Typography>
            {props.eventStartTime}
          </Typography>
          <Typography>
            {props.eventType}
          </Typography>
        </CardContent>
      </Card>
  )
}
export default SingleCard;