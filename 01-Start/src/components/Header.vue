<template>
    <header>
        <h1>{{ title }}</h1>
        <Button @button-click="$emit('toggle-add-task')" 
         :text="showAddTask ? 'Close' : 'Add Your Task'"
         :color="showAddTask ? 'red' : 'green'"
         />
    </header>
</template>

<script>

//importing components
import Button from './Button.vue'

export default {
    name:'Header',
    props:{
      title:String,
      showAddTask: Boolean
    },
      //registering components
    components:{
        Button
    }
}
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }   
</style>