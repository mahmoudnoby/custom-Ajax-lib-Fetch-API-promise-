const http = new EasyHttp();
document.getElementById('btn-1').addEventListener('click', getPosts);
document.getElementById('btn-2').addEventListener('click', addPost);
document.getElementById('btn-3').addEventListener('click', updatePost);
document.getElementById('btn-4').addEventListener('click', deletePost);





// Get data 
function getPosts(){
  http.get('https://jsonplaceholder.typicode.com/posts')
  .then( res => {
    console.log(res);
    let response = '';
    res.forEach(element => {
      response += `<li> ${element.title}</li>`;
    });
    document.getElementById('output').innerHTML= response;
  })
  .catch(err => {
    response = `<li> ${err}</li>`
    document.getElementById('output').innerHTML= response;
  })
}

//Post Data
const data = {
  body: "New Post Body",
  title: "New post Title"
}

function addPost(){
  http.post('https://jsonplaceholder.typicode.com/posts' ,data)
  .then( res => {
    console.log(res);
    let response = '';
    response = `
      <h5>Post Added</h5>
      <li>Post ID: ${res.id}</li>
      <li>post Title:  ${res.title}</li>
      <li>Post Body:  ${res.body}</li>
    `
    document.getElementById('output').innerHTML= response;
  })
  .catch(err => {
    console.log(err);
    response = `<li> ${err}</li>`
    document.getElementById('output').innerHTML= response;
  });
};

//Put Data
const upodated = {
  body: "New Post Body",
  title: "New post Title"
}
function updatePost(){
  http.put('https://jsonplaceholder.typicode.com/posts/5' ,upodated)
  .then( res => {
    console.log(res);
    let response = '';
    response += `
      <h5>Post Updated</h5>
      <li>Post ID: ${res.id}</li>
      <li>post Title:  ${res.title}</li>
      <li>Post Body:  ${res.body}</li>
    `
    document.getElementById('output').innerHTML= response;
  })
  .catch(err => {
    response = `<li> ${err}</li>`
    document.getElementById('output').innerHTML= response;
  })
}


// Delete Post 
function deletePost(){
  http.delete('https://jsonplaceholder.typicode.com/posts/5')
  .then( res => {
    console.log(res);
    let response = '';
    response += `<li> ${res}</li>`;
    document.getElementById('output').innerHTML= response;
  })
  .catch(err => {
    response = `<li> ${err}</li>`
    document.getElementById('output').innerHTML= response;
  })
}

