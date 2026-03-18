import { useCallback } from 'react';

const useWhatsAppPayment = () => {
  const makePayment = useCallback(({ amount, donorName, donorMobile, donorAddress, serviceName }) => {
    const foundationNumber = "+8801841006642";

    const message = 
      `*-- ALOR DISHA DONATION RECEIPT --*%0A%0A` +
      `*FUND TYPE:* ${serviceName.toUpperCase()}%0A` +
      `*DONOR:* ${donorName}%0A` +
      `*MOBILE:* ${donorMobile}%0A` +
      `*ADDRESS:* ${donorAddress || 'Not provided'}%0A%0A` +
      `*AMOUNT:* ৳${amount}%0A%0A` +
      `----------------------------%0A` +
      `Assalamu Alaikum, please send me the bKash personal number to complete this payment.`;

    window.open(`https://wa.me/${foundationNumber}?text=${message}`, '_blank');
  }, []);

  return { makePayment };
};

export default useWhatsAppPayment;