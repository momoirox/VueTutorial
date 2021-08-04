<template>
  <div class="container">
    <h1>こうにちわ</h1>
    <Header title="Task Tracer" />
    <AddTask/>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" /> <!-- Tasks.tasks = this.tasks  passing in array-->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'


export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask

  },

  data(){ //function that returns object
    return {
      tasks: [] //an empty array
    }
  },
  methods:{


    deleteTask(id){
      if(confirm('Are you sure ?')){
        this.tasks = this.tasks.filter((task) => task.id !== id)
        //We want all back except from the task with the passed id
      }
    },
    toggleReminder(id){
      this.tasks = this.tasks.map((task)=> task.id == id ? {...task,reminder : !task.reminder} : task)
      // for each task check to se if task.id == id 
      // true return array of objects and change remindet to oposite of current task reminder
      // false we return initial task
    }
  },

  //lyfecycle method where we can make HTTP requests
  created(){    //when created runs we are gonna fill it up
    this.tasks = [

      {
        id: 1,
        text: 'Doctors apointment',
        day: 'March 1st',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at school',
        day: 'March 3rd',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'March 3rd',
        reminder: false,
      },
    ]
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
