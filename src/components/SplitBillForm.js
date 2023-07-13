import { useState } from "react";
import Button from "./Button";

const SplitBillForm = ({ friend, handleBillForm }) => {
  const [totalBill, setTotalBill] = useState(0);
  const [myBill, setMyBill] = useState(0);
  const [payer, setPayer] = useState("you");
  const friendBill = totalBill - myBill;

  const handleSubmit = (e) => {
    e.preventDefault();

    let oweMoney;
    if (payer === "you") oweMoney = friendBill;
    else oweMoney = myBill * -1;

    handleBillForm(oweMoney);
  };

  return (
    <div className="bill-form-container">
      <h2>Split a bill with {friend.name}</h2>
      <form className="bill-form" onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="bill">💰 Bill Value</label>
          <input
            type="text"
            id="bill"
            value={totalBill}
            onChange={(e) => setTotalBill(+e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="expense1">👨‍💼 Your Expense</label>
          <input
            type="text"
            id="expense1"
            value={myBill}
            onChange={(e) => setMyBill(+e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="expense2">👬 {friend.name}'s Expense</label>
          <input type="text" id="expense2" value={friendBill} disabled />
        </div>
        <div className="form-item">
          <label htmlFor="payer">🤑 Who's paying the bill?</label>
          <select
            id="payer"
            value={payer}
            onChange={(e) => setPayer(e.target.value)}
          >
            <option value="you">You</option>
            <option value={friend.name}>{friend.name}</option>
          </select>
        </div>

        <Button className="split-bill-btn">Split Bill</Button>
      </form>
    </div>
  );
};

export default SplitBillForm;
