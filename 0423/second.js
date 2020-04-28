var app = new Vue({
    el: '#app',
    data: {
	items: [],
    },
    methods:{
    },
    mounted(){ // ロード時に呼び出される。
	for (i=0; i<10; i++){// i行目
	    this.items.push([]);
	    for (j=0; j<10; j++){// j列目
		this.items[i].push(j+10*i+1); // i行j列のデータ
	    }
	}
    }
})
