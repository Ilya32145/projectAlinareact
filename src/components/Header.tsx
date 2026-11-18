import { NavLink } from 'react-router-dom';
import { Button } from './Button';
import type { User } from './SignUpMenu';

type HeaderProps = {
  user?: User | null;
  setUser?: (user: User | null) => void;
};

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  backgroundColor: isActive ? 'purple' : 'rgb(230, 129, 196)',
  borderRadius: '15px',
  padding: '10px',
  color: 'white',
  textDecoration: 'none',
});

export function Header(props: HeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        padding: '8px 16px',
      }}
    >
      <nav style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>
      </nav>
      <div className="user-info">
        <h4>Вы на аккаунте: {props.user?.username}</h4>
        <Button
          title="Выйти"
          func={() => {
            props.setUser?.(null);
            localStorage.removeItem('user');
          }}
          color="red"
        />
      </div>
    </div>
  );
}
