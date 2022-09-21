import Image from "next/image";
import{
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline";

import {signIn, signOut, useSession} from "next-auth/react"
import Router from "next/dist/next-server/server/router";

function Header(){
    const{ data: session } = useSession();
 
    return(
        <header>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className = "mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                    onClick={() => Router.push("/")}
                    src = "https://links.papareact.com/f90"
                    width ={150}
                    height={40}
                    objectFit="contain"
                    className="cursor-pointer"
                    />
                </div>
                <div className = "hidden sm:flex items-center h-10 rounded-md cursor-pointer flex-grow bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text" />
                    <SearchIcon className = "h-12 p-4"/>
                </div>
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="cursor-pointer link">
                        <p className="hover:underline">
                            {session ? `Hello, ${session.user.name}` : "Sign In"}
                        </p>
                        <p className="font-extrabold md:text-xs">Account & list</p>
                    </div>

                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-xs">& Orders</p>
                    </div>

                    <div onClick={() => Router.push("/checkout")} className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                            0
                        </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-xs mt">Basket</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}
export default Header