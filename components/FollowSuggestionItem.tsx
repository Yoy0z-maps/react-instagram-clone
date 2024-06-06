import Image from "next/image";

export default function FollowSuggestionItem() {
  var isFollowed = false;
  var user_id = "";

  return (
    <div className="flex flex-row  h-[60px] w-[120px] p-1 items-center justify-center">
      <div className="flex flex-row gap-2 items-center justify-center">
        <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="test"
            width={45}
            height={45}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[16px]">user_id</span>
          <span className="text-[12px] text-gray-500">
            {isFollowed ? `Followed by ${user_id}` : "Suggested For You"}
          </span>
        </div>
      </div>
      <div className="text-[16px] text-blue-500">Follow</div>
    </div>
  );
}
