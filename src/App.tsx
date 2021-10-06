import axios from 'axios';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { format as formatDate, parseISO } from 'date-fns';
import { STATUS } from './utils/constants';

import styles from './App.module.scss';
import BillCard, { BillCardInterface } from './components/BillCard/BillCard';

export interface BillsDataInterface {
  body: string;
  id: number;
  title: string;
  userId: number;
}

function App() {
  const [billsData, setBillsData] = useState<BillsDataInterface[]>([]);
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

  const fetchBillsData = (pageNum: number, cancelSource: any): void => {
    setLoading(true);
    axios({
      method: 'GET',
      url: `http://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=10`,
      cancelToken: cancelSource.token,
    })
      .then((response) => {
        setBillsData((prevData) => [...prevData, ...response.data]);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        // eslint-disable-next-line no-console
        console.log(e);
        setError(true);
      });
  };

  useEffect(() => {
    if (billsData.length === 110) return;
    const source = axios.CancelToken.source();
    fetchBillsData(page, source);
    // eslint-disable-next-line consistent-return
    return () => source.cancel();
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
