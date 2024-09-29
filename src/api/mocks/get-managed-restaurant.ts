import { http, HttpResponse } from 'msw';

import { GetManagedRestaurantResponse } from '../get-managed-restaurant';

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Pizza Shop',
    managerId: 'custom-user-id',
    description: 'Pizza Shop description.',
  });
});
