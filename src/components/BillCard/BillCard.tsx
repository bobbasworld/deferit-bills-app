import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styles from './BillCard.module.scss';

export interface BillCardInterface {
  thumbnail: string;
  amount: number;
  date: Date;
  status: string;
}

const BillCard: React.FC<BillCardInterface> = ({ thumbnail, amount, date, status }) => {
  return (
    <div className={styles.BillCardContainer}>
      <Card className={styles.BillCard}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Word of the Day
          </Typography>
          <Typography variant="h5">Blah blah blah</Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default BillCard;
