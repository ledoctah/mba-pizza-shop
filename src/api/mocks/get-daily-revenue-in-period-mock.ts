import { http, HttpResponse } from 'msw';

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period';

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/06/2024', receipt: 187400 },
    { date: '02/06/2024', receipt: 148400 },
    { date: '03/06/2024', receipt: 127600 },
    { date: '04/06/2024', receipt: 167600 },
    { date: '05/06/2024', receipt: 118200 },
    { date: '06/06/2024', receipt: 128900 },
    { date: '07/06/2024', receipt: 138700 },
  ]);
});
