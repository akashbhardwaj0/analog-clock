h=document.getElementById("hour");
m=document.getElementById("minute");
s=document.getElementById("second");
b=document.getElementsByClassName("birthdayMonth");


setInterval(() => {
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();

    hrotation = (30*htime)+(mtime/2);
    mrotation = 6*mtime;
    srotation = 6*stime;

    h.style.transform = `rotate(${hrotation}deg)`
    m.style.transform = `rotate(${mrotation}deg)`
    s.style.transform = `rotate(${srotation}deg)`
    
}, 1000);