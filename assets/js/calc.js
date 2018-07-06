function calc(){
    let speed=parseInt(document.getElementById('speed').value);
    let distance=parseInt(document.getElementById('distance').innerHTML);

    time=((distance*1000000000)/speed)/86400;

    document.getElementById('days').innerHTML="It would take "+time+" days to travel.";
}