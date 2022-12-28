/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

export const setIndex = () => {
  const [index, setIndex] = useState(3);
  const handleSetIndex = (lengthData: number) => {
    setIndex((prev) => prev + 2);
    if (lengthData === 20) return;
  };
  return {
    index,
    handleSetIndex,
  };
};
