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
    link_alt: 'cute cat'
  },
  methods: {
    ram: function(){
      return Math.floor(Math.random() * (100-10-1)+10)
    },
  }
})

// Counter
new Vue ({
  el: '#app1',
  data: {
    counter: 0,
    counter2: 0,
    x: 0,
    y: 0
  },
  methods: {
    increase: function() {
      this.counter++;
    },
    anotherincrease: function(step, event) {
      this.counter2 += step;  // you can change name "step" to any word, step = (2) in HTML
    },
    updateCoordinates: function(event){
      //event is when event handler runs
      this.x = event.clientX;  //clientX is default
      this.y = event.clientY;  //clientY is default
    },
    //dummy: function(event) {
      // stop changing numbers of x and y by adding this function
      //span is a part of p element but by this stopPropagation, it does not affect event of p
    //  event.stopPropagation();
    //}
    alertMe: function() {
      alert('Here you go!')
    }
  }
})


// Assignment2 exercise2
new Vue ({
  el: '#exercise2',
  data: {
    value: '',
    value1: ''
  },
  methods: {
    alertBtn: function() {
      alert("You enter the button!")
    },
    inputValue: function(event) {
      this.value = event.target.value
    },
    inputValue1: function(event) {
      this.value1 = event.target.value //value is input value, not {{ value }}
    }
  }
})

//Assingment2 another way(solution)
new Vue ({
  el: '#ex2solution',
  data: {
    value: '',
    value1: ''
  }
})
