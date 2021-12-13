import UserList from '../../Components/UserList/UserList';
import { ReactComponent as Logout } from '../../assets/svg/logout.svg';
import './UserListPage.scss';
import { Link } from 'react-router-dom';

const UserListPage = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  };
  return (
    <div className="users">
      <UserList />
      <Link to="/">
        <div className="logout" onClick={handleLogout}>
          <Logout />
          Log Out
        </div>
      </Link>
    </div>
  );
};

export default UserListPage;
