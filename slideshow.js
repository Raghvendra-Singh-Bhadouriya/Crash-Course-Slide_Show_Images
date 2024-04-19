let imageArr =
[
    "https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/06/19/20/13/sunset-815270_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/01/22/19/44/flower-field-250016_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/12/24/05/02/drop-of-water-578897_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/08/04/49/jungle-1807476_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/04/17/23/26/environmental-protection-326923_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/11/15/13/27/river-2951997_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/02/19/15/28/sunset-2080072_1280.jpg",
]

let container = document.querySelector("#container");
let image = document.querySelector("img");
let previous = document.querySelector("#previ");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let next = document.querySelector("#next");


let currentImg = 0;
let id;
//image.setAttribute("src", imageArr[currentImg]);
function showImg(currentImg){
    image.src=imageArr[currentImg];
}
showImg(currentImg);



//===================================Previous Image Function=====================================//
function previousImg(){
    clearInterval(id);
    currentImg--;
    if(currentImg < 0){
        currentImg=imageArr.length-1;
    }
    showImg(currentImg);
    start.disabled=false;
    start.style.background="transparent"
}
previous.addEventListener("click",previousImg);



//===================================Next Image Function=====================================//
function nextImg(){
    clearInterval(id);
    currentImg++;
    if(currentImg >= imageArr.length){
        currentImg=0;
    }
    showImg(currentImg);
    start.disabled=false;
    start.style.background="transparent"
}
next.addEventListener("click", nextImg);



//===================================Start Image Function=====================================//
function startImg(){
    id=setInterval(() => {
        currentImg++
        if(currentImg >= imageArr.length){
            currentImg=0;
        }
        showImg(currentImg);
    }, 1000);
    start.disabled=true;
    start.style.background="rgba(255, 255, 255, 0.5)"
};
start.addEventListener("click",startImg);



//===================================Stop Image Function=====================================//
function stopImg(){
    clearInterval(id);
    start.disabled=false;
    start.style.background="transparent"
};
stop.addEventListener("click",stopImg);

