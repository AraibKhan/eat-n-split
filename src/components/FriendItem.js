import Button from "./Button";

const FriendItem = ({
  friend,
  handleSelectedFriend,
  selectedFrnd,
  isBillOpen,
}) => {
  const onSelectFriend = () => {
    handleSelectedFriend(friend.id);
  };

  let oweMsg;
  if (friend.owe === 0) {
    oweMsg = <span>You and {friend.name} are even.</span>;
  } else {
    oweMsg = (
      <span style={friend.owe > 0 ? { color: "green" } : { color: "red" }}>
        {friend.owe > 0
          ? `${friend.name} owe you ${friend.owe}$`
          : `You owe ${friend.name} ${friend.owe * -1}$`}
      </span>
    );
  }

  return (
    <li className="list-item">
      <img src={friend.imgURL} alt="Friend" />
      <div className="content">
        <p>{friend.name}</p>
        {oweMsg}
      </div>
      <Button onClick={onSelectFriend}>
        {selectedFrnd === friend.id && isBillOpen ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default FriendItem;
