new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
		methods: {
			showAlert: function() {
				alert('Alert!');
			},
			updateValue: function(event) {
				this.value = event.target.value;
			}
		}
    });