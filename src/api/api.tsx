import axiosInstance from './axios';

import type { EmailType } from '../type/type';

export const Email = {
  sendEmail: (data: EmailType) => axiosInstance.post('/api', data),
};
