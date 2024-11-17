import { useState } from "react";

const AddButton = () => {
  const [counter, setCounter] = useState(0); // تعريف المتغير counter

  const handleClick = () => {
    setCounter(counter + 1); // زيادة counter عند الضغط على الزر
  };

  return (
    <div>
      <button
        className="border-1 bg-gray-600 w-32 rounded-lg hover:bg-teal-500"
        onClick={handleClick}
      >
        Add
      </button>
      
    </div>
  );
};

export default AddButton;
