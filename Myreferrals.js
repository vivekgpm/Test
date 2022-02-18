import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import {columns } from "./sampledata";


export default function Myreferrals() {
  const datatable = [
    {
      name: "Ramesh",
      amount: "10000",
      date: "2020/04/25",
    },
    {
      name: "Allamprabhu",
      amount: "200000",
      date: "2019/04/25",
    },
    {
      name: "Shivkumar Sali",
      amount: "2500000",
      date: "2021/04/25",
    },
    {
      name: "Vivek Nixon",
      amount: "6100000",
      date: "2022/04/25",
    },
  ];

  const data = {
    columns: columns,
    rows: datatable,
  };

  return (
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
  );
}
