//level 0

// fetch("https://swapi.co/api/people/")
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     console.log(data);
// });

//

//level 1

// fetch("https://swapi.co/api/people/")
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     console.log(data.results);
// });

//

//level 2

// const starWars = async() => {
//     let response = await fetch("https://swapi.co/api/people/")
//     .then(async (response) =>{
//         response = await response.json()
//         return response.results
//     })
//     .catch(err => {
//         return err
//     })
//     response.map((res,index) =>{
//         document.getElementById("character-list").innerHTML = document.getElementById("character-list").innerHTML +  
//         `<div>No.${index+1}<br>Name: ${res.name}<br>Height: ${res.height}<br>Hair color: ${res.hair_color}<hr></div>`

//     })
// }

// starWars()
//

// //level 2.1
// fetch("https://swapi.co/api/people/")
//     .then(response => {
//         return response.json()
//     })
//     .then(response => {
//         response.results.map((res, angka) => {
//             document.getElementById("character-list").innerHTML = document.getElementById("character-list").innerHTML +
//                 `<div>No.${angka+1}<br>Name: ${res.name}<br>Height: ${res.height}<br>Hair color: ${res.hair_color}<hr></div>`
//         })
//     })
//

//Level 3

const github = async() => {
    let response = await fetch("https://api.github.com/users/fabilqis/followers")
    .then(async (response) =>{
        response = await response.json()
        return response
    })
    .catch(err => {
        return err
    })
    response.map((res, avatar_url) =>{
        document.getElementById("githublist").innerHTML = document.getElementById("githublist").innerHTML +  
        `<div class="d-flex justify-content-center" align="center"><div class="card " style="width: 15rem;">
        <img src="${res.avatar_url}" width="240px" height="240px"></img>
        <div class="card-body"><h5 class="card-title ">${res.login}</h5><a href="${res.html_url}" class="btn btn-primary" target="_blank"> Go to profile</a></div></div></div>`

    })
}

github()
