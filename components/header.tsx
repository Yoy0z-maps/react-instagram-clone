import { FaInstagram } from "react-icons/fa";
import { ImCompass2 } from "react-icons/im";
import { IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { TiCompass } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="relative overflow-y-auto w-full y-full">
      <section className="sticky top-0 left-0 w-full h-[64px] bg-white flex flex-row items-center  justify-evenly shadow-2xl">
        <div className="flex flex-row items-center gap-2">
          <FaInstagram size={35} />
          <div className="w-[1px] h-[32px] bg-gray-300" />
          <span className="text-[24px]">Instagram</span>
        </div>
        <article className="flex flex-row items-center h-[42px] min-w-[480px]  bg-[rgba(0,0,0,0.14)]">
          <div className="flex flex-row">
            <IoIosSearch />
            <span>Search...</span>
          </div>
          <input type="text" className="h-full w-full bg-transparent" />
        </article>
        <div className="flex flex-row gap-[30px] items-center justify-center">
          <ImCompass2 size={26} />
          <IoMdHeartEmpty size={26} />
          <VscAccount size={26} />
        </div>
      </section>
      <section>{children}</section>
    </header>
  );
}
