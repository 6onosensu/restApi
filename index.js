const myJson = [{
    Car: [
        {
            Color: "Rose red",
            "Tinted windows": false,
            Wheels: 4,
            "Roof cargo": null,
            Entertainment: {
                Radio: "FM Radio", 
                Media: ["MP3", "MP4", "MKV player"], 
                "Sound system": "haramn/kardon speakers"
            },
            Accessories: [
                "satnav",
                "cruise control",
            ]
        },
        {
            Color: "Navy blue",
            "Tinted windows": true,
            Wheels: 4,
            "Roof cargo": Thule,
            Entertainment: {
                Radio: "FM Radio", 
                Media: "Apple CarPlay, Android Auto", 
                "Sound system": "Bowers & Wilkins Premium Sound speakers"
            },
            Accessories: [
                "self drive system",
                "luggage cover",
            ]
        },
    ,
]
}
];

document.getElementById("app").innerHTML = `
<div id="json">
<h1>Car 1 properties</h1>
<p>Color: ${myJson[0].Car[0].Color}</p>
<p>Tinted windows: ${myJson[0].Car[0]["Tinted windows"]}</p>
<p>Wheels: ${myJson[0].Car[0].Wheels}</p>
<p>Roof cargo: ${myJson[0].Car[0]["Roof cargo"]}</p>
<p>Entertainment: 
    <ul>
        <li>${myJson[0].Car[0].Entertainment.Radio}</li>
        <li>${myJson[0].Car[0].Entertainment.Media}</li>
        <li>${myJson[0].Car[0].Entertainment["Sound system"]}</li>
    </ul>
</p>
<p>Accessories: ${myJson[0].Car[0].Accessories}</p>
</div>
`;
/*
const myJson = [
  {
    Car: [
      {
        Color: "Rose red",
        "Tinted windows": false,
        Wheels: 4,
        "Roof cargo": null,
        Entertainment: {
          Radio: "FM Radio",
          Media: "MP3, MP4, MKV player",
          "Sound system": "haramn/kardon speakers",
        },
        Accessories: ["satnav", " cruise control"],
      },
      {
        Color: "Navy blue",
        "Tinted windows": true,
        Wheels: 4,
        "Roof cargo": "Thule",
        Entertainment: {
          Radio: "FM Radio",
          Media: "Apple CarPlay, Android Auto",
          "Sound system": "Bowers & Wilkins Premium Sound speakers",
        },
        Accessories: ["self drive system", " luggage cover"],
      },
      ,
    ],
  },
];

for (let i in myJson) {
  const carArray = myJson[i].Car;
  for (let j in carArray) {
    const car = carArray[j];
    document.getElementById("app").innerHTML = `
        <div id="json">
            <h1>Car ${car} properties</h1>
            <p>Color: ${car.Color}</p>
            <p>Tinted windows: ${car["Tinted windows"]}</p>
            <p>Wheels: ${car.Wheels}</p>
            <p>Roof cargo: ${car["Roof cargo"]}</p>
            <p>Entertainment: 
                <ul>
                    <li>${car.Entertainment.Radio}</li>
                    <li>${car.Entertainment.Media}</li>
                    <li>${car.Entertainment["Sound system"]}</li>
                </ul>
            </p>
            <p>Accessories: ${car.Accessories}</p>
        </div>`;
  }
}

document.getElementById("app").innerHTML = `
<div id="json">
<h1>Car 1 properties</h1>
<p>Color: ${myJson[0].Car[0].Color}</p>
<p>Tinted windows: ${myJson[0].Car[0]["Tinted windows"]}</p>
<p>Wheels: ${myJson[0].Car[0].Wheels}</p>
<p>Roof cargo: ${myJson[0].Car[0]["Roof cargo"]}</p>
<p>Entertainment: 
    <ul>
        <li>${myJson[0].Car[0].Entertainment.Radio}</li>
        <li>${myJson[0].Car[0].Entertainment.Media}</li>
        <li>${myJson[0].Car[0].Entertainment["Sound system"]}</li>
    </ul>
</p>
<p>Accessories: ${myJson[0].Car[0].Accessories}</p>

<h1>Car 2 properties</h1>
<p>Color: ${myJson[0].Car[1].Color}</p>
<p>Tinted windows: ${myJson[0].Car[1]["Tinted windows"]}</p>
<p>Wheels: ${myJson[0].Car[1].Wheels}</p>
<p>Roof cargo: ${myJson[0].Car[1]["Roof cargo"]}</p>
<p>Entertainment: 
    <ul>
        <li>${myJson[0].Car[1].Entertainment.Radio}</li>
        <li>${myJson[0].Car[1].Entertainment.Media}</li>
        <li>${myJson[0].Car[1].Entertainment["Sound system"]}</li>
    </ul>
</p>
<p>Accessories: ${myJson[0].Car[1].Accessories}</p>
</div>`;

*/ 