import { Firebase } from '../helpers/firebase'

export default class Account {
    firebase: Firebase
    constructor(){
        this.firebase = new Firebase()
    }


    authRegisterByEmail(account: any): any{
        return this.firebase.authRegisterByEmail(account.email, account.password)
    }
    authByProviderGoogle(): any {
        return this.firebase.authRegisterByProviderGoogle()
    }
    authLoginByEmail(account: any): any{
        return this.firebase.authLoginByEmail(account.email, account.password)
    }
    /*logout(): void{

    }
    delete(): void{
        
    }*/
}
