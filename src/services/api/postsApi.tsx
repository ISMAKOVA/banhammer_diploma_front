import {$host} from "./index";

export const createPost = async (text: string, publicationDate: string) =>{
    const {data} = await $host.post('/posts/post/', {text, publicationDate});
    return data;
}

export const getPost = async (postId: number) =>{
    const {data} = await $host.get('/posts/post/' + postId);
    return data;
}

export const getPosts = async () =>{
    const {data} = await $host.get('/posts/post/all' );
    return data;
}

export const deletePost = async (postId: number) =>{
    const {data} = await $host.delete('/posts/post/' + postId);
    return data;
}


