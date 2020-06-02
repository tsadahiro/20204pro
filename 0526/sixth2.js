Vue.component('piece',{
    props: ['row','col','digit'],
    template: '<g @click="slide(digit)" :transform="transform"><rect width="100" height="100" :fill="fill" fill-opacity="0.5" stroke="black"></rect>'+
	'<text x="30" y="70" font-size="50">{{character}}</text></g>',
    computed:{ //算出プロパティ
	transform(){
	    return 'translate(' + this.col*100 + ',' + this.row*100 + ')';
	},
	fill(){
	    return this.digit==0? 'white':'blue';
	},
	character(){
	    return this.digit==0? '':this.digit;
	}
    },
    methods:{
	slide(){
	    this.$emit('slide')
	}
    }
})

var app = new Vue({
    el: '#app',
    data: {
	pieces: [
	    {x:2,y:2},//0
	    {x:0,y:0},//1
	    {x:1,y:0},//2
	    {x:2,y:0},//3
	    {x:0,y:1},//4
	    {x:1,y:1},//5
	    {x:2,y:1},//6
	    {x:0,y:2},//7
	    {x:1,y:2},//8
	]
    },
    methods:{
	slide(i){
	    let dx = this.pieces[i].x - this.pieces[0].x
	    let dy = this.pieces[i].y - this.pieces[0].y
	    if (dx*dx + dy*dy == 1){ // 隣接している。
		// 0 と iの座標を交換する。
		let buff = this.pieces[0];//退避
		this.pieces.splice(0, 1, this.pieces[i]);
		this.pieces.splice(i, 1, buff);
	    }
	},
	shuffle(){
	    for (let i = 0; i < 1000; i++){
		let r = Math.floor(Math.random()*this.pieces.length);
		this.slide(r);
	    }
	}
    },
})
