function getPic() {
    //AJAX Logic
    let xhr = new XMLHttpRequest();
    let param = document.getElementById('picSearch').value;
        
    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Present the data to the user
            presentPic(data);
        }
    };

    //Doing a HTTP to a specific endpoint
    xhr.open('POST',`https://q7g52ase23.execute-api.us-east-1.amazonaws.com/production/pics`);

    //Sending our request
    let request = {'pic': param}
    xhr.send(JSON.stringify(request));
}

function getPlanets() {
    //AJAX Logic
    let xhr = new XMLHttpRequest();
    let param = document.getElementById('picSearch').value;
        
    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Present the data to the user
            showDistance(data,param);
        }
    };

    //Doing a HTTP to a specific endpoint
    xhr.open('POST',`https://q7g52ase23.execute-api.us-east-1.amazonaws.com/production/query`);

    //Sending our request
    let request = {'searched': param}
    xhr.send(JSON.stringify(request));
}

function presentPic(data){
    document.getElementById('image').style.backgroundImage="url("+data+")";

    getPlanets();
}

function showDistance(data,param){
    document.getElementById('distance').innerHTML=data[0]["DISTANCE_FROM_EARTH"];
    document.getElementById('planetName').innerHTML=data[0]["NAME"];
}