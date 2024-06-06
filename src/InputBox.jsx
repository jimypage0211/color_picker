import React from "react";

const InputBox = ({ setinputValue, inputValue }) => {
  const changeHandle = (event) => {
    event.preventDefault();
    setinputValue(event.target.value);
  };

  return (
    <div>
      <form action="">
        <input type="text" value={inputValue} onChange={changeHandle} placeholder="Type color or colorHex"/>
      </form>
    </div>
  );
};

export default InputBox;
