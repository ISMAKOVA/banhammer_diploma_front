import {$host} from "./index";
import {IMarks} from "../../utils/enums";

export const createPicture = async (text: string, publicationDate: string, url: string) =>{
    const {data} = await $host.post('/api/pictures/', {text, publicationDate, url});
    return data;
}

export const getPicture = async (pictureId: number) =>{
    const {data} = await $host.get('/api/pictures/' + pictureId);
    return data;
}

export const getPictures = async () =>{
    const {data} = await $host.get('/api/pictures' );
    return data;
}

export const deletePicture = async (pictureId: number) =>{
    const {data} = await $host.delete('/api/pictures/' + pictureId);
    return data;
}

export const updatePicture = async (pictureId: number, ) =>{
    const {data} = await $host.put('/api/pictures/' + pictureId);
    return data;
}

export const getPictureMarks = async (pictureId: number ) =>{
    const {data} = await $host.get(`/api/pictures/${pictureId}/picture_marks`);
    return data;
}
export const getAllPicturesMarks = async () =>{
    const {data} = await $host.get(`/api/pictures/all/picture_marks`);
    return data;
}
export const createPictureMark = async (pictureId: number, marks: IMarks) => {
    const {data} = await $host.post(`/api/pictures/${pictureId}/picture_marks`, marks );
    return data;
}
