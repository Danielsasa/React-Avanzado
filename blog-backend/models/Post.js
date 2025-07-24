import postsData from '../data/posts.json' with { type: "json" }

//create
export const createPost = (postData) => {
    const newPost = {
        id: postData.length > 0 ? Math.max(...postsData.map(post => post.id)) + 1 : 1,
        userId: postData.userId,
        title: postData.title,
        body: postData.body,
        ... postData
    }
    postsData.push(newPost)
    return newPost
}


//read
export const getPosts = () => {
    return postsData
}

export const getPost = (id) => {
    return postsData.find(post => post.id === parseInt(id))
}

//update


//delete