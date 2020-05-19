var app = new Vue({
    el: '#app',
    data: {
	array: [[true,true,true],
		[true,true,true],
		[true,true,true]
	       ],
	size: 3,
    },
    mounted(){
	this.size = 20;
	this.array = [];
	for (let i=0; i<this.size; i++){
	    this.array.push([]);
	    for (let j=0; j<this.size; j++){
		this.array[i].push((i+j)%2==0);
	    }
	}
    },
    methods:{
	toggle(i,j){
	    this.array[i].splice(j,1,!(this.array[i][j]));
	},
	change(i,j){
	    this.toggle(i,j);
	    if(i>0)this.toggle(i-1,j);
	    if(i<this.size-1)this.toggle(i+1,j);
	    if(j>0)this.toggle(i,j-1);
	    if(j<this.size-1)this.toggle(i,j+1);
	},
	plus(){
	    this.size+=1;
	    for (let i=0; i<this.size-1; i++){
		this.array[i].push(true);
	    }
	    let newrow = [];
	    for (let i=0; i<this.size; i++){
		newrow.push(true);
	    }
	    this.array.push(newrow);
	},
	minus(){
	    for (let i=0; i<this.size; i++){
		this.array[i].pop();
	    }
	    this.array.pop();
	    this.size-=1;
	}
    },
    
})
