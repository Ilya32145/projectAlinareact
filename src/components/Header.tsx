import { NavLink } from 'react-router-dom';
import type { User } from './SignUpMenu';
import Input from './Input';
import {
  AppstoreOutlined,
  LogoutOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { SideMenu, type SideMenuItem } from './SideMenu';
import { useState } from 'react';

type HeaderProps = {
  user?: User | null;
  setUser?: (user: User | null) => void;
};

const items: SideMenuItem[] = [
  { key: '1', icon: <PieChartOutlined />, label: 'Option 1' },
  {
    key: 'sub1',
    icon: <MailOutlined />,
    label: 'Navigation One',
    children: [{ key: '5', label: 'Option 5' }],
  },
  {
    key: 'sub2',
    icon: <AppstoreOutlined />,
    label: 'Navigation Two',
    children: [{ key: '9', label: 'Option 9' }],
  },
  { type: 'divider' },
  { key: 'logout', icon: <LogoutOutlined />, label: 'Выйти', danger: true },
];

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  backgroundColor: isActive ? 'purple' : 'rgb(230, 129, 196)',
  borderRadius: '15px',
  padding: '10px',
  color: 'white',
  textDecoration: 'none',
});

export function Header(props: HeaderProps) {
  const [key, setKey] = useState('1');

  const handleSelect = (selected: string) => {
    if (selected === 'logout') {
      props.setUser?.(null);
      localStorage.removeItem('user');
      return;
    }
    setKey(selected);
  };

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
        <Input title="Введите текст" />
      </nav>
      <div className="user-info" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <SideMenu
          theme="light"
          items={items}
          selectedKey={key}
          onSelect={handleSelect}
          defaultOpenKeys={['sub1']}
        />

        <h4>Вы на аккаунте: {props.user?.username}</h4>
      </div>
    </div>
  );
}
