import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

import ProfilePic from "../files/profile_pic.jpeg";

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}

        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            alt="header logo"
            objectFit="contain"
          />
        </div>

        <div className="relative lg:hidden flex-shrink-0 w-10 cursor-pointer">
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
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 lg:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />

          <div className="h-9 w-9">
            <Image
              src={ProfilePic}
              alt="profile pic"
              objectFit="contain"
              className="rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
