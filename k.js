const people = {

    "03061987": {
        name: "Uday",
        surname: "Boddulri",
        father: "B.Mohanrao",
        age: "38",
        dob: "6 March 1987",
        division: "Bodduruvari"
    },

    "08052011": {
        name: "Harshith",
        surname: "Marella",
        father: "Anantha",
        age: "15",
        dob: "8th May 2011",
        division: "....."
    }

};


function searchID() {

    const id = document
        .getElementById("idInput")
        .value
        .trim();

    const result = document.getElementById("result");
    const notFound = document.getElementById("notFound");

    const person = people[id];


    if (person) {

        document.getElementById("name").textContent =
            person.name;

        document.getElementById("surname").textContent =
            person.surname;

        document.getElementById("father").textContent =
            person.father;

        document.getElementById("age").textContent =
            person.age;

        document.getElementById("dob").textContent =
            person.dob;

        document.getElementById("division").textContent =
            person.division;


        result.classList.remove("hidden");
        notFound.classList.add("hidden");

    } else {

        result.classList.add("hidden");
        notFound.classList.remove("hidden");

    }
}


document
    .getElementById("idInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            searchID();
        }

    });