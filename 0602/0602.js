

Vue.component('mybtn',{
    props: ['row','column'],
    template: '<g>'+
	'<circle @click="inc()" :cx="column*100+50" :cy="row*100+50" r="50" fill="blue"></circle>'+
	'</g>',
    data(){
	return {
	    count:0,
	}
    },
    methods:{
	inc(){
	    this.count+=1;
	    console.log([this.row, this.column, this.count]);
	}
    }
})
	      

let app=new Vue({
    el: "#june",
    data:{
	btns:[
	    {row:0,column:0},
	    {row:0,column:1},
	    {row:2,column:3},
	    {row:1,column:2}
	],
    }
})
