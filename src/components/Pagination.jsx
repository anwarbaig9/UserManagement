const Pagination = ({ itemsPerPage, totalItems, handlePageChange, currentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const showPages = 5;
  const halfPage = Math.floor(showPages / 2);
  let startPage = Math.max(1, currentPage - halfPage);
  let endPage = Math.min(totalPages, currentPage + halfPage);
  if (endPage - startPage + 1 < showPages) {
    if (startPage === 1) {
      endPage = Math.min(totalPages, startPage + showPages - 1);
    } else {
      startPage = Math.max(1, endPage - showPages + 1);
    }
  }
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
    return (
    <nav className="pagination">
      <ul className="pagination-list">
        <li className="pagination-item">
          <a
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage - 1);
            }}
            href="!#"
            className={`pagination-link ${currentPage === 1 ? "disabled" : ""}`}
          >
             Previous
          </a>
        </li>
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`pagination-item ${currentPage === page ? "active" : ""}`}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(page);
              }}
              href="!#"
              className="pagination-link"
            >
              {page}
            </a>
          </li>
        ))}
        <li className="pagination-item">
          <a
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage + 1);
            }}
            href="!#"
            className={`pagination-link ${currentPage === totalPages ? "disabled" : ""}`}
          >
            Next 
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;