new Vue({
    el:'#vue-app',
    data:{
       name:'Jack', 
       characters:['Mario','Luigi','Yoshi','Bowser'],   //Array of strings
        ninjas:[                                        //Array of objects
            {
                name: 'Ryu',
                age: 35
            },
            {
                name: 'Yoshi',
                age:55
            },
            {
                name:'Ken',
                age: 45
            }

        ],
    }
});