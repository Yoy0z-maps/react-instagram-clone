import { FaInstagram } from "react-icons/fa";
import NavigationItem from "./NavigationItem";
import { GoHomeFill } from "react-icons/go";
import { CiHeart, CiSearch } from "react-icons/ci";
import { MdOutlineAddBox, MdOutlineExplore } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <div className="w-[240px] h-[100%] bg-white flex flex-col mt-3 ml-5 gap-10 border-r-2">
        <div className="flex flex-row items-center gap-2">
          <FaInstagram size={35} />
          <div className="w-[1px] h-[32px] bg-gray-300"></div>
          <span className="text-[24px]">Instagram</span>
        </div>
        <div className="flex flex-col gap-5 justify-start items-start">
          <NavigationItem icon={<GoHomeFill size={24} />} text="Home" />
          <NavigationItem icon={<CiSearch size={24} />} text="Search" />
          <NavigationItem
            icon={<MdOutlineExplore size={24} />}
            text="Explore"
          />
          <NavigationItem
            icon={<AiOutlineMessage size={24} />}
            text="Messages"
          />
          <NavigationItem icon={<CiHeart size={24} />} text="Notisfications" />
          <NavigationItem icon={<MdOutlineAddBox size={24} />} text="Create" />
          <NavigationItem
            icon={
              <div className="w-[24px] h-[24px] rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="test"
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
            }
            text="Profile"
          />
        </div>
        <div className="pb-3">
          <NavigationItem icon={<RxHamburgerMenu size={24} />} text="More" />
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
