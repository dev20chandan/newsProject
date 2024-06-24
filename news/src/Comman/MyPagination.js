import React, { useState } from 'react';

function Pagination({ totalItems, itemsPerPage, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    onPageChange(newPage); // Call the parent component's onPageChange function
  };

  return (
    <div className="col-md-6">
      <nav aria-label="Page navigation example">
        <ul className="pagination ms-auto me-md-0 me-auto">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a
              className="page-link"
              href="javascript:void(0)"
              aria-label="Previous"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
            >
              <a
                className={`page-link ${currentPage === index + 1 ? 'active-link' : ''}`}
                href="javascript:void(0)"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <a
              className="page-link"
              href="javascript:void(0)"
              aria-label="Next"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
