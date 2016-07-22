function Ball(radius,color){
    if(radius==undefined){radius=40;};
    if(color==undefined){color="#FF0000";};
    this.x=0;
    this.y=0;
    this.radius=radius;
    this.color=color;
    this.width=2*this.radius;
    this.height=this.width;
    this.vx=0;
    this.vy=0;
    this.ax=0;
    this.ay=0;
    this.scaleY=1;
    this.globalAlpha=1;
    this.rotation=0;
    this.fPerMiliSecond=60/1000;
    this.rest=false;
    this.bounced=false;
    this.mass=10;
};

Ball.prototype.draw= function(context){
    context.save();
    context.translate(this.x,this.y);
    context.rotate(this.rotation);
    context.fillStyle=this.color;
    context.lineWidth=1;
    context.beginPath();
    context.arc(0,0,this.radius,0,(Math.PI*2),true);
    context.moveTo(0,0);
    context.lineTo(this.radius,0);
    context.closePath();
    context.globalAlpha=this.globalAlpha;
    context.fill();
    context.stroke();
    context.restore();
};
Ball.prototype.setLocation=function(x,y){
    if(x==undefined){x=200;};
    if(y==undefined){y=200;};
    this.x=x;
    this.y=y;
};
Ball.prototype.drawNoLine=function(context){
    context.save();
    context.translate(this.x,this.y);
    context.rotate(this.rotation);
    context.fillStyle=this.color;
    context.beginPath();
    context.arc(0,0,this.radius,0,(Math.PI*2),true);
    context.closePath();
    context.globalAlpha=this.globalAlpha;
    context.fill();
    //context.stroke();
    context.restore();
};  
Ball.prototype.moveToTarget= function(delta){
    this.x+=this.vx*delta*this.fPerMiliSecond;
    this.y+=this.vy*delta*this.fPerMiliSecond;
};
Ball.prototype.createTarget=function(canvas){
    this.targetX=Math.floor(Math.random()*canvas.width);
    this.targetY=Math.floor((Math.random()*canvas.height));
};
Ball.prototype.targetDistance=function(){
    var distX = this.targetX-this.x;
    var distY = this.targetY-this.y;
    return eucledian(distX, distY);
};
Ball.prototype.createLine=function(context,ball){
    var distX = this.x - ball.x;
    var distY = this.y - ball.y;
    if(eucledian(distX, distY)<100){
        this.lineToBall(context,ball);
    }
};
Ball.prototype.lineToBall=function(context,ball){
        context.save();
        context.beginPath();
        context.moveTo(this.x,this.y);
        context.lineTo(ball.x,ball.y);
        context.closePath();
        context.lineWidth=1;
        context.strokeStyle=this.color;
        context.stroke();
        context.restore();
};
Ball.prototype.eucledian=function(distX,distY){
    return eucledian(distX, distY);
};
function eucledian(distX,distY){
    return Math.sqrt(Math.pow(distX,2)+Math.pow(distY,2));
};