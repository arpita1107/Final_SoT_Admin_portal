(() => {
  const tableBody = document.querySelector("#table-body");
  const data = [
    {
      PassengerID: 1,
      Name: "Emily Johnson",
      TransactionDateTime: "2023-11-09 10:30:00",
    },
    {
      PassengerID: 2,
      Name: "Michelle John",
      TransactionDateTime: "2023-11-20 15:00:00",
    },
    {
      PassengerID: 3,
      Name: "Sarah Lee",
      TransactionDateTime: "2023-10-13 08:00:00",
    },
    {
      PassengerID: 4,
      Name: "Ani Saxena",
      TransactionDateTime: "2023-12-05 12:30:00",
    },
    {
      PassengerID: 5,
      Name: "Akhilesh Chauhan",
      TransactionDateTime: "2023-12-05 12:30:00",
    },
    {
      PassengerID: 6,
      Name: "Arpita Singh",
      TransactionDateTime: "2023-12-05 12:30:00",
    },
    {
      PassengerID: 7,
      Name: "Jin Qinx",
      TransactionDateTime: "2023-12-05 12:30:00",
    },
    {
      PassengerID: 8,
      Name: "Saurabn",
      TransactionDateTime: "2023-12-08 16:00:00",
    },
    {
      PassengerID: 9,
      Name: "Rachel Davis",
      TransactionDateTime: "2023-12-25 19:00:00",
    },
    {
      PassengerID: 10,
      Name: "Gazal",
      TransactionDateTime: "2023-12-30 22:00:00",
    },
  ];

  // date and time format: "YYYY-MM-DD HH:MI:SS"

  data.forEach((train) => {
    const tableRow = document.createElement("tr");

    // passenger ID
    const PassengerID = document.createElement("td");
    PassengerID.classList.add("border", "border-2", "p-3");
    PassengerID.innerText = train.PassengerID;
    tableRow.appendChild(PassengerID);

    // Name
    const Name = document.createElement("td");
    Name.classList.add("border", "border-2", "p-3");
    Name.innerText = train.Name;
    tableRow.appendChild(Name);

    // TransactionDateTime
    const TransactionDateTime = document.createElement("td");
    TransactionDateTime.classList.add("border", "border-2", "p-3");
    TransactionDateTime.innerText = train.TransactionDateTime;
    tableRow.appendChild(TransactionDateTime);

    // Passengers
    // const passengers = document.createElement("td");
    // passengers.classList.add("border", "border-2", "p-3");
    // passengers.innerText = train.passengers;
    // tableRow.appendChild(passengers);

    tableBody.appendChild(tableRow);
  });
})();
