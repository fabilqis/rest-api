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
        `<div class="d-flex justify-content-center mb-3 mt-4" align="center"><div class="card " style="width: 15rem;">
        <img src="${res.avatar_url}" width="240px" height="240px"></img>
        <div class="card-body"><h5 class="card-title ">${res.login}</h5><a href="${res.html_url}" class="btn btn-primary" target="_blank"> Go to profile</a></div></div></div>`

    })
}

github()