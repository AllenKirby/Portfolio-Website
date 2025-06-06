import React from 'react';

import { Success, Error } from '../assets';

type MessageDialogProps = {
  title: string;
  message: string;
  status: 'success' | 'error' | 'warning' | 'info' | '';
};

const MessageDialog: React.FC<MessageDialogProps> = React.memo((props) => {
  const { status, title, message } = props;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[40%] max-w-md flex flex-col items-center gap-4">
        {status === 'success' && <img src={Success} alt="Success" className="w-20 h-20" />}
        {status === 'error' && <img src={Error} alt="Error" className="w-20 h-20" />}
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        <p className="text-center text-gray-600 text-sm">{message}</p>
      </div>
    </div>
  );
});

export default MessageDialog;
