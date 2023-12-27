(() => {
  const tableBody = document.querySelector("#table-body");
  const data = [
    {
      passengerID: 1,
      Name: "Emily Johnson",
      Destination: "Shibuya",
      StopNum: 3,
      FareAmt: 300,
      ModeOfPayment: "Cash",
      TransDateTime: "2023-11-09 10:30:00",
    },
    {
      passengerID: 2,
      Name: "Michelle John",
      Destination: "Akhiabara",
      StopNum: 6,
      FareAmt: 400,
      ModeOfPayment: "Credit",
      TransDateTime: "2023-11-20 15:00:00",
    },
    {
      passengerID: 3,
      Name: "Sarah Lee",
      Destination: "Shinjuku",
      StopNum: 8,
      FareAmt: 200,
      ModeOfPayment: "Cash",
      TransDateTime: "2023-10-13 08:00:00",
    },
    {
      passengerID: 4,
      Name: "Ani Saxena",
      Destination: "Aao Mono yokuchu",
      StopNum: 5,
      FareAmt: 300,
      ModeOfPayment: "Credit",
      TransDateTime: "2023-12-05 12:30:00",
    },
    {
      passengerID: 5,
      Name: "Akhilesh Chauhan",
      Destination: "Tokyo",
      StopNum: 7,
      FareAmt: 600,
      ModeOfPayment: "Credit",
      TransDateTime: "2023-12-05 12:30:00",
    },
    {
      passengerID: 6,
      Name: "Arpita Singh",
      Destination: "Tokyo",
      StopNum: 7,
      FareAmt: 600,
      ModeOfPayment: "Cash",
      TransDateTime: "2023-12-05 12:30:00",
    },
    {
      passengerID: 7,
      Name: "Jin Qinx",
      Destination: "Kojimacho",
      StopNum: 3,
      FareAmt: 300,
      ModeOfPayment: "Credit",
      TransDateTime: "2023-12-05 12:30:00",
    },
    {
      passengerID: 8,
      Name: "Saurabh",
      Destination: "Nishi Kasai",
      StopNum: 300,
      FareAmt: 1000,
      ModeOfPayment: "Cash",
      TransDateTime: "2023-12-08 16:00:00",
    },
    {
      passengerID: 9,
      Name: "Rachel Davis",
      Destination: "Setagaya",
      StopNum: 2,
      FareAmt: 200,
      ModeOfPayment: "Cash",
      TransDateTime: "2023-12-25 19:00:00",
    },
    {
      passengerID: 10,
      Name: "Gazal",
      Destination: "Roppongi",
      StopNum: 9,
      FareAmt: 900,
      ModeOfPayment: "Credit",
      TransDateTime: "2023-12-30 22:00:00",
    },
  ];

  data.forEach((train) => {
    const tableRow = document.createElement("tr");

    // Pa ID
    const passengerID = document.createElement("td");
    passengerID.classList.add("border", "border-2", "p-3");
    passengerID.innerText = train.passengerID;
    tableRow.appendChild(passengerID);

    // Name
    const Name = document.createElement("td");
    Name.classList.add("border", "border-2", "p-3");
    Name.innerText = train.Name;
    tableRow.appendChild(Name);

    // Destination
    const Destination = document.createElement("td");
    Destination.classList.add("border", "border-2", "p-3");
    Destination.innerText = train.Destination;
    tableRow.appendChild(Destination);

    // StopNum
    const StopNum = document.createElement("td");
    StopNum.classList.add("border", "border-2", "p-3");
    StopNum.innerText = train.StopNum;
    tableRow.appendChild(StopNum);

    // FareAmt
    const FareAmt = document.createElement("td");
    FareAmt.classList.add("border", "border-2", "p-3");
    FareAmt.innerText = train.FareAmt;
    tableRow.appendChild(FareAmt);

    // ModeOfPayment
    const ModeOfPayment = document.createElement("td");
    ModeOfPayment.classList.add("border", "border-2", "p-3");
    ModeOfPayment.innerText = train.ModeOfPayment;
    tableRow.appendChild(ModeOfPayment);

    // TransDateTime
    const TransDateTime = document.createElement("td");
    TransDateTime.classList.add("border", "border-2", "p-3");
    TransDateTime.innerText = train.TransDateTime;
    tableRow.appendChild(TransDateTime);

    tableBody.appendChild(tableRow);
  });
})();
