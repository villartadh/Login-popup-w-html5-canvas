
//var canvas = document.getElementById('myCan');
   // console.log(canvas);
//if (canvas.getContext) {
//  var ctx = canvas.getContext('2d');
/* Rectangle */
    // ctx.strokeRect(250, 200, 100, 150);
    // ctx.fillStyle = "#ffffff";
    // ctx.fillRect(50, 50, 100, 150);
    // ctx.fillRect(450, 50, 100, 150);
    //
    // ctx.clearRect(60, 60, 80, 130);

/* Shadows */
    //ctx.fillStyle = 'blue';
    // ctx.rect(50, 50, 400, 400);
    // ctx.shadowBlur = 50;
    // ctx.shadowColor = "#333";
    // ctx.shadowOffsetX = -30;
    // ctx.shadowOffsetY = 30;
    // ctx.fill();

/* setup path */
    // ctx.beginPath();
    /*drawing command*/
    // ctx.fillStyle = "red";
    // ctx.moveTo(100,300);
    // ctx.lineTo(200,100);
    // ctx.lineTo(300,300);
    // ctx.lineTo(100,300);
    //ctx.closePath();
    // ctx.stroke();
    // ctx.fill();
    
/* Smiley Face */
//    ctx.fillStyle = 'yellow'; 
//    ctx.strokeStyle = 'violet';
//    ctx.arc(320,230,150,0,2*Math.PI)
//    ctx.fill();
//    ctx.lineWidth = 5;
//    ctx.stroke();
//    ctx.closePath();
    
/* Mouth */
//    ctx.beginPath();
//    ctx.moveTo(190, 260);
//    ctx.fillStyle = '#911';
//    ctx.strokeStyle = 'red';
//    ctx.bezierCurveTo(200, 360, 390, 430, 450, 260);
//    ctx.lineTo(187, 260);
//    ctx.fill()
//    ctx.lineWidth = 7;
//    ctx.stroke();
//    ctx.closePath();
    
/* Teeth */
//    var teethY = 262;
//    var teethX = 22;
//    ctx.fillStyle = 'white';
//    ctx.fillRect(300 - teethX, teethY, 40, 60);
//    ctx.fillRect(342 - teethX, teethY, 40, 60);
//    ctx.stroke();
//    ctx.closePath;
    
    /* Eyes */
//    var eyeX = 150;
//    var eyeY = 190;
//    ctx.beginPath();
//    ctx.arc(100 + eyeX, eyeY, 40, 0, 2*Math.PI);
//    ctx.arc(230 + eyeX, eyeY, 40, 0, 2*Math.PI);
//    ctx.fill();
//    ctx.closePath;
    
    /* Eye balls */
//    var eyeBallX = 150;
//    var eyeBallY = 200;
//    ctx.beginPath();
//    ctx.fillStyle = '#000';
//    ctx.arc(100 + eyeBallX, eyeY, 25, 0, 2*Math.PI);
//    ctx.arc(230 + eyeBallX, eyeY, 25, 0, 2*Math.PI);
//    ctx.fill();
//    ctx.closePath;
    
    
    

    /*Using rgb*/
//    for (var x=0; x<10; x++) {
//        ctx.fillStyle = 'rgb(' +Math.ceil(x*20)+ ',0, 0)';
//        ctx.fillRect(25+(x*30), 25, 30, 30); 
//    }
    
    /* With alpha using rgba */
//    for (var i=0; i<10; i++) {
//        ctx.fillStyle = 'rgba(0,' +Math.ceil(i*20)+',0,'+(i+1)/10+')';
//        ctx.fillRect(25+(i*30), 55, 30, 30); 
//    }
    
    /* Without alpha using rgba*/
//    for (var s=0; s<10; s++) {
//        ctx.fillStyle = 'rgba(0,' +Math.ceil(s*20)+',0,1)';
//        ctx.fillRect(25+(s*30), 85, 30, 30); 
//    }
//    
//    for (var v=0; v<10; v++) {
//        ctx.lineWidth = 1+ v;
//        ctx.strokeStyle = 'rgb(' +Math.ceil(v*20)+ ',0, 0)';
//        ctx.lineCap = 'round';
        //ctx.lineCap = 'square';
        
//        ctx.beginPath();
//        ctx.moveTo(50+(v*20),120);
//        ctx.lineTo(50+(v*20),220);
//        ctx.stroke();
//    }
//    
//    
//}


var canvas = document.getElementById('myCanvas'),
    
    context = canvas.getContext('2d'),
    elemLeft = canvas.offsetLeft,
    elemTop = canvas.offsetTop,
    eWidth = 70,
    eHeight = 20,
    eY = 170,
    eX = 60;

    context.fillStyle = 'aqua';
    context.fillRect(eX, eY, eWidth, eHeight);
    context.font = '11px Arial';
    context.fillStyle = 'black';
    context.fillText('Login', eX + 20, 184, eWidth)
    context.fill();

    var imageObj = new Image();

    imageObj.onload = function() {
    context.drawImage(imageObj, 30, 30);
    };
    imageObj.src ='user.png';

    // Add event listener for `click` events.
canvas.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;
    
    // console.log(x, y);
    // console.log(eX, eY, eWidth, eHeight);
    // locates element coordinates
    if ( x > eX && x < eX + eWidth && y > eY && y < eY + eHeight) {
        // fires when click on the target element
        document.querySelector("body").innerHTML +=
            "<div class='login'><h1>LOGIN</h1><label for='username'>Username</label><input id='username' type='text'><label for='password'>Password</label><input id='password' type='text'><input type='submit'></div>";

    }else{
        //fires when click outside the target element
        console.log('button not clicked');
    }

}, false);





