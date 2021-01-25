export class LocalStorageUtils {

    public getUser() {
        return JSON.parse(localStorage.getItem('cubo.user'));
    }

    public getUserToken(): string {
        return localStorage.getItem('cubo.token');
    }

    public saveUserToken(token: string) {
        localStorage.setItem('cubo.token', token);
    }

    public saveUserLocalData(response: any) {
        this.saveUserToken(response.accessToken);
        this.saveUser(response.userToken);
    }

    public cleanUserLocalData() {
        localStorage.removeItem('cubo.token');
        localStorage.removeItem('cubo.user');
    }

    public saveUser(user: string) {
        localStorage.setItem('cubo.user', JSON.stringify(user));
    }
}