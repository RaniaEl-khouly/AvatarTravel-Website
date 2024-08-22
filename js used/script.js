let myImage = document.getElementById("slideshow");
let images=["images/destinations1.jpg","images/destinations2.jpeg","images/destinations3.jpg","images/destinations4.jpg","images/destinations5.jpg","images/destinations6.jpeg"];
let i = 0;

//src="images/destinations1.jpg"
function slideshow() {
    
    myImage.setAttribute('src', images[i]);
    if (i == images.length -1) {
        i = 0;
    } else {
        i++;
    }

    setTimeout(function(){
        slideshow();
    },2000)
}

slideshow();

// clock
function currentTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let flag ="AM";
    
    if (hours == 0){
        hours =12
    }
    if(hours > 12){
        hours = hours -12;
        flag = "PM"
    }
    if(hours<10) hours ="0" + hours;
    if (minutes<10)minutes= "0" + minutes;
    if(seconds <10)seconds = "0" + seconds;
    document.querySelector('.clock').innerText = `${hours}:${minutes}:${seconds}:${flag}`
    
    setTimeout(function(){
        currentTime()
    },1000)
    
    
    }
    currentTime()