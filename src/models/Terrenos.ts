import { Firebase } from '../helpers/firebase'
interface Terreno{
    name: string,
    number: string,
    detail: string
}
class Terrenos {
    terreno: Terreno;
    firebase: Firebase
    collection: string = 'terrenos'
    constructor(){
        this.firebase = new Firebase()
        this.terreno = {name: '', number: '', detail: ''}
    }
    register(payload: any){
        this.firebase.registerDocument(this.collection, payload)
    }
    getAll(){
        return this.firebase.getCollection(this.collection)
    }
}

export default new Terrenos