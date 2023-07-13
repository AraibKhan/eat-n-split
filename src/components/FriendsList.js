import Button from "./Button";
import FriendItem from "./FriendItem";
import AddFriendForm from "./AddFriendForm";
import { useState } from "react";

const FriendsList = ({
  friendsData,
  addFriend,
  handleSelectedFriend,
  selectedFrnd,
  isBillOpen,
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddFriend = (friend) => {
    addFriend(friend);
    setIsFormOpen(false);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="list-container">
      <ul className="list">
        {friendsData.map((friend) => (
          <FriendItem
            key={friend.id}
            friend={friend}
            handleSelectedFriend={handleSelectedFriend}
            selectedFrnd={selectedFrnd}
            isBillOpen={isBillOpen}
          />
        ))}
      </ul>
      {!isFormOpen && (
        <Button className="add-friend-btn" onClick={() => setIsFormOpen(true)}>
          Add Friend
        </Button>
      )}

      {isFormOpen && (
        <AddFriendForm
          handleAddFriend={handleAddFriend}
          handleCloseForm={handleCloseForm}
        />
      )}
    </div>
  );
};

export default FriendsList;
