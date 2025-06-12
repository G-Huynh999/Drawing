let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
//CIRCLE
c.fillStyle = "yellow";
c.beginPath;
c.arc(948, 100, 50, 3.14, Math.PI * 2);
c.stroke();
c.fill();
c.closePath();
//TRIANGLES SIDE ROAD LINES
c.fillStyle = "black";
c.beginPath();
c.moveTo(-150, 1000);
c.lineTo(-30, 1000);
c.lineTo(900, 100);
c.closePath();
c.fill();

c.fillStyle = "black";
c.beginPath();
c.moveTo(2150, 1200);
c.lineTo(2050, 1000);
c.lineTo(1000, 100);
c.closePath();
c.fill();
//FLOOR
c.fillStyle = "black";
c.fillRect(0, 900, 2000, 100);

//FENCE
c.fillStyle = "rgba(88, 85, 85, 0.9)";
c.beginPath();
c.moveTo(1100, 80);
c.lineTo(1100, 140);
c.lineTo(2000, 800);
c.lineTo(2000, 550);
c.closePath();
c.fill();

c.fillStyle = "rgb(70, 66, 65)";
c.beginPath();
c.moveTo(1100, 90);
c.lineTo(1100, 95);
c.lineTo(2000, 600);
c.lineTo(2000, 570);
c.closePath();
c.fill();

c.fillStyle = "rgb(70, 66, 65)";
c.beginPath();
c.moveTo(1100, 100);
c.lineTo(1100, 105);
c.lineTo(2000, 645);
c.lineTo(2000, 615);
c.closePath();
c.fill();

c.fillStyle = "rgb(70, 66, 65)";
c.beginPath();
c.moveTo(1100, 110);
c.lineTo(1100, 115);
c.lineTo(2000, 695);
c.lineTo(2000, 665);
c.closePath();
c.fill();

c.fillStyle = "rgb(70, 66, 65)";
c.beginPath();
c.moveTo(1100, 120);
c.lineTo(1100, 125);
c.lineTo(2000, 745);
c.lineTo(2000, 715);
c.closePath();
c.fill();
//FILTER
c.fillStyle = "rgb(105, 75, 255, 0.5)";
c.fillRect(0, 0, 2000, 345);

//ROAD STREAKS
c.fillStyle = "rgb(0,0,0)";
c.fillRect(918, 600, 60, 145);
c.fillStyle = "rgb(0,0,0)";
c.fillRect(929, 400, 40, 105);
c.fillStyle = "rgb(233, 170, 170)";
c.fillRect(939, 250, 20, 65);
c.fillStyle = "rgb(233, 170, 170)";
c.fillRect(942, 160, 15, 45);
c.fillStyle = "rgb(233, 170, 170)";
c.fillRect(945, 110, 10, 15);
//Building
c.fillStyle = "rgb(0, 0, 0)";
c.fillRect(50, 550, 215, 40);
c.fillStyle = "rgb(0, 0, 0)";
c.fillRect(50, 240, 200, 330);
c.fillStyle = "rgb(253, 104, 4)";
c.fillRect(130, 520, 40, 45);
c.fillStyle = "black";
c.fillRect(149, 520, 2, 45);
c.fillStyle = "rgb(0, 0, 0)";
c.beginPath();
//3D-STUFF
c.fillStyle = "rgb(0, 0, 0)";
c.beginPath();
c.moveTo(265, 590);
c.lineTo(250, 550);
c.lineTo(330, 465);
c.lineTo(340, 500);
c.fill();
c.closePath();

c.fillStyle = "black";
c.beginPath();
c.moveTo(245, 240);
c.lineTo(250, 250);
c.lineTo(332, 182);
c.fill();
c.closePath();

c.fillStyle = "rgb(0, 0, 0)";
c.beginPath();
c.moveTo(35, 590);
c.lineTo(50, 590);
c.lineTo(50, 550);
c.fill();
c.closePath();

c.fillStyle = "rgb(27, 28, 29)";
c.beginPath();
c.moveTo(250, 249);
c.lineTo(250, 560);
c.lineTo(330, 470);
c.lineTo(330, 183);
c.fill();
c.closePath();

c.fillStyle = "rgb(0, 0, 0)";
c.beginPath();
c.moveTo(139, 185);
c.lineTo(64, 240);
c.lineTo(250, 240);
c.lineTo(330, 183);
c.fill();
c.closePath();

c.fillStyle = "black";
c.beginPath();
c.moveTo(50, 240);
c.lineTo(65, 240);
c.lineTo(140, 185);
c.fill();
c.closePath();

//Windows
c.fillStyle = "rgb(248, 167, 87)";
c.fillRect(70, 430, 40, 45);
c.fillStyle = "rgb(248, 167, 87)";
c.fillRect(130, 430, 40, 45);
c.fillStyle = "rgb(248, 167, 87)";
c.fillRect(190, 430, 40, 45);
c.fillStyle = "rgb(248, 167, 87)";
c.fillRect(70, 360, 40, 45);
c.fillStyle = "rgb(248, 167, 87)";
c.fillRect(130, 360, 40, 45);
c.fillStyle = "rgb(248, 167, 87)";
c.fillRect(190, 360, 40, 45);
c.fillStyle = "rgb(248, 167, 87)";
c.fillRect(70, 430, 40, 45);
c.fillStyle = "rgb(248, 167, 87)";
c.fillRect(130, 430, 40, 45);
c.fillStyle = "rgb(248, 167, 87)";
c.fillRect(190, 430, 40, 45);
c.fillStyle = "rgb(248, 167, 87)";
c.fillRect(70, 290, 40, 45);
c.fillStyle = "rgb(248, 167, 87)";
c.fillRect(130, 290, 40, 45);
c.fillStyle = "rgb(248, 167, 87)";
c.fillRect(190, 290, 40, 45);
//POSTS
c.fillStyle = "rgb(63, 38, 22)";
c.fillRect(1100, 70, 5, 80);
c.fillStyle = "rgb(63,38,22)";
c.fillRect(1270, 150, 10, 130);
c.fillStyle = "rgb(63,38,22)";
c.fillRect(1550, 300, 15, 200);
//TITLE
c.fillStyle = "orange";
c.font = "60px Franklin Gothic";
c.fillText("Sunset Drive", 25, 65);
console.log(canvas);
