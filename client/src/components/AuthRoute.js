
import { getAuth } from "firebase/auth";
import {useNavigate} from  "react-router-dom"
// import {firebase} from "firebase/app"


import {useAuthState} from "react-firebase-hooks/auth"
import {useCollectionData} from "react-firebase-hooks/firestore"

const auth = getAuth()
const navigate = useNavigate()