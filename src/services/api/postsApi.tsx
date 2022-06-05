import {$host} from "./index";
import {IMarks} from "../../utils/enums";

export const createPost = async (text: string, publicationDate: string) =>{
    const {data} = await $host.post('/api/posts/', {text, publicationDate});
    return data;
}

export const getPost = async (postId: number) =>{
    const {data} = await $host.get('/api/posts/' + postId);
    return data;
}

export const getPosts = async () =>{
    const {data} = await $host.get('/api/posts' );
    return data;
}

export const deletePost = async (postId: number) =>{
    const {data} = await $host.delete('/api/posts/' + postId);
    return data;
}

export const updatePost = async (postId: number, ) =>{
    const {data} = await $host.put('/api/posts/' + postId);
    return data;
}

export const getPostMarks = async (postId: number ) =>{
    const {data} = await $host.get(`/api/posts/${postId}/post_marks`);
    return data;
}
export const getAllPostsMarks = async () =>{
    const {data} = await $host.get(`/api/posts/all/post_marks`);
    return data;
}
export const createPostMark = async (postId: number, marks: IMarks) => {
    const {data} = await $host.post(`/api/posts/${postId}/post_marks`, marks );
    return data;
}
