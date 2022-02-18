const columns = [
  {
    label: "Name",
    field: "name",

    attributes: {
      "aria-controls": "DataTable",
      "aria-label": "Name",
    },
  },

  {
    label: "Amount",
    field: "amount",
  },

  {
    label: "Sponsered date",
    field: "date",
    sort: "disabled",
  },
];

const currentMonthColumns = [
  {
    label: "Name",
    field: "name",

    attributes: {
      "aria-controls": "DataTable",
      "aria-label": "Name",
    },
  },

  {
    label: "Amount",
    field: "amount",
  },

  {
    label: "Sponsered date",
    field: "date",
    sort: "disabled",
  },
  {
    label: " Payout ",
    field: "payoutpercentage",
    sort: "disabled",
  },
];

export { columns, currentMonthColumns };
