export enum UserRoles {
    admin = "admin",
    expert = "expert",
    researcher = "researcher",
}

export const userRoles = {
    admin: [String(UserRoles.admin)],
    expert: [String(UserRoles.expert), String(UserRoles.admin)],
    researcher: [String(UserRoles.researcher), String(UserRoles.admin)],
    all: [
        String(UserRoles.admin),
        String(UserRoles.expert),
        String(UserRoles.researcher),
    ]
};
