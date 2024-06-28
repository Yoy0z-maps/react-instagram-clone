"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import UserStoryItem from "../../../components/UserStoryItem";
import FollowSuggestionItem from "../../../components/FollowSuggestionItem";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-row items-start justify-center gap-[45px] mx-4 my-10">
      <div className="flex flex-col">
        <div className="flex flex-row h-[120px] w-[480px] bg-white border border-gray-200 rounded-sm items-center justify-center gap-4">
          <UserStoryItem user_id="hanyohanyochamchimayo" />
          <UserStoryItem user_id="zo_glass" />
          {/* 적용될 기술 스택 1. Stack 가장 밑에 그라데이션(애는 클릭 후에는 회색 원으로 변경), 그다음 하얀원 공백주는 느낌을 위해서, 그다음 프로필 사진, 밑에 아이디 텍스트는 특정 width 넘어가면 자동으로 ...으로 생략을 하기*/}
        </div>
        <div className="flex flex-col mt-7 h-max w-[480px] bg-white border border-gray-200 rounded-sm">
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
        <div className="flex flex-col mt-7 h-max w-[480px] bg-white border border-gray-200 rounded-sm">
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
      <div
        id="user container"
        className="flex flex-col items-start justify-center"
      >
        <div className="flex flex-row items-center justify-between w-full mb-2">
          <span className="text-gray-500">Suggestions For You</span>
          <span className="text-[14px] font-semibold text-black">See All</span>
        </div>
        <FollowSuggestionItem />
        <FollowSuggestionItem />
        <FollowSuggestionItem />
        <FollowSuggestionItem />
        <FollowSuggestionItem />
        <div className="flex flex-col items-start justify-start text-gray-300 gap-6 text-[12px] mt-6">
          <span>
            About · Help · Press · API · Jobs · Privacy · Terms ·<br></br>
            Locations · Language
          </span>
          <span>@ 2022 INSTAGRAM FROM META</span>
        </div>
      </div>
    </div>
  );
}
