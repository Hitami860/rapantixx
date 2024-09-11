fetch('chanson.json')
  .then(response => response.json()
  )
  .then(data => {
    console.log(data);

    document.getElementById("anneeSortie").innerText = 'Annee de sortie : ' + data[0]["sortie"];
    document.getElementById("lyrics").innerText = data[0]["parole"];
    let str = data[0]["parole"];
    data[0]["parole"]= str.split(' ');


  })
  .catch(error => {
    console.error(error);
  });




function startGame() {

}

