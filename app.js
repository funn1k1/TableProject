const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
	"nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
	"nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
		"nestedField": { total: 200 }
  },
];

const objOfTheads = {
    "#": "#",
    name: "Name",
    email: "Email",
    balance: "Balance",
};

generateTable();

function generateTable(){
    const container = document.querySelector(".container");
    const table = document.createElement("table");
    table.className = "table";
    const header = generateHeader();
    table.appendChild(header);
    users.forEach((user, index) => {
        const tr = generateContent(user, index);
        table.appendChild(tr);
    });
    const balance = generateBalance();
    table.append(balance);
    container.appendChild(table);
}

function generateContent(user, index){
    const tr = document.createElement("tr");
    const number = document.createElement("td");
    number.textContent = index + 1;
    const name = document.createElement("td");
    name.textContent = user["name"];
    const email = document.createElement("td");
    email.textContent = user["email"];
    const balance = document.createElement("td");
    balance.textContent = user["balance"];
    tr.append(number, name, email, balance);
    return tr;
}


function generateHeader(){
    const tr = document.createElement("tr");
    for (const key in objOfTheads){
        const th = document.createElement("th");
        th.textContent = objOfTheads[key];
        tr.appendChild(th);
    }
    return tr;
}

function generateBalance(){
    const tr = document.createElement("tr");
    let sum =  users.reduce((acc, user) => {
        return acc + user["balance"];
    }, 0);
    const length = Object.keys(objOfTheads).length;
    for (let i = 0; i < length; i++){
        const td = document.createElement("td");
        if (i == length - 1){
            td.textContent = `Total balance: ${sum}`;
            tr.appendChild(td);
            break;
        }
        tr.appendChild(td);
    }
    return tr;
}