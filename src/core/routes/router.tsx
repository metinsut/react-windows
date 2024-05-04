import { Outlet, createRootRoute, createRouter } from '@tanstack/react-router';
import { Header } from '../header';
import { indexRoute } from '../../pages/home';
import { nativeRoute } from '../../pages/native';
import { framerRoute } from '../../pages/framer';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
    </>
  ),
});

const routeTree = rootRoute.addChildren([indexRoute, nativeRoute, framerRoute]);

export const router = createRouter({ routeTree });
