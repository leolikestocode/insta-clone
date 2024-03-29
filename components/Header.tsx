import Image from "next/image"
import {
  SearchIcon,
  PlusCircleIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  UserGroupIcon,
} from "@heroicons/react/outline"
import { useContext } from "react"
import { HomeIcon } from "@heroicons/react/solid"
import { useSession, signOut, signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { Context } from "../context/ContextProvider"

function Header() {
  const { data: session } = useSession()
  const router = useRouter()
  const { setModalPost } = useContext(Context)

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}

        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid w-24 cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            alt="header logo"
            objectFit="contain"
          />
        </div>

        <div
          onClick={() => router.push("/")}
          className="relative lg:hidden flex-shrink-0 w-10 cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            alt="header logo"
            objectFit="contain"
          />
        </div>

        {/* Center */}
        <div className="max-w-sm">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" onClick={() => router.push("/")} />
          <PlusCircleIcon
            className="h-6 lg:hidden cursor-pointer"
            onClick={() => setModalPost(true)}
          />
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon
                className="navBtn"
                onClick={() => setModalPost(true)}
              />
              <HeartIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />

              <div className="h-9 w-9" onClick={() => signOut()}>
                <img
                  src={session?.user?.image}
                  alt="profile pic"
                  className="rounded-full cursor-pointer"
                />
              </div>
            </>
          ) : (
            <button onClick={() => signIn()}>Sign in</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
