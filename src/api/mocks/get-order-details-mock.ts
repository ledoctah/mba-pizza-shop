import { http, HttpResponse } from 'msw';

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details';

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '11111111111',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 6800,
        product: { name: 'Pizza 01' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 7200,
        product: { name: 'Pizza 02' },
        quantity: 2,
      },
    ],
    totalInCents: 21200,
  });
});
