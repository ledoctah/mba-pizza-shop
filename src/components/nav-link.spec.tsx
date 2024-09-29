import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { NavLink } from './nav-link';

describe('Nav Link', () => {
  it('should highlight the nav link when is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          );
        },
      },
    );

    const homeLink = wrapper.getByText('Home');
    const aboutLink = wrapper.getByText('About');

    expect(aboutLink.dataset.current).equals('true');
    expect(homeLink.dataset.current).equals('false');
  });
});
