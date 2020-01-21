new Vue({
	el: '#exercise',
	data: {
		name: 'Sachin Shahi',
		age: 28,
		imageSrc: 'https://miro.medium.com/max/855/1*Kd7mrwqmrzyAudv8tS-OdQ.png'
	},
	methods: {
		randomFloat: function() {
			return Math.random();
		}
	}
})