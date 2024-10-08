export default function register() {
    addLocation()
}


function addLocation(){
    let input = document.querySelector('#add-location-input')
    let button = document.querySelector('#add-location-button')

    function addNewLocation() {
        getLocation(input.value)
        input.value = ''
    }

    button.addEventListener('click', addNewLocation)

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addNewLocation()
        }
    })
}

function getButton(content, ...classes) {
    const newLocation = document.createElement('button')
    newLocation.innerText = content
    newLocation.classList.add(...classes)
    
    return newLocation
}

function getLocation(location) {
    if (!location) {
        return
    }
    let locationList = document.querySelector('#location-list')
    if ([...locationList.children].some(i => i.innerText === location)) {
        return
    }
    const newButton = getButton(`${location}`, 'location')
    locationList.appendChild(newButton)
}