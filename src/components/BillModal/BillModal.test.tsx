import { render, screen } from '@testing-library/react';

import BillModal from './BillModal';

beforeEach(() => {
  render(
    <BillModal
      title="Test Title"
      open={true}
      onClose={jest.fn}
      thumbnail="https://gccontent.blob.core.windows.net/gccontent/blogs/legacy/c1/2015/09/bill.png"
    />,
  );
});

describe('BillModal Component', () => {
  it('should render modal correctly', () => {
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
  });

  it('should show the title correctly', () => {
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
  });

  it('should show the image correctly', () => {
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
});
