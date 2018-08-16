new Vue ({
  el: '#app',
  data: {
    title: 'Hello World!',
    text:  "You are beautiful!",
    link: "http://www.google.com",
    finishedLink : '<a href="http://www.google.com" target="_blank">Google</a>'
  },
  methods: {
    //change text inside text as same as input value
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    anotherText: function() {
      return "Here you go!"
    }
  }
})

// Assignment 1
new Vue ({
  el: '#exercise',
  data: {
    me: 'Yuki ',
    age: 28,
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9PqvCqAfsJNWTHMLdwQ0zEKv2ZikLR419IEJssoX7ZrkV4pNP',
    link_alt: 'cute cat',
  },
  methods: {
    ram: function(){
      return Math.floor(Math.random() * (100-10-1)+10)
    },
  }
})
