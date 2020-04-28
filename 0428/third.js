var app = new Vue({
    el: '#app',
    data: {
	array: [[true,true,true],
		[true,true,true],
		[true,true,true]
	       ],
    },
    methods:{
	toggle(i,j){
	    // arrayのi番目をtrue, false反転
	    this.array[i].splice(j,1,!(this.array[i][j]));
	}
    },
})
