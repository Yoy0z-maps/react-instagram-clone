import Image from "next/image";

/*
1. <Image> 유저로부터 사진을 직접 받을 수 있게 처리해야함
2. page에서 렌더링할 때 이 item을 여러개 하기보다는 <UserStroryItemList>를 만들어서 stream에서 개수를 파악한다음 Page에눈 Itemlist를 렌더링 하는 방식
3. ItemList 렌더링할 때 최대 5개 그 이후로는 x축 scrollable하게 만들어주기
4. clickalbe한 React.ReactNode로 변환
5. 클릭했을 때 cn() 사용해서 내부변수를 사용한다음 그 다음부터는 gradient가 아니라 회색 원으로 변형하기
*/

export default function UserStoryItem({ user_id }: { user_id: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-gradient-to-r from-instart via-insvia to-insend">
        <div className="flex h-[40px] w-[40px] rounded-full bg-white items-center justify-center">
          <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="test"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div>
        <span className="text-[12px] text-gray-700">
          {user_id.length > 8 ? user_id.slice(0, 5) + "..." : user_id}
        </span>
      </div>
    </div>
  );
}
