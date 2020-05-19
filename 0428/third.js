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
	    if (i+1 < 3){
		this.array[i+1].splice(j,1,!(this.array[i+1][j]));
	    }
	    if (i-1 >=0){
		this.array[i-1].splice(j,1,!(this.array[i-1][j]));
	    }
	    if (j+1 < 3){
		this.array[i].splice(j+1,1,!(this.array[i][j+1]));
	    }
	    if (j-1 >=0){
		this.array[i].splice(j-1,1,!(this.array[i][j-1]));
	    }
	}
    },
})
