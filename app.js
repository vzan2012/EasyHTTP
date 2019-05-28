const http = new easyHTTP();

// Get POSTS
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// Get a Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/3', function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Create a Post
const data = {
    title: 'My First Post',
    body: 'This is first post going to be updated now in a few sec...'
}

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Example of POST'); 
//         console.log(post);
//     }
// });
 
// Update a Post using PUT
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
    if(err) {
        console.log(err);
    } else {
        console.log('Example of PUT');
        console.log(post);
    }
});

// Delete a Post using DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
})