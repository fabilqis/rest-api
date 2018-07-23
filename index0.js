//level 0

fetch("https://swapi.co/api/people/")
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
});

//





