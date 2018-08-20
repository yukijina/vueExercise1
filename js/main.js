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

//Section 2 Lecture 22
new Vue ({
  el: '#app3',
  data: {
    name: 'Max'
  }
})

//Section 2 Lecture 23
new Vue ({
  el: '#lec23',
  data: {
    counter: 0,
    secondCounter: 0
  },
  computed: {
    output: function() {
      console.log('computed')
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5'
    }
  },
  watch: {
    //this runs whenever counter runs, thi is vue value
    counter: function(value) {
      //need to store this allows to acess property
      var vm = this;
      setTimeout(function(){
        vm.counter = 0;
      },2000)
    }
  },
  methods: {
    result: function() {
      console.log('methods')
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5'
    }
  }
})

//Assignment3 exercise
new Vue ({
  el: '#exercise3',
  data: {
    value: 0,
  },
  computed: {
    result: function() {
      return this.value > 37 ? 'done' : 'not there yet'
    }
  },
  watch: {
    result: function(value) {
      var vm = this;
      setTimeout(function(){
        vm.value = 0;
      },5000) // after result reached >37, in 5 sec, it returns 0
    }
  }
})
