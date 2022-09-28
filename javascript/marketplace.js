let btnDarkMode = document.getElementById("botonDarkMode")
let btnLightMode = document.getElementById("botonLightMode")
let eliminarMode = document.getElementById("eliminarMode")
let modoAzul
if(localStorage.getItem("darkMode")){
  modoAzul = localStorage.getItem("darkMode")
}else{
  localStorage.setItem("darkMode", false)
}
if(modoAzul == "true"){
  document.body.style.backgroundColor = "cadetblue"
  document.body.style.color = "white"
}else{
  document.body.style.backgroundColor = "#d3bdb0"
  document.body.style.color = "black"
}

btnDarkMode.addEventListener("click", () => {
  document.body.style.backgroundColor = "cadetblue"
  document.body.style.color = "white"
  localStorage.setItem("darkMode", true)
})

btnLightMode.addEventListener("click", () => {
  document.body.style.backgroundColor = "#d3bdb0" 
  document.body.style.color = "black"
  localStorage.setItem("darkMode", false)
})

eliminarMode.addEventListener("click", () => {
  document.body.style.backgroundColor = "white" 
  document.body.style.color = "black"
  localStorage.removeItem("darkMode")
})




