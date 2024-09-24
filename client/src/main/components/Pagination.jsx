import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getVisiblePages = () => {
    if (window.innerWidth < 640) {
      // Small devices: Show only current page with dropdown
      return [];
    } else if (window.innerWidth < 768) {
      // Small tablets: Show 3 pages around the current one
      if (currentPage <= 2) {
        return [1, 2, 3, '...', totalPages];
      }
      if (currentPage >= totalPages - 1) {
        return [1, '...', totalPages - 2, totalPages - 1, totalPages];
      }
      return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    } else {
      // Medium and larger devices: Show up to 5 pages
      if (currentPage <= 3) {
        return [1, 2, 3, 4, '...', totalPages];
      }
      if (currentPage >= totalPages - 2) {
        return [1, '...', totalPages - 3, totalPages - 2, totalPages];
      }
      return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    }
  };

  const visiblePages = getVisiblePages();

  const handleClick = (page) => {
    if (page !== '...') {
      onPageChange(page);
    }
  };

  const handleDropdownChange = (e) => {
    onPageChange(Number(e.target.value));
  };

  return (
    <div className="flex items-center justify-center space-x-2 my-4">
      <button
        className={`px-3 py-1 rounded ${
          currentPage === 1
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
        disabled={currentPage === 1}
        onClick={() => handleClick(currentPage - 1)}
      >
        Previous
      </button>

      {window.innerWidth < 640 ? (
        <select
          value={currentPage}
          onChange={handleDropdownChange}
          className="px-3 py-1 rounded bg-gray-200 text-gray-800"
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <option key={page} value={page}>
              {page}
            </option>
          ))}
        </select>
      ) : (
        <div className="flex space-x-2">
          {visiblePages.map((page, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded ${
                page === currentPage
                  ? 'bg-blue-600 text-white'
                  : page === '...'
                  ? 'bg-gray-100 text-gray-500 cursor-default'
                  : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'
              }`}
              onClick={() => handleClick(page)}
            >
              {page}
            </button>
          ))}
        </div>
      )}

      <button
        className={`px-3 py-1 rounded ${
          currentPage === totalPages
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
        disabled={currentPage === totalPages}
        onClick={() => handleClick(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
