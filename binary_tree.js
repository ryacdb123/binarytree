var tree;

function setup(){
	createCanvas(600, 600);
	background(51);
	tree = new Tree();
	
	for(var i = 0; i < 10; i++){
		tree.addValue(floor(random(0, 100)));
	}

	

	console.log(tree);

	tree.traverse();

}

function Tree(){
	this.root = null;
}

Tree.prototype.search = function(val){
	var found = this.root.search(val);
	return found;
	
}

Tree.prototype.traverse = function(){
	this.root.visit(this.root);
}

Tree.prototype.addValue = function(val){
	var  n = new Node(val)
	if(this.root == null){
		this.root = n;
		this.root.x = width/2;
		this.root.y = 16;

	} else {
		this.root.addNode(n);
	}

}

Node.prototype.addNode = function(n){
	if(n.value < this.value){
		if(this.left == null){	
			this.left = n;
			this.left.x = this.x - 50;
			this.left.y = this.y + 20;
		}
		else{
		 	this.left.addNode(n);	
		}
	}
	else if(n.value > this.value) {

		if(this.right == null){
			this.right = n;
			this.right.x = this.x + 50;
			this.right.y = this.y + 20;
		}
		else{
			this.right.addNode(n);			
		}
	}


}



Node.prototype.search = function(val){

	if(this.value == val){
		return val;
		
	}
	else if(val < this.value && this.left != null){
		return this.left.search();
	}
	else if(val > this.value && this.right != null){
		return this.right.search();
	}

	if(this.left != null){
		this.left.visit(this.root);
			
	}
	console.log(this.value);

	if(this.right != null){
		this.right.visit(this.root);	
	}
}



Node.prototype.visit = function(parent){
	if(this.left != null){
		this.left.visit(this);
			
	}
	console.log(this.value);
	fill(255);
	stroke(255);
	textAlign(CENTER);
	line(parent.x, parent.y, this.x, this.y);
	noFill();
	ellipse(this.x, this.y -5, 25, 25);
	noStroke();
	fill(255);
	text(this.value, this.x, this.y);


	if(this.right != null){
		this.right.visit(this);	
	}
}

function Node(val, x, y){
	this.value = val;
	this.left = null;
	this.right = null;
	this.x = x;
	this.y = y;

}