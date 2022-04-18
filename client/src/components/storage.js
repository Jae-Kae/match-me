import { storage } from "../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Storage = () => {};

export const upload = async (file, currentUser, setLoading) => {
  const fileRef = ref(storage, currentUser.uid);
  setLoading(true);
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, { photoURL: photoURL });

  //collection
  console.log("PHOTOURL", photoURL);
  console.log("stor USER:", currentUser);
  const userRef = doc(db, "users", currentUser.uid);
  console.log("USER REF", userRef);
  await updateDoc(userRef, {
    photoURL: photoURL,
    displayName: currentUser.displayName,
  });

  setLoading(false);
  alert("Uploaded File!");
};

export default Storage;
