let lengthEl = document.getElementById("length-el")
let massEl = document.getElementById("mass-el")
let volumeEl = document.getElementById("volume-el")
let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")


convertBtn.addEventListener("click",function(){
    let feetValue = (inputEl.value * 3.28084).toFixed(3)
    let meterValue = (inputEl.value * 0.3048).toFixed(3)
    lengthEl.innerHTML = `${inputEl.value} meters = ${feetValue} feet | ${inputEl.value} feet = ${meterValue} meters`

    let gallonValue = (inputEl.value * 0.264172).toFixed(3)
    let litreValue = (inputEl.value * 3.78541).toFixed(3)
    volumeEl.innerHTML = `${inputEl.value} litres = ${gallonValue} gallons | ${inputEl.value} gallons = ${litreValue} litres`

    let poundValue = (inputEl.value * 2.20462).toFixed(3)
    let kiloValue = (inputEl.value * 0.453592).toFixed(3)
    massEl.innerHTML = `${inputEl.value} kilos = ${poundValue} pounds | ${inputEl.value} pounds = ${kiloValue} kilos`
})

