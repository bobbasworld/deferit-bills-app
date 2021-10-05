import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { format as formatDate, parseISO } from 'date-fns';

import styles from './BillCard.module.scss';

export interface BillCardInterface {
  thumbnail: string;
  title: string;
  amount: number;
  date: string;
  status: string;
}

const BillCard: React.FC<BillCardInterface> = ({ thumbnail, amount, date, status, title }) => {
  return (
    <div className={styles.BillCardContainer}>
      <Card className={styles.BillCard}>
        <CardContent className={styles.BillCardContent}>
          <div>
            <img className={styles.BillThumbnail} src={thumbnail} alt="bill" />
            <Typography sx={{ fontSize: 14 }} color="text.secondary" className={styles.BillDate}>
              {date}
            </Typography>
            <Typography sx={{ mb: 1.5 }} className={styles.BillTitle}>
              {title.length > 15 ? title.slice(0, 15) + '...' : title}
            </Typography>
          </div>
          <div>
            <Typography className={styles.BillAmount}>$&nbsp;{amount.toFixed(2)}</Typography>
            <Typography className={styles.BillDescription}>This bill is for last month&apos;s internet.</Typography>
            <Typography className={styles.BillStatus}>{status}</Typography>
          </div>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </div>
  );
};

export default BillCard;
