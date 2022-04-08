
import "./index.css"
import logo from "./logo.png"

const root = document.getElementById("root")
const img = document.createElement("img")
const h1 = document.createElement("h1")

//h1.classList.add("css")

img.src ="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"

h1.setAttribute("class","cs")
h1.innerText="Note"

root.append(img,h1)