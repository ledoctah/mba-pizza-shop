import { api } from '@/lib/axios';

export interface GetOrderDetailsParams {
  orderId: string;
}

export async function cancelOrder({ orderId }: GetOrderDetailsParams) {
  await api.patch(`/orders/${orderId}/cancel`);
}
