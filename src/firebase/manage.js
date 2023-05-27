import {
    collection,
        addDoc
} from "firebase/firestore";
import { db } from "./firebase";

const itemsCollection = collection(db,"reservaciones")
export const createItem = (objeto)=>{return addDoc(itemsCollection, objeto).id}
