<template>
<div id="tasks.ids">
    <div v-for="task in tasks" v-bind:key="task.id">
        <Task @toggle-reminder="$emit('toggle-reminder',task.id)" @delete-task="$emit('delete-task',task.id)" :task="task" />
        
    </div>
</div>
</template>
<script>
import Task from './Task.vue'

export default {
    name:'Tasks',
    props:{
        tasks: Array,  //take in array of tasks
    },
   components:{
       Task
   },
   emits: ['delete-task','toggle-reminder']
}
</script>