import React, {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useState,
  } from 'react';
  
  import styles from './styles.module.scss';
  
  export type PaginationProps = {
    perPage: number;
    total: number;
    onChangePage?: (page: number) => void;
  };
  
  export type PaginationHandler = {
    currentPage: number;
  };
  
  const Pagination: React.ForwardRefRenderFunction<
    PaginationHandler,
    PaginationProps
  > = ({ perPage, total, onChangePage }, ref) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
  
    const handleChangePage = useCallback(
      (pageNumber: number) => {
        setCurrentPage(pageNumber);
  
        if (onChangePage) {
          onChangePage(pageNumber);
        }
      },
      [onChangePage],
    );
  
    const goToPage = useCallback(
      (pageNumber: number) => handleChangePage(pageNumber),
      [handleChangePage],
    );
  
    const pages = useMemo(() => {
      return Array.from({ length: totalPages ?? 0 }).map((_, index) => {
        return index + 1;
      });
    }, [totalPages]);
  
    useImperativeHandle(ref, () => ({
      currentPage,
    }));
  
    useEffect(() => {
      setTotalPages(Math.ceil(total / perPage));
    }, [total, perPage]);
  
    return (
      <div className={styles.container} data-testid="pagination">
        {pages.map(page => (
          <button
            className={styles.pageItem}
            // active={currentPage === page}
            key={page}
            onClick={() => goToPage(page)}
          >
            <span>{page}</span>
          </button>
        ))}
      </div>
    );
  };
  
  export default forwardRef(Pagination);