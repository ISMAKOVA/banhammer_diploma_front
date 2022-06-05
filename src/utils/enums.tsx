export const enum MessageTypes{
    post = "post",
    picture = "picture",
    comment = "comment"
}

export interface IMarks {
    is_toxic: boolean,
    is_toxic_sexist: boolean,
    is_threat: boolean,
    is_toxic_to_person: boolean,
    is_toxic_to_group: boolean,
    is_negative: boolean,
    is_positive: boolean,
    is_neutral: boolean,
    skip: boolean
}
