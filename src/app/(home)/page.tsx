"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-row items-center justify-center gap-[50px] mx-4 my-10">
      <div className="flex flex-col">
        <div className="flex flex-col h-max w-[480px] bg-white border border-gray-200 rounded-sm">
          <div className="flex flex-row items-center justify-between p-1">
            <div className="flex flex-row items-center justify-center">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="test"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span>nickname</span>
                <span>place</span>
              </div>
            </div>
            <div className="h-[20px] w-[50px] bg-sky-400 flex items-center justify-center rounded-sm">
              <span className="text-[12px] text-white">follow</span>
            </div>
          </div>
          <div className="overflow-hidden w-[478px] h-[478px]">
            <Image
              src="https://images.unsplash.com/photo-1717416699821-b911fa4fd252?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="story_image"
              width={478}
              height={478}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div>icons</div>
            <div>liked by</div>
            <div>comment</div>
            <div>totalcomment</div>
            <div>date</div>
            <div>add a comment</div>
          </div>
        </div>
        <div className="flex flex-col mt-10 h-max w-[480px] bg-white border border-gray-200 rounded-sm">
          <div className="flex flex-row items-center justify-between p-1">
            <div className="flex flex-row items-center justify-center">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="test"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span>nickname</span>
                <span>place</span>
              </div>
            </div>
            <div className="h-[20px] w-[50px] bg-sky-400 flex items-center justify-center rounded-sm">
              <span className="text-[12px] text-white">follow</span>
            </div>
          </div>
          <div className="overflow-hidden w-[478px] h-[478px]">
            <Image
              src="https://images.unsplash.com/photo-1717416699821-b911fa4fd252?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="story_image"
              width={478}
              height={478}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div>icons</div>
            <div>liked by</div>
            <div>comment</div>
            <div>totalcomment</div>
            <div>date</div>
            <div>add a comment</div>
          </div>
        </div>
      </div>
      <div id="user container">2</div>
    </div>
  );
}
