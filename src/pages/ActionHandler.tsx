import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import UpdatePassword from './UpdatePassword';
import { verifyPasswordResetCode } from 'firebase/auth';
import { auth } from '@/integrations/firebase/client';

const ActionHandler = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  const actionCode = searchParams.get('oobCode');
  const [isValidCode, setIsValidCode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (mode === 'resetPassword' && actionCode) {
      verifyPasswordResetCode(auth, actionCode)
        .then(() => {
          setIsValidCode(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsValidCode(false);
          setIsLoading(false);
        });
    } else {
        setIsLoading(false);
    }
  }, [mode, actionCode]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  switch (mode) {
    case 'resetPassword':
      return isValidCode ? <UpdatePassword actionCode={actionCode!} /> : <div>Invalid or expired password reset link.</div>;
    // You can add more cases here for 'verifyEmail', etc.
    default:
      return <div>Unsupported action.</div>;
  }
};

export default ActionHandler;
