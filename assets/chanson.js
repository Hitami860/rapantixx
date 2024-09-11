let data =[]

fetch('chanson.json')
  .then(response => response.json()

  )

  .then(data => {

    console.log(data);


    document.getElementById("anneeSortie").innerText = 'Annee de sortie : ' + data[0]["sortie"];
    document.getElementById("lyrics").innerText = data[0]["parole"];
    let str = data[0]["parole"];
    data[0]["parole"] = str.split(' ');

    
    let mot = data[0]["parole"] = str.split(' ');
    console.log(mot);


  })
  .catch(error => {
    console.error(error);
  });


function getRandomItem() {

    return randomChanson = Math.floor(Math.random() * data.length);

}

console.log(getRandomItem);


function startGame() {

}

