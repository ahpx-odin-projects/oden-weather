export default function register() {
    addLocation()
}


function addLocation(){
    let locationList = document.querySelector('#location-list')
    let button = document.querySelector('#add-location-button')
    let i = 0

    button.addEventListener('click', () => {
        const newButton = getButton(`City ${i++}`, 'location')
        locationList.appendChild(newButton)
    })
}

function getButton(content, ...classes) {
    const newLocation = document.createElement('button')
    newLocation.innerText = content
    newLocation.classList.add(...classes)
    
    return newLocation
}