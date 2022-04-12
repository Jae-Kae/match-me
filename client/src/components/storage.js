import { storage } from "../firebase/firebase"
import {getDownloadURL, ref, uploadBytes} from "firebase/storage"
import { updateProfile } from "firebase/auth"



const Storage = () => {}
    

export async function upload(file, currentUser, setLoading){
    const fileRef = ref(storage, currentUser.uid + '.png')
    setLoading(true)
    const snapshot = await uploadBytes(fileRef, file)
    const photoURL = await getDownloadURL(fileRef)
    
    updateProfile(currentUser, {photoURL: photoURL})
    setLoading(false);
    alert('Uploaded File!')
}


export default Storage;
