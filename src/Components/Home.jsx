import React from 'react'
import app from '../firebase/config'
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
const Home = () => {
    const db = getFirestore(app);

    const schema = collection(db,  "users");
    const CreateUserInDb = async() => {
        try {
            const docRef = await addDoc(schema , {
                name:"lokesh",
                age:19
            })
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.log(error);
        }
    }


    const ReadUserInDb = async()=>{
        try {
            const querySnapshot = await getDocs(schema)
             querySnapshot.forEach((doc)=>{
                console.log({id:doc.id , ...doc.data()});
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <button onClick={CreateUserInDb} className="btn-primary btn">Create User</button>
            <button onClick={ReadUserInDb} className="btn-primary btn">Read User</button>
        </>
    )
}

export default Home