document.getElementById("button1").addEventListener("click", function(){

    var height = document.getElementById("box").style.height;
    //console.log(height);
    height = parseInt(height,10) * 1.1;
    //console.log(height + 'px');
    box.style.height = height + 'px';

    var width = document.getElementById("box").style.width;
    //console.log(width);
    width = parseInt(width,10) * 1.1;
    //console.log(width + 'px');
    box.style.width = width + 'px';
    

});

document.getElementById("button2").addEventListener("click", function(){

    var height = document.getElementById("box").style.height;
    //console.log(height);
    height = parseInt(height,10) / 1.1;
    //console.log(height + 'px');
    box.style.height = height + 'px';

    var width = document.getElementById("box").style.width;
    //console.log(width);
    width = parseInt(width,10) / 1.1;
    //console.log(width + 'px');
    box.style.width = width + 'px';
    

});

document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

box.style.opacity = 1;
document.getElementById("button4").addEventListener("click", function(){

    opaque = document.getElementById("box").style.opacity;
    console.log(opaque);
    opaque = opaque * 0.9;
    box.style.opacity = opaque;

});

document.getElementById("button5").addEventListener("click", function(){

    opaque = document.getElementById("box").style.opacity;
    console.log(opaque);
    opaque = opaque / 0.9;
    box.style.opacity = opaque;

});

document.getElementById("button6").addEventListener("click", function(){

    document.getElementById("box").style.height = "300px";
    document.getElementById("box").style.width = "300px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";

});