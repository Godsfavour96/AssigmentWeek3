

const div = document.getElementById("container");

const fetchTodos = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await result.json()
  console.log(todos)

  todos.forEach((each) => {
    div.innerHTML += `
      <div class=card>
        <h1>${each.id}</h1>
        <h3>${each.title}</h3>
        <h4>${each.completed}</h4>
      </div>`;
  })
}

fetchTodos()