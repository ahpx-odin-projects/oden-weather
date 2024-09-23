export default function register() {
    addLocation()
}


function addLocation(){
    let locationList = document.querySelector('#location-list')
    let input = document.querySelector('#add-location-input')

    let button = document.querySelector('#add-location-button')


    button.addEventListener('click', () => {
        if (!input.value) {
            return
        }
        const newButton = getButton(`${input.value}`, 'location')
        locationList.appendChild(newButton)
    })
}

function getButton(content, ...classes) {
    const newLocation = document.createElement('button')
    newLocation.innerText = content
    newLocation.classList.add(...classes)
    
    return newLocation
}