const getAlbums = async()=>{
    const update = await fetch("https://jsonplaceholder.typicode.com/albums")

    const member = await update.json()
    console.log(member)

    member.forEach((each)=>{
        div.innerHTML +=`

        <div class="card">
        <h1>${each.title}</h1>
        <h3>${each.userid}</h3>
        <h5>${each.id}</h5>
        </div>
        `
    })
}
getAlbums()