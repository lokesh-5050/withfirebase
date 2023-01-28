import React from 'react'
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import app from '../firebase/config'
const Media = () => {
    const storage = getStorage(app);

    const handleFile = async (e) => {
        // let file = e.target.files[0]
        // console.log(e.target.files[0].name);
        // let ext = e.target.files[0].name.split('.').at(-1);
        // console.log(ext);

        // let modifiedName = Date.now().toString() + "." + ext
        // console.log(modifiedName);

        // const storageRef = ref(storage, modifiedName)
        // await uploadBytes(storageRef, file).then((snapshot) => {
        //     console.log("uploaded");
        // })



        // const url = await getDownloadURL(storageRef)
        // // await deleteObject(storageRef).then((removed)=>{
        // //     console.log(removed , 23);
        // // })
        // console.log(url, url);

        // let urlFromInputTesting = "https://firebasestorage.googleapis.com/v0/b/initialfirebase-cab23.appspot.com/o/1674913889382.jpg?alt=media&token=0cad69ce-51fe-4270-98bd-bba9a425485e https://firebasestorage.googleapis.com/v0/b/initialfirebase-cab23.appspot.com/o/1674913889382.jpg?alt=media&token=0cad69ce-51fe-4270-98bd-bba9a425485e"

        // const { name } = await ref(storage, urlFromInputTesting)
        // console.log(name , "name 30");

        // const refFromUrl = await ref(storage , name)

        // let deletedFromUrl = await deleteObject(refFromUrl);
        // console.log(deletedFromUrl , "35");



    }



    return (
        <>
            <div className="container text-center p-5">
                <input type="file" onChange={handleFile} name="firebase" />
            </div>
        </>

    )
}

export default Media