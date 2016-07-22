function Amo(sprite,width,height,damage,speed){
	this.sprite=sprite;
	this.width=width;
	this.height=height;
	this.x=0;
	this.y=0;
	this.damage=damage;
	this.speed=speed;
	this.rotation=0;
}
Amo.prototype.getDamage = function(context) {
	return this.damage;
};
Amo.prototype.setXY = function(x,y) {
	this.x=x;
	this.y=y;
};