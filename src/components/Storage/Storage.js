

/*localStorage.setItem('discoverResults', JSON.stringify([]));
localStorage.setItem('searchResults', JSON.stringify([]));
localStorage.setItem('collections', JSON.stringify([{id : 0, name : 'Prueba', movies : colPrueba}]));
*/
  

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


  
  export default Storage = {
    initRatings,
    setRatings,
    loadRatings
  } ;
  