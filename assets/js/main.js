const menu = document.getElementById("menu")
/*const themeBtn = document.getElementById("theme-button")*/
const menuOpenBtn = document.getElementById("open-menu")
const menuCloseBtn = document.getElementById("close-menu")

menuOpenBtn.addEventListener("click", () => {
    menu.classList.add("show")
})

menuCloseBtn.addEventListener("click", () => {
    menu.classList.remove("show")
})
/*
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark")

    if(themeBtn.classList.contains("ri-sun-line")){
        themeBtn.classList.remove("ri-sun-line")
        themeBtn.classList.add("ri-moon-line")
    } else {
        themeBtn.classList.remove("ri-moon-line")
        themeBtn.classList.add("ri-sun-line")
    }
})*/