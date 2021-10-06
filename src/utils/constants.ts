interface StatusInterface {
  PROCESSING: string;
  SCHEDULED: string;
  UNABLE_TO_PAY: string;
  PAID: string;
}

// eslint-disable-next-line import/prefer-default-export
export const STATUS: StatusInterface = {
  PROCESSING: 'processing',
  SCHEDULED: 'scheduled',
  UNABLE_TO_PAY: 'unable to pay',
  PAID: 'paid',
};
