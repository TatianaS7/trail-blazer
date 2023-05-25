const parkTypesArray = [
    "Park Type..",
    "National Park",
    "National Monument",
    "Recreation Area",
    "Scenic Trail",
    "Battlefield",
    "Historic",
    "Memorial",
    "Preserve",
    "Island",
    "River",
    "Seashore",
    "Trail",
    "Parkway"
]

//By Park Type
const selectElement = document.querySelector("#by-park-type");

function populateParkTypeDropdown() {

    for (const parkType of parkTypesArray) {

        const option = document.createElement("option");

        option.value = parkType
        option.innerText = parkType

        selectElement.append(option)
    }
}
