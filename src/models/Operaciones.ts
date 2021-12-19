import { Firebase } from '../helpers/firebase'
interface Operacion{
    name: string,
    type: string,
}
class Operaciones {
    operacion: Operacion;
    firebase: Firebase
    collection: string = 'operaciones'
    constructor(){
        this.firebase = new Firebase()
        this.operacion = {name: '', type: ''}
    }
    register(payload: any){
        this.firebase.registerDocument(this.collection, payload)
    }
    getAll(){
        return this.firebase.getCollection(this.collection)
    }
}

export default new Operaciones