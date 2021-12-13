import userlist from '../../userlist';
import { ReactComponent as Ok } from '../../assets/svg/ok.svg';
import './UserList.scss';
import { useMemo, useState } from 'react';
import Pagination from '../../Components/Pagination/Pagination';

let PageSize = 5;

const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return userlist.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="list-wrapper">
      <h1 className="title">User List</h1>

      <ul className="list">
        {currentData.map((element) => {
          return (
            <li key={element.id} className="list-item">
              <div className="icon">
                <Ok />
              </div>
              <div className="info">
                <div className="id">{element.id}</div>
                <div className="name">{element.name}</div>
              </div>
              <div className="moreinfo">
                <div className="more">...</div>
                <div className="group">Dafault group</div>
              </div>
            </li>
          );
        })}
      </ul>
      <Pagination
        currentPage={currentPage}
        listLength={userlist.length}
        perPage={PageSize}
        numberOfButtons={Math.round(userlist.length / PageSize)}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  );
};

export default UserList;
