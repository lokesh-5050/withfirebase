import React from 'react'
import app from '../firebase/config'
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where, deleteDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'




const Home = () => {
    const db = getFirestore(app);
    const auth = getAuth(app);

    const schema = collection(db, "users");

    const CreateUserInDb = async () => {
        try {

            let addToAuthenticatedUser = await createUserWithEmailAndPassword(auth, "lokesh@gmail.com", "lokesh")

            const docRef = await addDoc(schema, {
                email: "lokesh@gmail.com",
                age: null,
                name: null,
                phoneNo: null
            })
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.log(error);
        }
    }

    const userLogin = async () => {
        try {
            let loggedInUser = await signInWithEmailAndPassword(auth, "lokesh@gmail.com", "lokesh")
            console.log(loggedInUser.user.uid);
        } catch (error) {
            console.log(error);
        }
    }

    const ReadUsersInDb = async () => {
        try {
            const querySnapshot = await getDocs(schema)
            querySnapshot.forEach((doc) => {
                console.log({ id: doc.id, ...doc.data() });
            })
        } catch (error) {
            console.log(error);
        }
    }

    const readSingleUserInDb = async () => {
        try {
            let docRef = doc(schema, "3o311HV7I5bvoEacZC4i")
            let reqDoc = await getDoc(docRef)

            if (reqDoc.exists()) {
                console.log("requested Data :", reqDoc.data());
            } else {
                console.log("no such document")
            }
        } catch (error) {
            console.log(error);
        }
    }

    //update data
    const updateUserData = async () => {
        try {
            let docRef = doc(schema, "3o311HV7I5bvoEacZC4i")
            let updateDoc = await setDoc(docRef, {
                email: 'lokeshzeus@gmail.com',
                age: 368436
            })
            console.log(updateDoc);
        } catch (error) {
            console.log(error);
        }
    }

    //search data through a particular query
    const getMultipleDocWithQuery = async () => {
        try {
            let q = query(schema, where("name", "==", "lokesh"));
            let MultipleDocs = await getDocs(q);
            // console.log("he");
            MultipleDocs.forEach((doc) => {
                console.log({ id: doc.id, ...doc.data() });
            })
        } catch (error) {
            console.log(error);
        }
    }

    const deleteUser = async () => {
        try {
            let docRef = doc(schema, "3o311HV7I5bvoEacZC4i")
            let removeDoc = await deleteDoc(docRef)
            console.log("deleted");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <button onClick={CreateUserInDb} className="btn-primary btn">Create User </button>
            <button onClick={userLogin} className="btn-primary btn">User Login </button>
            <button onClick={ReadUsersInDb} className="btn-primary btn">Read All Users</button>
            <button onClick={readSingleUserInDb} className="btn-primary btn">Read Single User</button>
            <button onClick={updateUserData} className="btn-primary btn">Update Single User</button>
            <button onClick={getMultipleDocWithQuery} className="btn-primary btn">Multiple Data With Query</button>
            <button onClick={deleteUser} className="btn-primary btn">Delete Doc </button>
        </>
    )
}

export default Home