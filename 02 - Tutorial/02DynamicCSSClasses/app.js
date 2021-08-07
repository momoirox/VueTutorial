new Vue({
    el:'#vue-app',
 
    data:{
      available:false,
      nearby:false,

    },
    computed:{
        compClasses:function(){
            return{ //create an object that we are going to return
                available: this.available,
                nearby: this.nearby,
            }
        }
    }


});