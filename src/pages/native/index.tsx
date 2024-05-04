import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '../../core/routes/router';
import { NativeDragWindow } from './native-drag';

export const nativeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/native',
  component: NativeDragWindow,
});
