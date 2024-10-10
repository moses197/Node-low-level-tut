const posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
]

const getPost = () => {
    return posts
}

export const getPostLength = () => posts.length;

export default getPost;