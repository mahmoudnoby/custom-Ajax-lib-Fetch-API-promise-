
/** 
 * Custom Easy HTTP Library 
 * Library for making http requests using fetch api 
 * @version 2.0.0
 * @author Mahmoud Noby
 * @license MIT
 * 
 * 
*/

class EasyHttp {
  // Get Data
  get(url) {   
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(response => response.json())
      .then(  res =>resolve(res))
      .catch(err => reject(err))
    }); 
  }

  //Post Data
  post(url, data) {
    return new Promise( (resolve, reject) => {
      fetch(url, {
        method:'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then( (response) => response.json())
      .then ((response) => resolve(response))
      .catch( err => reject(err))
    });
  }

    //Post Data
    put(url, data) {
      return new Promise( (resolve, reject) => {
        fetch(url, {
          method:'PUT',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then( (response) => response.json())
        .then ((response) => resolve(response))
        .catch( err => reject(err))
      });
    }

  // Get Data
  delete(url) {   
    return new Promise((resolve, reject) => {
      fetch(url, {
        method:'DELETE',
        headers: {
          "Content-type": "application/json"
        },
      })
      .then(response => response.json())
      .then(  () =>resolve("Post Deleted.."))
      .catch(err => reject(err))
    }); 
  }

}