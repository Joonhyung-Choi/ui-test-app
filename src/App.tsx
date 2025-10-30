import { Card } from "@/components/ui/card";
import Detail from "./components/detail/detail";
import Contents from "./components/contents/contents";

function App() {
  return (
    <div className="min-h-screen min-w-full flex flex-col items-center ">
      {/* <div className="w-[700px] h-screen px-[30px] py-[15px] flex flex-col">
        <Card className="h-[100px] flex items-center justify-center font-semibold mb-[20px]">
          <h1 className="text-2xl">EU 안암점 리포트</h1>
        </Card>
        <Contents />
      </div> */}
      <div className="w-[700px] h-screen px-[30px] py-[15px] flex flex-col">
        <Card className="h-[100px] flex items-center justify-center font-semibold mb-[20px]">
          <h1 className="text-2xl">비합리적 가격 세부사항</h1>
        </Card>
        <Detail />
      </div>
    </div>
  );
}

export default App;
