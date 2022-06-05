import {$host} from "./index";
import {IMarks} from "../../utils/enums";

export const createComment = async (text: string, publicationDate: string) =>{
    const {data} = await $host.post('/api/comments/', {text, publicationDate});
    return data;
}

export const getComment = async (commentId: number) =>{
    const {data} = await $host.get('/api/comments/' + commentId);
    return data;
}

export const getComments = async () =>{
    const {data} = await $host.get('/api/comments' );
    return data;
}

export const deleteComment = async (commentId: number) =>{
    const {data} = await $host.delete('/api/comments/' + commentId);
    return data;
}

export const updateComment = async (commentId: number, ) =>{
    const {data} = await $host.put('/api/comments/' + commentId);
    return data;
}

export const getCommentMarks = async (commentId: number ) =>{
    const {data} = await $host.get(`/api/comments/${commentId}/comment_marks`);
    return data;
}
export const getAllCommentsMarks = async () =>{
    const {data} = await $host.get(`/api/comments/all/comment_marks`);
    return data;
}
export const createCommentMark = async (commentId: number, marks: IMarks) => {
    const {data} = await $host.post(`/api/comments/${commentId}/comment_marks`, marks );
    return data;
}
