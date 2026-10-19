let a_icon = document.querySelector("#a-icon")
let underlay = document.querySelector("#underlay")
let app_con = document.querySelector(".app-container")
let user = document.querySelector(".user")
let underlay2 = document.querySelector("#underlay2")
let acc_con = document.querySelector(".account-container")
let input = document.querySelector(".input")
let shortcut = document.querySelector(".short-cut")
let underlay3 = document.querySelector(".underlay3")
let cancel = document.querySelector(".cancel")
let done = document.querySelector(".done")
let s_name = document.querySelector("#name")
let s_url = document.querySelector("#url")
let nameEnable = false
let urlEnable = false
let shorts = document.querySelector(".short-append")

a_icon.addEventListener("click" , () => {
    underlay.style.display = "flex"
    underlay2.style.display = "none"
})

underlay.addEventListener("click" , () => {
    underlay.style.display = "none"
})

app_con.addEventListener("click" , (e) => {
    e.stopPropagation()
})

user.addEventListener("click" , () => {
    underlay2.style.display = "flex"
    underlay.style.display = "none"
    if(underlay2.style.display === "flex"){
        a_icon.style.zIndex = "999"
    }
})

underlay2.addEventListener("click" , () => {
    underlay2.style.display = "none"
})

acc_con.addEventListener("click" , (e)=> {
    e.stopPropagation()
})

input.addEventListener("keyup" , (e) => {
    if(e.key == "Enter"){
        window.open(`https://www.google.com/search?q=${input.value}`)
    }
})

shortcut.addEventListener("click" , () => {
    underlay3.style.display = "flex"
})

cancel.addEventListener("click" , () => {
    underlay3.style.display = "none"
})

s_name.addEventListener("keyup" , () => {

    if(s_name.value.length > 0){
        nameEnable = true
    }else{
        nameEnable = false
    }

    if(s_name.value.length > 0 && s_url.value.length > 0) {
        done.disabled = false
    }else{
        done.disabled = true
    }
})
s_url.addEventListener("keyup" , () => {

    if(s_url.value.length > 0){
        urlEnable = true
    }else{
        urlEnable = false
    }

    if(s_url.value.length > 0  && s_name.value.length > 0) {
        done.disabled = false
    }else{
        done.disabled = true
    }
})

done.addEventListener("click" , () => {
    let favicon = `${s_url.value}/favicon.ico`

    let div = document.createElement("div")
    div.classList.add("div")

    let ancr = document.createElement("a")
    ancr.href = `https://${s_url.value}`
    ancr.classList.add('ancr')

    let fav_icon = document.createElement("img")
    fav_icon.src = `https://${favicon}`
    fav_icon.classList.add("fav-icon")

    let fav_name = document.createElement("span")
    fav_name.innerText = s_name.value
    fav_name.classList.add("fav-name")

    ancr.appendChild(fav_icon)
    div.append(ancr , fav_name)
    shorts.appendChild(div)

    underlay3.style.display = "none"
    s_name.value = ""
    s_url.value = ""
})


