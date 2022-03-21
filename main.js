// Kreiranje svih brojeva i buttona za sve brojeve
const brojeviDiv = document.getElementById('brojevi')
const sviBrojevi = [...Array(100).keys()].map(i => i+1)

for (i=0; i<sviBrojevi.length; i++) {
    brojeviDiv.innerHTML = brojeviDiv.innerHTML + `<button data-number id='number-${sviBrojevi[i]}'>${sviBrojevi[i]}</button>`
}

const collected = []

if (localStorage.length > 0) {
    const collectedLS = JSON.parse(localStorage.getItem('collected'))
    if (collectedLS) {
        collectedLS.forEach((collectedItem) => {
            collected.push(collectedItem)
            const trenutniItem = document.getElementById(collectedItem)
            trenutniItem.classList.add('checked')
        })
    }
} 

function updateLS(numberToAdd) {
    if (collected.includes(numberToAdd)) {
        const index = collected.indexOf(numberToAdd)
        if (index > -1) {
            collected.splice(index, 1)
        }
    } else {
        collected.push(numberToAdd)
    }

    localStorage.setItem('collected', JSON.stringify(collected))
}





// Klikom na button dodaj toggle klasu i updejtaj local storage
const numberButtons = document.querySelectorAll('[data-number]')

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('checked')
        updateLS(button.id)
    })
})

