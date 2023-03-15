//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  //const url = 'https://pokeapi.co/api/v2/pokemon/'+choice
  const url = 'https://api.artic.edu/api/v1/artworks/search?q='+choice+'&fields=id,title,image_id'
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.data[1])
        let imgurl= data.config.iiif_url
        let imgid=data.data[1].image_id
        let uri=imgurl+'/'+ imgid+'/full/843,/0/default.jpg'
        //let uri=`${imgurl}${imgid}`
        document.querySelector('img').src=uri
//mancava una '/' a fine imgurl, perso anni per nulla. posso mettere titolo, artista e cercare di fare un carosello 
// https://api.artic.edu/docs/#introduction

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}