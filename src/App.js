import { useState } from "react";
import FriendsList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";

const friendsData = [
  {
    id: 0,
    name: "Clark",
    imgURL: "https://i.pravatar.cc/300?img=4",
    owe: -7,
  },
  {
    id: 1,
    name: "Sarah",
    imgURL: "https://i.pravatar.cc/301?img=1",
    owe: 20,
  },
  {
    id: 2,
    name: "Anthony",
    imgURL: "https://i.pravatar.cc/302?img=3",
    owe: 0,
  },
];

const App = () => {
  const [friends, setFriends] = useState(friendsData);
  const [selectedFrnd, setSelectedFrnd] = useState(null);
  const [isBillOpen, setIsBillOpen] = useState(false);

  const handleSelectedFriend = (frndId) => {
    if (selectedFrnd === frndId) {
      setSelectedFrnd(null);
      setIsBillOpen(false);
      return;
    }
    setIsBillOpen(true);
    setSelectedFrnd(frndId);
  };

  const handleBillForm = (oweMoney) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFrnd
          ? { ...friend, owe: friend.owe + oweMoney }
          : friend
      )
    );
    setIsBillOpen(false);
  };

  const addFriend = (friend) => {
    setFriends((prevState) => [...prevState, friend]);
  };

  return (
    <div className="app">
      <FriendsList
        friendsData={friends}
        addFriend={addFriend}
        selectedFrnd={selectedFrnd}
        isBillOpen={isBillOpen}
        handleSelectedFriend={handleSelectedFriend}
      />
      {isBillOpen && (
        <SplitBillForm
          key={friends[selectedFrnd].id}
          friend={friends.find((friend) => friend.id === selectedFrnd)}
          handleBillForm={handleBillForm}
        />
      )}
    </div>
  );
};

export default App;
