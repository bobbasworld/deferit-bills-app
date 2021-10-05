import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import styles from './BillModal.module.scss';

export interface BillModalProps {
  title: string;
  open: boolean;
  onClose: (value: string) => void;
  thumbnail: string;
}

const BillModal: React.FC<BillModalProps> = ({ title, open, onClose, thumbnail }) => {
  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={onClose} open={open} className={styles.BillModalContainer}>
      <DialogTitle className={styles.BillModalTitle}>{title}</DialogTitle>
      <div className={styles.BillImageContainer}>
        <img className={styles.BillModalImage} src={thumbnail} alt="bill" />
      </div>
    </Dialog>
  );
};

export default BillModal;
