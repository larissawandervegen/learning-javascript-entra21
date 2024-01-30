// //1
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log('Todas as Tarefas: ', data))
//     .catch(error => console.error('Erro ao ler tarefas: ', error));

//2
const newTask = {
    title: "Nova tarefa",
    completed: false
};
fetch('https://jsonplaceholder.typicode.com/todos', {
    method: "POST",
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(newTask)
})
    .then(response => response.json())
    .then(data => console.log('Todas as Tarefas: ', data))
    .catch(error => console.error('Erro ao ler tarefas: ', error));

//put
// const updateTask = {
//     id: 1,
//     title: "Tarefa atualizada",
//     completed: true
// };

// fetch(`https://jsonplaceholder.typicode.com/todos/${updateTask.id}`, {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(updateTask)
// })
//     .then(response => response.json())
//     .then(data => console.log('Tarefa Atualizada: ', data))
//     .catch(error => console.error('Erro ao atualizar tarefas: ', error));

//delete
const taskIdToDelete = 1;

fetch(`https://jsonplaceholder.typicode.com/todos/${taskIdToDelete}`,{
    method: 'DELETE'
})
.then(response => {
    if (response.ok){
        console.log('Tarefa excluída com sucesso.');
    }else{
        throw new Error(`Erro ao excluir tarefa: ${response.status}`)
    }
})
.catch(error => console.error('Erro ao excluir tarefa:', error));