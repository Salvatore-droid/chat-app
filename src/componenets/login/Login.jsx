import { useState } from "react";
// import { toast } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
import "./login.css";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
// import { auth, db } from "../../lib/firebase"
// import { doc, setDoc } from "firebase/firestore"
// import upload from "../../lib/upload"


const Login = () => {
    const [avatar, setAvatar] = useState({
        file:null,
        url:''
    });

    const handleAvatar = e =>{
        if(e.target.files[0]){
            setAvatar({
                file:e.target.files[0],
                url:URL.createObjectURL(e.target.files[0])
            })
        }
    }

    return(
        <div className="login">
                <div className="item">
                    <h2>Welcome back</h2>
                    <form>
                        <input type="text" placeholder="email" name="email"/>
                        <input type="password" placeholder="password" name="password" />
                        <button>Sign in</button>
                    </form>
                </div>
                <div className="separator"></div>
                <div className="item">
                    <h2>Create an Account</h2>
                    <form>
                        <label htmlFor="file"> 
                            <img src="./avatar.png" alt="" />
                            Upload an image
                        </label>
                        <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>  
                        <input type="text" placeholder="Username" name="username"/>
                        <input type="text" placeholder="email" name="email"/>
                        <input type="password" placeholder="Password" name="password"/>
                        <button>Sign up</button>
                    </form>
                </div>
        </div>
    )
}

export default Login