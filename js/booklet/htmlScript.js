$(document).ready(function(){
    $("#book").booklet({
        width:  '80%',
        height: '100%',
        pagePadding: 0,
        closed:true,
        covers:true,
        hoverWidth:75,
        autoCenter: true
    });
    $("#bookarrow").booklet({
        width:  '80%',
        height: '100%',
        pagePadding: 0,
        closed:true,
        covers:true,
        hoverWidth:0,
        autoCenter: true,
        hoverClick: false,
        arrows: true 
    });
    $("#bookauto").booklet({
        width:  '80%',
        height: '100%',
        pagePadding: 0,
        closed:true,
        covers:true,
        hoverWidth:75,
        autoCenter: true,
        closedFrontTitle: "Start",
        closedBackTitle: "End",
        auto: true, //Pasa de página automáticamente
        delay: 2000, //Tiempo de espera (milisec)
    });    
    $("#prev").click(function () {
        $("#book").booklet("prev");
     });   
     $("#next").click(function () {
         $("#book").booklet("next");
     });   
     $("#searchButton").click(function () {
         $("#book").booklet("gotopage",$("#searchPage").val());
     });  
})