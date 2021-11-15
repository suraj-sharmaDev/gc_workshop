import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from 'utils/Firebase';

export const getProducts = async() => {
    try {
        const productsCol = collection(db, 'products');
        const productSnapShot = await getDocs(productsCol);
        const productList = productSnapShot.docs.map(doc => doc.data());
        return productList;        
    } catch (error) {
        return false;
    }
}