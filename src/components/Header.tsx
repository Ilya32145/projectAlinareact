import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <nav style={{ display: 'flex', gap: '10px', padding: '10px' }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}
