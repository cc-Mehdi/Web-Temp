(function(){
    reportWindowSize();
    window.addEventListener("resize", reportWindowSize);
})();


function reportWindowSize(){
    document.getElementById("homePage").style = "height: "+window.innerHeight+"px;";
}

