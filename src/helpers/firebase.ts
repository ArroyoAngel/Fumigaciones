import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, setDoc, collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWUuDcMMvMOOwDa9ewwWtuUiQcHqg8dyI",
    authDomain: "gerico-49856.firebaseapp.com",
    databaseURL: "https://gerico-49856.firebaseio.com",
    projectId: "gerico-49856",
    storageBucket: "gerico-49856.appspot.com",
    messagingSenderId: "866400763654",
    appId: "1:866400763654:web:3393455a777108bfeba887",
    measurementId: "G-CC8362Y92R"
};

export class Firebase {
    app: any
    db: any
    auth: any
    provider: any
    constructor(){
        this.app = initializeApp(firebaseConfig)
        this.db = getFirestore(this.app)
        this.auth = getAuth()
        this.provider = new GoogleAuthProvider()
    }

    async registerDocument(nameCollection: string, payload: any, uid?: string): Promise<void>{
        try {
            if(uid){
                await setDoc(doc(this.db, nameCollection, uid), payload)
            }else{
                await addDoc(collection(this.db, nameCollection), payload).then(e=>{
                    setDoc(doc(this.db, nameCollection, e.id), { id: e.id }, { merge: true });
                });
            }
        }catch(e){
            console.error("Error adding document: ", e);
        }
    }
    async getCollection(nameCollection: string): Promise<Array<any>>{
        const querySnapshot = await getDocs(collection(this.db, nameCollection));
        const result: any = []
        querySnapshot.forEach((doc) => {
            result.push({uid: doc.id, ...doc.data()})
        });
        return result
    }
    async getDocumentByUid(nameCollection: string): Promise<any>{
        const docRef = await doc(this.db, nameCollection, "23fj6evyO6eGOd169yjTYIIWwFH3");
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            console.log("Document data:", docSnap.data());
        }else{
            console.log(nameCollection+" is empty")
        }
        return null
    }
    async updateDocument(nameCollection: string, payload: any, uid: string): Promise<void>{
        const result = await updateDoc(doc(this.db, nameCollection, uid), payload);
        return result
    }

/*
    AUTHTENTICATION
    *   BY EMAIL
    *   BY GOOGLE
    *   BY PHONE NUMBER
    * 
    *   LOGIN
    *   LOGOUT
*/
    async authRegisterByEmail(email: string, password: string): Promise<any>{
        let credential: any = null
        await createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
            console.log("Add success")
            credential = userCredential.user
        })
        .catch((error) => {
            console.log("Error adding user")
        });
        
        localStorage.setItem('user', JSON.stringify(credential))
        return credential
    }
    
    async authRegisterByProviderGoogle(): Promise<any>{
        let credential: any = null
        await signInWithPopup(this.auth, this.provider)
        .then((userCredential) => {
            console.log("Add success")
            credential = userCredential.user
        })
        .catch((error) => {
            console.log("Error adding user")
        });
        
        localStorage.setItem('user', JSON.stringify(credential))
        return credential
    }
    async authLoginByEmail(email: string, password: string): Promise<any>{
        await signInWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
            console.log("Add success")
        })
        .catch((error) => {
            console.log("Error adding user")
        });
    }
}