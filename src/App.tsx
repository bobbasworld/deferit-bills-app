import axios from 'axios';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { format as formatDate, parseISO } from 'date-fns';
import { STATUS } from './utils/constants';

import styles from './App.module.scss';
import BillCard, { BillCardInterface } from './components/BillCard/BillCard';

interface BillsData {
  body: string;
  id: number;
  title: string;
  userId: number;
}

function App() {
  const [billsData, setBillsData] = useState<BillsData[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastBillElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer?.current?.observe(node);
    },
    [loading],
  );

  const fetchBillsData = (pageNum: number): void => {
    setLoading(true);
    axios
      .get(`http://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=10`)
      .then((response) => {
        // eslint-disable-next-line arrow-body-style
        setBillsData((prevData) => {
          return [...prevData, ...response.data];
        });
        setLoading(false);
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
        setError(true);
      });
  };

  useEffect(() => {
    if (billsData.length === 110) return;
    fetchBillsData(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const viewableBillsData = billsData?.map((bill) => ({
    thumbnail: 'https://gccontent.blob.core.windows.net/gccontent/blogs/legacy/c1/2015/09/bill.png',
    amount: bill.userId,
    date: formatDate(parseISO(new Date().toISOString()), 'PP'),
    status: STATUS.PAID,
    title: bill.title,
  }));

  return (
    <div className="App">
      <h1 className={styles.Title}>Your Bills</h1>
      {viewableBillsData?.map((bill: BillCardInterface, index: any) => {
        if (viewableBillsData.length === index + 1) {
          return (
            <div ref={lastBillElementRef} key={index}>
              <BillCard
                thumbnail={bill.thumbnail}
                title={bill.title}
                amount={bill.amount}
                date={bill.date}
                status={bill.status}
              />
            </div>
          );
        }
        return (
          <BillCard
            key={index}
            thumbnail={bill.thumbnail}
            title={bill.title}
            amount={bill.amount}
            date={bill.date}
            status={bill.status}
          />
        );
      })}
      {loading && <CircularProgress className={styles.CircularProgress} />}
      {error && <div>Error...</div>}
    </div>
  );
}

export default App;
