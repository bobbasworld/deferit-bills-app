import { render, screen, fireEvent } from '@testing-library/react';
import { format as formatDate, parseISO } from 'date-fns';
import { STATUS } from '../../utils/constants';

import BillCard from './BillCard';

beforeEach(() => {
  const billCardProps = {
    thumbnail: 'https://gccontent.blob.core.windows.net/gccontent/blogs/legacy/c1/2015/09/bill.png',
    title: 'Test Title',
    amount: 3,
    date: formatDate(parseISO(new Date().toISOString()), 'PP'),
    status: STATUS.PAID,
  };

  render(
    <BillCard
      thumbnail={billCardProps.thumbnail}
      title={billCardProps.title}
      amount={billCardProps.amount}
      date={billCardProps.date}
      status={billCardProps.status}
    />,
  );
});

describe('BillCard Component', () => {
  it('correctly shows a thumbnail image', () => {
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });

  it('correctly shows a title', () => {
    const title = screen.getByText(/test title/i);
    expect(title).toBeInTheDocument();
  });

  it('correctly shows an amount', () => {
    const amount = screen.getByText('$ 3.00');
    expect(amount).toBeInTheDocument();
  });

  it('correctly shows a date', () => {
    const date = screen.getByText('Oct 6, 2021');
    expect(date).toBeInTheDocument();
  });

  it('correctly shows a date', () => {
    const date = screen.getByText('Oct 6, 2021');
    expect(date).toBeInTheDocument();
  });

  it('correctly shows a status', () => {
    const status = screen.getByText('paid');
    expect(status).toBeInTheDocument();
  });

  it('correctly expands thumbnail modal when clicked', () => {
    const img = screen.getByRole('img');
    fireEvent.click(img);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(1);
    expect(images[0]).toHaveClass('BillModalImage');
  });
});
