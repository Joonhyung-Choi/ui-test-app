import { Card, CardTitle } from "../ui/card";
import { ButtonContents } from "./buttoncontents";
import { ChartContents } from "./chartcontents";

import ContentsRow from "./contentsrow";
import { TableContents } from "./tablecontents";
import { Separator } from "@/components/ui/separator";

function Contents() {
  return (
    <div className="flex flex-col flex-auto gap-[20px]">
      <ContentsRow heightClass={"h-[80px]"}>
        <Card className="w-[640px] min-h-full flex flex-col items-center justify-center gap-[3px]">
          <CardTitle className="text-2xl ">오늘 가장 많이 나온 구매 포기 EU는?</CardTitle>
          <div className="flex items-center justify-center gap-[3px]">
            <div className="text-xl font-semibold">서비스 프로세스 마찰</div>
            <div className="mt-[3px]">입니다.</div>
          </div>
        </Card>
      </ContentsRow>
      <div className="h-[80px] flex justify-center gap-[40px] my-[10px]">
        <ButtonContents>
          <Card className="w-[80px] min-h-full rounded-full flex flex-col justify-center items-center gap-[5px]">
            <img src="../../../public/clock.png" width={50}></img>
          </Card>
          <div>상품 탐색 불편</div>
        </ButtonContents>
        <ButtonContents>
          <Card className="w-[80px] min-h-full rounded-full flex flex-col justify-center items-center gap-[5px]">
            <img src="../../../public/sceptic.png" width={50}></img>
          </Card>
          <div>상품 불만족</div>
        </ButtonContents>
        <ButtonContents>
          <Card className="w-[80px] min-h-full rounded-full flex flex-col justify-center items-center gap-[5px]">
            <img src="../../../public/stress.png" width={50}></img>
          </Card>
          <div>너무 많은 선택지</div>
        </ButtonContents>
        <ButtonContents>
          <Card className="w-[80px] min-h-full rounded-full flex flex-col justify-center items-center gap-[5px]">
            <img src="../../../public/dollar.png" width={50}></img>
          </Card>
          <div>비합리적 가격</div>
        </ButtonContents>
      </div>

      <ContentsRow heightClass={"h-[250px]"}>
        <Card className="w-[420px] min-h-full py-[2px]">
          <TableContents />
        </Card>
        <Card className="w-[200px] min-h-full">
          <ChartContents />
        </Card>
      </ContentsRow>
      <ContentsRow heightClass={"h-[80px]"}>
        <Card className="w-[420px] min-h-full flex ">
          <div className="w-[209px] h-full flex items-center gap-[3px] justify-center flex-col">
            <CardTitle className="text-2xl">방문객 수</CardTitle>
            <div className="flex items-center justify-center gap-[3px]">
              <div className="text-xl font-semibold">530</div>
              <div className="mt-[3px]">명</div>
            </div>
          </div>
          <Separator orientation="vertical" />
          <div className="w-[209px] h-full flex items-center gap-[3px] justify-center flex-col">
            <CardTitle className="text-2xl ">구매고객</CardTitle>
            <div className="flex items-center justify-center gap-[3px]">
              <div className="text-xl font-semibold">365</div>
              <div className="mt-[3px]">명</div>
            </div>
          </div>
        </Card>
        <Card className="w-[200px] min-h-full flex flex-col items-center justify-center gap-[3px]">
          <CardTitle className="text-2xl ">평균 체류시간</CardTitle>
          <div className="flex items-center justify-center gap-[3px]">
            <div className="text-xl font-semibold">35</div>
            <div className="mt-[3px]">분</div>
          </div>
        </Card>
      </ContentsRow>
    </div>
  );
}

export default Contents;

// 640 - 60 /4
// 580/4
// 1
