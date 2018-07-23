
//level 2

const starWars = async() => {
    let response = await fetch("https://swapi.co/api/people/")
    .then(async (response) =>{
        response = await response.json()
        return response.results
    })
    .catch(err => {
        return err
    })
    response.map((res,index) =>{
        document.getElementById("list").innerHTML = document.getElementById("list").innerHTML +  
        `<div>No.${index+1}<br>Name: ${res.name}<br>Height: ${res.height}<br>Hair color: ${res.hair_color}<hr></div>`

    })
}

starWars()
//

// //level 2.1

fetch("https://swapi.co/api/people/")
    .then(response => {
        return response.json()
    })
    .then(response => {
        response.results.map((res, angka) => {
            document.getElementById("character-list").innerHTML = document.getElementById("character-list").innerHTML +
                `<div>No.${angka+1}<br>Name: ${res.name}<br>Height: ${res.height}<br>Hair color: ${res.hair_color}<hr></div>`
        })
    })
