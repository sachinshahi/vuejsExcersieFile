new Vue({
  el: '#exercise',
  data: {
	  isHighLight: false,
	  classValue: 'red',
	  className: '',
	  flag: false,
	  progressWidth: 10,
	  styleValue: 'red'

  },
  computed: {
	  divClasses: function() {
		  return {
			  [this.className]: this.flag == 'true'
		  };
	  },
	  progressStyle: function() {
		  return  {
			  backgroundColor: 'grey',
			  width: this.progressWidth + 'px',
			  height: 20 + 'px'
		  }
	  }
  },
  methods: {
    startEffect: function() {
	  var vm = this;	
      setInterval( function() {
		  vm.isHighLight = !vm.isHighLight;
	  }, 3000);
    },
	startProgress: function() {
		var vm = this;
		setInterval(function() {
			vm.progressWidth = vm.progressWidth + 10;
		} , 500)
	}
  }
});
