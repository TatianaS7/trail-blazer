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

function populateParkTypeDropdown() {
    const selectElement = document.querySelector("#by-park-type");

    for (const parkType of parkTypesArray) {

        const option = document.createElement("option");

        option.value = parkType
        option.innerText = parkType

        selectElement.append(option)
    }
}

/*function returnParkDataByType() {
    const selectElement = document.querySelector("#by-park-type"); //selects dropdown
    const parkInfo = document.querySelector("#parkInfo") //selects main container from HTML 
    const currentOption = selectElement.value; //turns value of the dropdown element into variable for comparison

//figure out best way to check if park objects include selected park type

        parkInfo.innerHTML = (`The current parks that fall under the type: ${currentOption} are: ${nationalParksArray.LocationName}`); //if they match, output corresponding data into HTML container
    }                                

selectElement = document.querySelector("#by-park-type"); //selects dropdown again to attach event listener
selectElement.addEventListener("change", returnParkDataByType); //listens for change of value and calls function*/
