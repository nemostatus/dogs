const div = document.getElementById("div")

const handleClick = () => {
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(dog => {document.getElementById("div").innerHTML = `<img src= ${dog.message}>` })
}

