
export class LoginUser {
    public firstName: string;
    public lastName: string;
    public email: string;
    public UId: string;
    public jwtToken: string;
    public roles: string[];
    public isAdmin: boolean = true;
    public admin: boolean = false;
}