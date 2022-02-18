import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { columns } from "./sampledata";
import "../css/main.css";

const CurrentMonth = () => {
  const minPayout = 0.001;
  let totalAmount = 0;
  let payableAmount = 0;
  const curDate = new Date();
  const datatable = [
    {
      name: "Ramesh",
      amount: "180000",
      date: "2022/02/25",
    },
    {
      name: "Allamprabhu",
      amount: "550000",
      date: "2022/02/25",
    },
  ];

  const currentMonthData = datatable
    .filter(
      (item) =>
        new Date(item.date).getMonth() === curDate.getMonth() &&
        new Date(item.date).getFullYear() === curDate.getFullYear()
    )
    .map((item) => {
      totalAmount += parseFloat(item.amount);
      return item;
    });
  const data = {
    columns: columns,
    rows: currentMonthData,
  };
  if (totalAmount >= 100000 && totalAmount <= 500000) {
    payableAmount = totalAmount * minPayout;
  } else if (totalAmount > 500000 && totalAmount <= 2000000) {
    payableAmount = totalAmount * (minPayout * 2);
  } else if (totalAmount > 2000000 && totalAmount >= 5000000) {
    payableAmount = totalAmount * (minPayout * 3);
  } else if (totalAmount > 5000000 && totalAmount >= 10000000) {
    payableAmount = totalAmount * (minPayout * 4);
  } else if (totalAmount > 10000000) {
    payableAmount = totalAmount * (minPayout * 5);
  }

  return (
    <div>
      <div className="form-outline">
        <label className="form-control-lg">
          Current Month's sponsored amount is : {totalAmount}
        </label>
      </div>
      <div className="form-outline">
        <label className="form-control-lg">
          Current Month's payable amount is : {payableAmount}
        </label>
      </div>
      <div>
        <MDBDataTableV5
          hover
          className="sponsorTable"
          entriesOptions={[5, 20, 25]}
          entries={5}
          pagesAmount={4}
          data={data}
          searchTop
          searchBottom={false}
        />
      </div>
    </div>
  );
};
export default CurrentMonth;
