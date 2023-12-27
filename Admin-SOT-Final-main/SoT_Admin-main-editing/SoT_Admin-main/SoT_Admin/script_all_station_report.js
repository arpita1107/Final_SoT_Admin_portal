(() => {
  const tableBody = document.querySelector("#table-body");
  const data = [
    { trainId: 101, station: "Shibuya", earnings: 20000, passengers: 200 },
    { trainId: 102, station: "Shinjuku", earnings: 10000, passengers: 100 },
    { trainId: 103, station: "Roppongi", earnings: 15000, passengers: 150 },
    { trainId: 104, station: "Tokyo", earnings: 17000, passengers: 170 },
    { trainId: 105, station: "Akhiabara", earnings: 16000, passengers: 160 },
    {
      trainId: 106,
      station: "Aao Mono Yokochu",
      earnings: 20000,
      passengers: 200,
    },
    { trainId: 107, station: "Nishi Kasai", earnings: 13500, passengers: 135 },
    { trainId: 108, station: "Kojimacho", earnings: 11100, passengers: 111 },
    { trainId: 109, station: "Kawasaki", earnings: 4200, passengers: 140 },
    { trainId: 110, station: "Yokohama", earnings: 6670, passengers: 75 },
  ];

  data.forEach((train) => {
    const tableRow = document.createElement("tr");

    // Train ID
    const trainId = document.createElement("td");
    trainId.classList.add("border", "border-2", "p-3");
    trainId.innerText = train.trainId;
    tableRow.appendChild(trainId);

    // Station
    const station = document.createElement("td");
    station.classList.add("border", "border-2", "p-3");
    station.innerText = train.station;
    tableRow.appendChild(station);

    // Earnings
    const earnings = document.createElement("td");
    earnings.classList.add("border", "border-2", "p-3");
    earnings.innerText = train.earnings;
    tableRow.appendChild(earnings);

    // Passengers
    const passengers = document.createElement("td");
    passengers.classList.add("border", "border-2", "p-3");
    passengers.innerText = train.passengers;
    tableRow.appendChild(passengers);

    tableBody.appendChild(tableRow);
  });
})();
