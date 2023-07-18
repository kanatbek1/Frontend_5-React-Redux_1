import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ContactsPage() {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.contactTitle);
  const [input, setInput] = useState("hello world");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    dispatch({
      type: "WITH_PARAMS",
      payload: input,
    });
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleSubmit}>change title with params</button>
      <h1>--------------</h1>
      <input value={input} onChange={handleChange} />
      <button onClick={handleSubmit}>add</button>
    </div>
  );
}

export default ContactsPage;



