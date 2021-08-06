new Vue({
    el:'#vue-app',
    data:{
        age:20,
        a:0,
        b:0,
    },
  /*  methods:{
        addToA:function(){
            return this.a + this.age;
        },
        addToB:function(){
            return this.b + this.age;
        },
    },*/
    computed:{
        addToA:function(){
            console.log('Add to A');
            return this.a + this.age;
        },
        addToB:function(){
            console.log('Add to B');
            return this.b + this.age;
        },
    }
});