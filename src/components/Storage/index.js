
    function initRatings(){
      localStorage.setItem('ratings', JSON.stringify(
        [{id:1, value:1}, {id:2, value:1}]
        )
      );
    }

    function setRatings(ratings){
      localStorage.setItem('ratings', JSON.stringify(ratings));
    }

    function loadRatings(){
      let ratings;
      
     const getItems = () => {
        return JSON.parse(localStorage.getItem('ratings')) 
      }

      
      ratings = getItems()
      if (ratings == null) {
        initRatings()
        ratings = getItems()
      }
      return ratings
   }

   function initCollections(){

      const colecciones = {
        "Peliculas": [{
            "Coleccion": "PruebaCol001",
            "Pelis": [{
                "Codigo": "05592",
                "Titulo": "Titulo 001"
              },
              {
                "Codigo": "05292",
                "Titulo": "Titulo 002"
              },
              {
                "Codigo": "03592",
                "Titulo": "Titulo 003"
              }
            ]
          },
          {
            "Coleccion": "PruebaCol002",
            "Pelis": [{
                "Codigo": "05592",
                "Titulo": "Titulo 001"
              },
              {
                "Codigo": "05292",
                "Titulo": "Titulo 002"
              },
              {
                "Codigo": "03592",
                "Titulo": "Titulo 003"
              }
            ]
          }
        ]
      }
      localStorage.setItem('collections', JSON.stringify(colecciones))
  }

   function setCollections(collections){
    localStorage.setItem('collections', JSON.stringify(collections));
   }

   function loadCollections(){
    let collections;
    
   const getItems = () => {
      return JSON.parse(localStorage.getItem('collections')) 
    }

    collections = getItems()
    if (collections == null) {
      initCollections()
      collections = getItems()
    }
    return collections
 }

 function removeItemColl(item) {
   let colls = loadCollections();

   let pelis = colls.Peliculas;
   console.log('pelis:', pelis);
   console.log('item:', item);

 let nuevasPelis = pelis.filter(function( pelis ) {
  return pelis.Coleccion !== item;
});

console.log('nuevaspelis: ', nuevasPelis)

  setCollections({Peliculas: nuevasPelis});

 }

  export default Storage = {
    initRatings,
    setRatings,
    loadRatings,
    initCollections,
    setCollections,
    loadCollections,
    removeItemColl
  } ;
  