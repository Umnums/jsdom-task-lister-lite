class TaskList{
  constructor(){
      this.tasks=[];
  }

  createNewTask(desc){
      const newTask = new Task(desc);
      this.tasks.push(newTask);
  }

  renderTasks(){
      return this.tasks.map((task) => task.render()).join('');
  }
}

class Task{
    constructor(desc){
        this.desc = desc;
    }

    render(){
      return `<li> ${this.desc}</li>`
    }
}

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const myList = new TaskList();
  const input = document.getElementById('create-task-form');
  const taskDesc = document.getElementById('new-task-description');
  const tasks = document.getElementById('tasks')
  
  const renderPage=() =>(tasks.innerHTML = myList.renderTasks());
  

  function logSubmit(e){
    e.preventDefault();
    myList.createNewTask(taskDesc.value);
    e.target.reset();
    renderPage()
  }


  input.addEventListener('submit', logSubmit);
});
