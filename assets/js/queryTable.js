//Search for planets
function getPlanets() {
    //AJAX Logic
    let xhr = new XMLHttpRequest();
    document.getElementById('confirm').innerHTML='';
    let param = document.getElementById('searchParam').value;
    if(param == ""){
        param = "all"
    }
        
    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            if(data.length==0){
                document.getElementById('confirm').innerHTML='No Results Found.';
            }

            //Present the data to the user
            presentPlanet(data);
        }
    };

    //Doing a HTTP to a specific endpoint
    xhr.open('POST',`https://q7g52ase23.execute-api.us-east-1.amazonaws.com/production/query`);

    //Sending our request
    let request = {'searched': param}
    xhr.send(JSON.stringify(request));
}

function presentPlanet(data) {
    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    table.style = "border: 1px solid black;border-collapse: collapse;height: 50px;width: 100%;border-spacing: 10px;padding: 15px;";

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.style = "border: 1px solid black";
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < data.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = data[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("planetTable");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

//Present all EC2
// function presentPlanet(data) {
//     //Get customer list node
//     let searchTable = document.getElementById("ec2List");

//     //Clean customer list
//     searchTable.innerHTML = "";

//     //Iterate over all EC2
//     data.forEach((planet) => {
//         //Creating node of <li>
//         //let ec2Node = document.createElement("li");

//         //Add class for styling <li class="something">
//         //You can access any HTML fields (id might be useful)
//         //ec2Node.className = "list-group-item";

//         //Creating innerHTML object, adding customer name to it.
//         //<li class="something">[creating this object]</li>
//         let ec2NodeText = document.createTextNode(`${planet.id} => ${planet.name}`);

//         //Append innerHTML to the customerNode
//         //<li class="something">Perez, Julio</li>
//         ec2Node.appendChild(ec2NodeText);

//         //Finally, we append the new customerNode to the customerList
//         //<ul id="ec2List">
//         //<li class="something">Something</li>
//         //</ul>
//         ec2List.appendChild(ec2Node);
//     });
// }