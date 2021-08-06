new Vue({
  el:'#vue-app',
  data:{
      name: 'Kakashi',
      job: 'Ninja',

  },
  methods:{ //this is also an object in which we can store as much methods as we want

    greet:function(language){


        if(language == 'English'){
            return 'Good Day ' + this.name
        }
        return 'こんにちわ ' + this.name
    }

  }
  
});
