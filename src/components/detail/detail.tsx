import { Card, CardTitle } from "../ui/card";
import { ButtonContents } from "../contents//buttoncontents";
import { ChartContents } from "../contents/chartcontents";

import ContentsRow from "../contents/contentsrow";
import ItemList from "./itemlist";
// import { TableContents } from "../contents/tablecontents";
// import { Separator } from "@/components/ui/separator";

function Detail() {
  return (
    <div className="flex flex-col flex-auto gap-[20px]">
      <Card className="w-[640px] h-[200px] flex flex-col items-center justify-center gap-[10px]">
        <CardTitle className="text-2xl ">오늘 [비합리적 가격] 카테고리에서 가장 많은 구매 포기 품목은?</CardTitle>
        <div className="flex items-center justify-center gap-[3px]">
          <div className="text-xl font-semibold">D 제품{"(47명 중 17명)"}</div>
          <div className="mt-[3px]">입니다.</div>
        </div>
      </Card>
      <Card className="w-[640px] h-[420px] py-[10px] px-[1px]">
        <ItemList></ItemList>
      </Card>
    </div>
  );
}

export default Detail;
