import { Firebase } from '../helpers/firebase'
interface Agroquimico{
    name: string,
    type: string,
}
class Agroquimicos {
    agroquimico: Agroquimico;
    firebase: Firebase
    collection: string = 'agroquimicos'
    constructor(){
        this.firebase = new Firebase()
        this.agroquimico = {name: '', type: ''}
    }
    register(payload: any){
        this.firebase.registerDocument(this.collection, payload)
    }
    getAll(){
        return this.firebase.getCollection(this.collection)
    }
}

export default new Agroquimicos