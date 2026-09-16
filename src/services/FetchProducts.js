import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export async function FetchProducts() {
  const productsCollection = collection(db, "products");
  const productsSnapshot = await getDocs(productsCollection);

  return productsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function CreateSells(sell) {
  const sellsCollection = collection(db, "sells");

  const sellData = {
    ...sell,
    status: "approved",
  };

  const newSell = await addDoc(sellsCollection, sellData);

  return {
    id: newSell.id,
    ...sellData,
  };
}
