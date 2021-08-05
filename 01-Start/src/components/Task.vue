<template>
<div @dblclick="$emit('toggle-reminder',task.id)" :class="[task.reminder ? 'reminder' : '','task']">
<!-- if remindet == true then set class to reminder else don't set it to nothing but always set to task class -->
     <h3> {{task.text}}
         <i @click="$emit('delete-task',task.id)" class="fas fa-times"></i>
          </h3>
     <p> {{task.day}} </p>
     
     
</div>
   
</template>
<script>
export default {
    name:'Task',
    props:{
        task:Object
    },
    methods:{
        onDelete(id){
            console.log(id)
            this.$emit('delete-task',id)

        },
    }
}
</script>

<style scoped>
.fas {
    color: red;
}
.task{
    background: #f4f4f4;;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}
.task h3{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.reminder {
    border-left: 15px solid green;

}
</style>
