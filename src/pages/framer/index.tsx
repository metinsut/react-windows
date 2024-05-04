import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '../../core/routes/router';
import { FramerDrag } from './framer-drag';

export const framerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/framer',
  component: FramerDrag,
});
