import { useState } from "react";
export const usePaging = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [pageIndex, setPageIndex] = useState(1);
  const handleNextPage = (totalPage) => {
    if (totalPage > pageIndex) setPageIndex((prev) => prev + 1);
    if (pageIndex === totalPage) return;
  };
  const handlePrevPage = () => {
    if (pageIndex === 1) return;
    setPageIndex((prev) => prev - 1);
  };
  const handleItemPaging = (index) => {
    setPageIndex(index);
  };
  return { pageIndex, handleNextPage, handlePrevPage, handleItemPaging };
};
