import { http, HttpResponse } from 'msw';

import { UpdateProfileBody } from '../update-profile';

export const updateProfileMock = http.put<never, UpdateProfileBody>(
  '/profile',
  async ({ request }) => {
    const { name } = await request.json();

    if (name === 'Pizza Shop 2.0') {
      return new HttpResponse(null, {
        status: 201,
      });
    }

    return new HttpResponse(null, { status: 400 });
  },
);
