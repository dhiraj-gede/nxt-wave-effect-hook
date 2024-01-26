import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard({number, title, mode}) {
  return (
    <Card sx={{ minWidth: 170, maxWidth: 230, maxHeight:250, minHeight: 130, m:'6px 3px 6px 3px', backgroundColor: mode==='completed' ? 'lightgreen' : mode === 'active' ? 'aqua' : 'white', border: mode === 'active' ? '2px solid blue' : 'none' }}  >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Topic {number+1}: &nbsp;
          {mode && mode==='completed' ? 'Completed' : mode==='idle' ? '' : 'In Progress'} 
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>  
    </Card>
  );
}