createPlanet = () => {
    //Get user input
    let name = document.getElementById('name').value;
    let system = document.getElementById('system').value;
    let distance = document.getElementById('distance').value;
    let habitable = document.getElementById('habitable').value;

    //AJAX Logic
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            document.getElementById('return').innerHTML = data;

            //Set data into div
            //document.getElementById('createMessage').innerHTML = data.response;
        }
    };

    //Doing an HTTP call to a specific endpoint
    xhr.open('POST',`https://q7g52ase23.execute-api.us-east-1.amazonaws.com/production/create`);

    //Sending our request
    let request = {'name': name,'system':system,'distance':distance,'habitable':habitable}
    xhr.send(JSON.stringify(request));
}