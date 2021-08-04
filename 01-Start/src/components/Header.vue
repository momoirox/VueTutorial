<template>
    <header>
        <h1>{{ title }}</h1>
        <Button text="Add Your Task" color="green"/>
    </header>
</template>

<script>

//importing components
import Button from './Button.vue'

export default {
    name:'Header',
    props:{
      title:String,
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