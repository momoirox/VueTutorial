<template>
   <form @submit="onSubmit" class="add-form" >
    <div class="form-control">
      <label class="label-control">Task</label>
    
      <input type="text" v-model="name" placeholder="Edit me" name="text"  />
  
    </div>
    <div class="form-control" >
      <label>Day & Time</label>
      <input type="text"  name="day" />
    </div>
    <div class="form-control" >
      <label>Set Reminder</label>
      <input type="checkbox"  name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>
<script>
export default {
    name: 'AddTask',
    props:{
        name:String,
    },
    methods:{
        onSubmit(e){

            e.preventDefault()
            console.log("Submitted");
        }
    }
    
}
</script>

<style >
label{
    margin: 0 30px 0 0;
}
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0px;
}
</style>


