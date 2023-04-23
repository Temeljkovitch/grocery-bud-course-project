import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!item) {
      toast.error("You must type something!");
      return;
    } else {
      addItem(item);
      setItem(""); // Clearing input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
