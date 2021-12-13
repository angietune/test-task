import React from 'react';
import createPagination from '../../helpers/createPagination';
import { Params } from '../../helpers/createPagination';
import './Pagination.scss';

const Pagination = (props: Params) => {
  const { pagination } = createPagination(props);

  const handleClick = (page: number) => props.onPageChange(page);

  return (
    <ul className="page-numbers">
      <li
        className={`page-item-edge ${
          pagination[0] === props.currentPage && 'disabled'
        }`}
        key="100"
        onClick={handleClick.bind(null, props.currentPage - 1)}
      >
        Prev
      </li>
      {pagination.map((page, id) => {
        return (
          <li
            className={`page-item ${props.currentPage === page && 'active'}`}
            key={id}
            onClick={handleClick.bind(null, page)}
          >
            {page}
          </li>
        );
      })}
      <li
        className={`page-item-edge ${
          pagination.reverse()[0] === props.currentPage && 'disabled'
        }`}
        key="200"
        onClick={handleClick.bind(null, props.currentPage + 1)}
      >
        Next
      </li>
    </ul>
  );
};

export default Pagination;
