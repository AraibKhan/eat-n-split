import { useState } from "react";
import Button from "./Button";

const AddFriendForm = ({ handleAddFriend, handleCloseForm }) => {
  const [userName, setUserName] = useState("");
  const [imgURL, setImgURL] = useState("https://i.pravatar.cc/150");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFriend = {
      id: Math.round(new Date().getTime() / 1000),
      name: userName,
      imgURL,
      owe: 0,
    };

    //Clear the form.
    setUserName("");
    setImgURL("");

    handleAddFriend(newFriend);
  };

  return (
    <div className="form-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="user-name">👭 Friend Name</label>
          <input
            type="text"
            id="user-name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="user-img">🖼 Image URL</label>
          <input
            type="text"
            id="user-img"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
          />
        </div>
        <Button className="add-btn">Add</Button>
      </form>
      <Button className="close-btn" onClick={handleCloseForm}>
        Close
      </Button>
    </div>
  );
};

export default AddFriendForm;
