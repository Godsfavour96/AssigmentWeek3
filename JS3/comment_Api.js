const allComment = async()=>{
    const update = await fetch("https://jsonplaceholder.typicode.com/comments")

    const response = await update.json()
    console.log(response)

    response.forEach((each)=>{
        div.innerHTML +=`

        <div class="card">
        <h1>${each.name}</h1>
        <h3>${each.email}</h3>
        <h5>${each.body}</h5>
        </div>
        `
    })
}
allComment()
