'use client'
import Image from "next/image";
import BackgroundVideo from "./backgroundAnimation/backgroundVideo";
import { useState } from "react";

export default function Home() {

  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  const test = () => {
    window.alert("HIIII")
  }
  return (
    <div className="h-screen w-screen flex items-center justify-center">
    <div className="main absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="email" name="email" placeholder="Email" required />
            <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={loginPassword} 
                    onChange={(e) => setLoginPassword(e.target.value)} 
                    required 
                />
            {/* <button>Login</button> */}
            <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 mt-6">
              <div className="heart">
                  <div onClick={test} className="heartbeat">❤️</div>
                  <div className="heartecho">❤️</div>
              </div>
          </div>
        </form>
      </div>
      <div className="login">
        <form className="text-cherryRed">
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="txt" placeholder="User name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="phone" placeholder="Phone Number" required />
            <input type="password" name="pswd" placeholder="Password" required />
            {/* <button>Sign up</button> */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 mt-8">
              <div className="heart">
                  <div onClick={test} className="heartbeat">❤️</div>
                  <div className="heartecho">❤️</div>
              </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  );
}