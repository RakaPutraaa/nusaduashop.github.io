//sldie show
var i = 0;
var images = [];
var time = 2000;

//images list
images[0] = 'assets/img1.jpg';
images[1] = 'assets/img2.jpg';
images[2] = 'assets/img3.jpg';

//function for change the img
function changeImg(){
    document.slide.src = images[i];

    if (i < images.length -1){
        i++;
    } else {
        i=0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;


//smooth scroll

var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

var hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));