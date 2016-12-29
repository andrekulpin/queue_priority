module.exports = PriorityHeap;

function PriorityHeap( array, comparator ){
	this.DEFAULT_COMPARATOR = this.DEFAULT_COMPARATOR || comparator;
	this.data = array || [];
	__buildHeap__( array );
}

PriorityHeap.prototype.DEFAULT_COMPARATOR = function(){}

PriorityHeap.prototype.push = function( task ){
	this.data.push( task );
	__insert__(this.data, this.data.length - 1);
}

PriorityHeap.prototype.getMax = function( task ){
	var max = this.data[0];
	this.data = this.data.slice(1);
	__buildHeap__(this.data);
	return max;
}

function __buildHeap__( array ){
	var l = array.length - 1;
	var i = 1
	while( 0 <= l ){
		__heapify__( array, l-- );
	}
}

function __insert__( heap, i ){
	var p = Math.floor(i / 2);
	if(heap[i] > heap[p]){
		var tmp = heap[p];
		heap[p] = heap[i];
		heap[i] = tmp;
		__insert__(heap, p);
	}
}

function __heapify__( heap, i ){
	var l = i << 1;
	var r = l + 1;
	var L = heap.length;
	var M = i;
	if( l <= L && heap[l] > heap[i] ){
		M = l;
	}
	if( r <= L && heap[r] > heap[M] ){
		M = r;
	}
	if( M !== i ){
		var tmp = heap[M];
		heap[M] = heap[i];
		heap[i] = tmp;
		__heapify__(heap, M);
	}
}