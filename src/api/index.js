

const urlPosts = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = () => {
    return fetch(urlPosts,{
        method: 'GET',
       })
       .then(res => res.json()).catch(err => console.log(err));
}


export const getPostsDetails = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method: 'GET',
       })
       .then(res => res.json()).catch(err => console.log(err));
}

export const getPostsComments = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,{
        method: 'GET',
       })
       .then(res => res.json()).catch(err => console.log(err));
}