window.onload = () => {
    // //Prime Lambda Event Listener
    // document.getElementById('calculate').addEventListener('click', primer)

    // //Create EC2 Lambda Event Listener
    // document.getElementById('create').addEventListener('click', createPlanet);

    //Get all EC2s Listener
    document.getElementById('searchButton').addEventListener('click', getPlanets);
}