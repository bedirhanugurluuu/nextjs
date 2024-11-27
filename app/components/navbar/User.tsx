"use client"

import { User } from "@prisma/client";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface UserProps {
  currentUser: User | null | undefined
}
const User:React.FC<UserProps> = ({currentUser}) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false)

  console.log(currentUser, "currentUser")

  const menuFunc = (type:any) => {
    setOpenMenu(false)
    if(type == "logout"){
      signOut();
      router.push("/login")
    }else if(type == "register"){
      router.push("/register")
    }else{
      router.push("/login")
    }
  }

  return (
    <div className="hidden md:flex relative">
      <div onClick={() => setOpenMenu(!openMenu)} className="flex items-center gap-1 cursor-pointer">
        <AiOutlineUser size="25" />
        <div>{currentUser ? currentUser.name : "User"}</div>
      </div>
      {
        openMenu && (
          <div className="absolute w-[150px] top-10 bg-white shadow-lg right-0 p-2 rounded-md">
            {
              currentUser ? (
                <div className="space-y-1">
                  <div onClick={() => router.push('/admin')} className="text-slate-600">Admin</div>
                  <div onClick={() => menuFunc("logout")} className="text-slate-600 cursor-pointer">Logout</div>
                </div>
              ) : (
                <div className="space-y-1">
                  <div onClick={() => menuFunc("register")} className="text-slate-600 cursor-pointer">Register</div>
                  <div onClick={() => menuFunc("login")} className="text-slate-600 cursor-pointer">Login</div>
                </div>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default User