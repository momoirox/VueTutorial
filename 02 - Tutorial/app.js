new Vue({
  el:'#vue-app',
  data:{
      name: 'Kakashi',
      job: 'Ninja',
      website: 'https://naruto.fandom.com/wiki/Kakashi_Hatake',
      websiteTag: '<a href="https://naruto.fandom.com/wiki/Kakashi_Hatake">Bio</a> ',
      age: 35,
      x: 0,
      y:0,

  },
  methods:{ //this is also an object in which we can store as much methods as we want

    greet:function(language){


        if(language == 'English'){
            return 'Good Day ' + this.name
        }
        return 'こんにちわ ' + this.name
    },
    add:function(year){
        this.age += year;
    },
    subtract:function(year){
        this.age -= year;
    },
    updateXY(event){
        this.x = event.offsetX;
        this.y = event.offsetY;
        
    }

  }

});
