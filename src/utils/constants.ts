interface StatusInterface {
  PROCESSING: string;
  SCHEDULED: string;
  UNABLE_TO_PAY: string;
  PAID: string;
}

export const STATUS: StatusInterface = {
  PROCESSING: 'processing',
  SCHEDULED: 'scheduled',
  UNABLE_TO_PAY: 'unable to pay',
  PAID: 'paid',
};
