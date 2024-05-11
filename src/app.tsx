import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes/router';

export function App() {
  return (
    <main className="flex flex-col w-screen h-dvh bg-orange-100 overflow-hidden">
      <RouterProvider router={router} />
    </main>
  );
}
