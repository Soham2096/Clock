setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    Hour.style.transform = `rotate(${hrotation}deg)`;
    Minutes.style.transform = `rotate(${mrotation}deg)`;
    Seconds.style.transform = `rotate(${srotation}deg)`;

     //This line will repeat after every 1sec...this is called interval function
}, 1000);