import { Link } from '@tanstack/react-router';

export function Header() {
  return (
    <header className="p-2 flex gap-2 bg-lime-700 text-white">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>
      <Link to="/native" className="[&.active]:font-bold">
        Native
      </Link>
      <Link to="/framer" className="[&.active]:font-bold">
        Framer
      </Link>
    </header>
  );
}
