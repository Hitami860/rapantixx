let data = []

fetch('chanson.json')
  .then(response => response.json()

  )
  .then(data => {

    console.log(data);

    let number = getRandomItem(data);

    document.getElementById("anneeSortie").innerText = 'Annee de sortie : ' + data[number]["sortie"];
    // document.getElementById("lyrics").innerText = data[number]["parole"];

    let mot = data[number]["parole"].split(' ');

    console.log(mot);

    mot.forEach(datas => {

      let motSpan = document.createElement("span");
      document.getElementById("lyrics");
      motSpan.setAttribute("class","unselectable",)
      motSpan.style.backgroundColor = "black";
      motSpan.style.marginRight = "6px";
      motSpan.innerText = datas;
      document.body.appendChild(motSpan);

      console.log(motSpan);
    });

  })
  .catch(error => {
    console.error(error);
  });




function getRandomItem(data) {

  return Math.floor(Math.random() * data.length);

}




function checkWord() {

  let motUser = document.getElementById('userMot').value.trim().toLowerCase();
  let checkBtn = document.getElementById('btntrouve').addEventListener('click', () => {
    if (!motUser) {
        alert('Veuillez ecrire dun mot dans le champs requis !');
        return;
    }

}

)};




function checkTitre() {

 let userTitre =  document.getElementById('titreChanson').value.trim().toLowerCase();
 let btntrouve = document.getElementById('btntrouve').addEventListener('click', () => {
      if (!userTitre) {
          alert('Veuillez ecrire un titre de chanson !');
          return;
      }

}

)};
