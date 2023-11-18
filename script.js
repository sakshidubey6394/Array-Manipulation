const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].profession.toLowerCase() === "developer") {
      console.log(`${data[i].name} is a developer.`);
    }
  }
}

// 2. Add Data
function addData() {
  const name = prompt("Enter name:");
  const age = prompt("Enter age:");
  const profession = prompt("Enter profession:");

  // Create a new data object
  const newData = {
    name: name,
    age: parseInt(age),
    profession: profession.toLowerCase(),
  };
  data.push(newData);

  console.log("New data added successfully:");
  console.log(newData);
}

// 3. Remove Admins
function removeAdmin() {
  let filterdData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].profession.toLowerCase() === "developer") {
      filterdData[i] = data[i];
    }
  }
  console.log(filterdData);
}

// 4. Concatenate Array
function concatenateArray() {
  const data1 = [
    { name: "Subhradeep", age: 29, profession: "developer" },
    { name: "Debasish", age: 49, profession: "tester" },
  ];
  const concatenateddata = data.concat(data1);
  console.log(concatenateddata);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / data.length;

  console.log("Average Age:", averageAge);
}

// 6. Age Check
function checkAgeAbove25() {
  let c = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].age > 25) {
      c++;
    }
  }

  if (c > 0) {
    console.log("There is at least one person above the age of 25.");
  } else {
    console.log("There is no person above the age of 25.");
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  const uniqueProfessionsSet = new Set();

  data.forEach((person) => {
    uniqueProfessionsSet.add(person.profession.toLowerCase());
  });

  const uniqueProfessionsArray = [...uniqueProfessionsSet];

  console.log("Unique Professions:");
  console.log(uniqueProfessionsArray);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((person1, person2) => person1.age - person2.age);

  console.log("Sorted Array by Age:");
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find((person) => person.name.toLowerCase() === "john");

  if (john) {
    john.profession = "manager";

    console.log("John's profession updated:");
    console.log(data);
  } else {
    console.log("John not found in the array.");
  }
}

// 10. Profession Count
function getTotalProfessions() {
  let developerCount = 0;
  let adminCount = 0;

  data.forEach((person) => {
    switch (person.profession.toLowerCase()) {
      case "developer":
        developerCount++;
        break;
      case "admin":
        adminCount++;
        break;
    }
  });

  console.log("Total Developers:", developerCount);
  console.log("Total Admins:", adminCount);
}
