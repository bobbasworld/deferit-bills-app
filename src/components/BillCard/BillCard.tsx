import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import BillModal from '../BillModal/BillModal';

import styles from './BillCard.module.scss';

export interface BillCardInterface {
  thumbnail: string;
  title: string;
  amount: number;
  date: string;
  status: string;
}

const BillCard: React.FC<BillCardInterface> = ({ thumbnail, amount, date, status, title }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = (): void => setOpen(true);

  const handleClose = (): void => setOpen(false);

  return (
    <div className={styles.BillCardContainer}>
      <Card className={styles.BillCard}>
        <CardContent className={styles.BillCardContent}>
          <div>
            {/* eslint-disable-next-line */}
            <img className={styles.BillThumbnail} src={thumbnail} alt="bill" onClick={handleClickOpen} />
            <Typography sx={{ fontSize: 14 }} color="text.secondary" className={styles.BillDate} data-testid="date">
              {date}
            </Typography>
            <Tooltip title="This the title of the bill." arrow>
              <Typography sx={{ mb: 1.5 }} className={styles.BillTitle}>
                {title.length > 15 ? `${title.slice(0, 15)}...` : title}
              </Typography>
            </Tooltip>
          </div>
          <div>
            <Typography className={styles.BillAmount}>$&nbsp;{amount.toFixed(2)}</Typography>
            <Typography className={styles.BillDescription}>This bill is for last month&apos;s internet.</Typography>
            <Tooltip
              title={
                <div>
                  <p>Statuses can be one of the following:&nbsp;</p>
                  <ul>
                    <li>
                      Processing: This bill is current, it can take approx 1-2 hours depending on the time of day.
                    </li>
                    <li>
                      Scheduled: This bill is scheduled to be paid and will be paid on the due date. You&apos;re in good
                      hands!
                    </li>
                    <li>
                      Unable to Pay: This bill cannot be paid due to some technical issue. Did you check for sufficient
                      funds?
                    </li>
                    <li>Paid: This bill has been paid successfully. That was easy!</li>
                  </ul>
                </div>
              }
              arrow
            >
              <Typography className={styles.BillStatus}>{status}</Typography>
            </Tooltip>
          </div>
        </CardContent>
      </Card>
      {open ? (
        <BillModal
          title={title.length > 15 ? `${title.slice(0, 15)}...` : title}
          open={open}
          onClose={handleClose}
          thumbnail={thumbnail}
        />
      ) : null}
    </div>
  );
};

export default BillCard;
