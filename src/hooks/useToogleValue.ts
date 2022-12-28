const { useState } = require("react");

const useToogleValue = (inittialValue = false) => {
  const [value, setValue] = useState(inittialValue);
  const handleToogleValue = () => {
    setValue(!value);
  };
  return { value, handleToogleValue };
};
export default useToogleValue;
