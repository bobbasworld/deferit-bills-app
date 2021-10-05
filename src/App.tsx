import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { format as formatDate, parseISO } from 'date-fns';
import { STATUS } from './utils/constants';

import './App.css';
import BillCard, { BillCardInterface } from './components/BillCard/BillCard';

interface BillsData {
  body: string;
  id: number;
  title: string;
  userId: number;
}

function App() {
  const [billsData, setBillsData] = useState<BillsData[]>([]);

  const fetchBillsData = async (): Promise<void> => {
    // placeholder image url:  https://via.placeholder.com/150/92c952
    const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
    const data = await response.data;
    setBillsData(data);
  };

  useEffect(() => {
    console.log('inside useEffect');
    fetchBillsData();
  }, []);

  console.log('billsData: ', billsData);
  // @ts-ignore
  const viewableBillsData = billsData
    ?.map((bill) => ({
      thumbnail: 'https://via.placeholder.com/150/92c952',
      amount: bill.userId,
      date: new Date(),
      status: STATUS.PAID,
    }))
    .slice(0, 10);

  console.log('viewableBillData: ', viewableBillsData);

  return (
    <div className="App">
      {viewableBillsData?.map((bill: BillCardInterface, index: any) => (
        <BillCard key={index} thumbnail={bill.thumbnail} amount={bill.amount} date={bill.date} status={bill.status} />
      ))}
    </div>
  );
}

export default App;
