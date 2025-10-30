import { Bell } from "lucide-react";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";

// NOTE: shadcn/ui 컴포넌트 경로는 환경에 따라 다를 수 있습니다.
// 여기서는 일반적으로 사용되는 경로를 가정합니다.
// 실제 환경에 맞게 이 경로를 조정해야 할 수 있습니다.
// Card, CardContent 등 다른 UI 컴포넌트가 없으므로 Item만 사용합니다.

// --- 데이터 구조 정의 ---
// 모든 항목의 아이콘을 Bell Icon으로 통일합니다.
const UniformIcon = <Bell className="h-6 w-6 text-gray-600" />;

const mockData = [
  {
    id: 1,
    icon: UniformIcon,
    title: "비합리적인 가격으로 인한 D제품 포기",
    description: "17명",
  },
  {
    id: 2,
    icon: UniformIcon,
    title: "비합리적인 가격으로 인한 A제품 포기",
    description: "10명",
  },
  {
    id: 3,
    icon: UniformIcon,
    title: "비합리적인 가격으로 인한 F제품 포기",
    description: "7명",
  },
  {
    id: 4,
    icon: UniformIcon,
    title: "비합리적인 가격으로 인한 C제품 포기",
    description: "5명",
  },

  {
    id: 5,
    icon: UniformIcon,
    title: "비합리적인 가격으로 인한 E제품 포기",
    description: "5명",
  },
  {
    id: 6,
    icon: UniformIcon,
    title: "비합리적인 가격으로 인한 B제품 포기",
    description: "3명",
  },
];

/**
 * 데이터 배열을 받아 여러 Item을 렌더링하는 컴포넌트
 * @param {object[]} data - 렌더링할 항목 데이터 배열
 */
export default function ItemList({ data = mockData }) {
  // 전체 컨테이너는 flex-col로 설정하고 gap을 주어 항목들을 나열합니다.
  return (
    <div className="flex h-full flex-col">
      <h2 className="text-xl font-bold mb-2 text-gray-800 mx-[10px]">상세 목록</h2>

      {/* 데이터 배열을 map으로 순회하며 Item 컴포넌트를 렌더링 */}
      <div className="flex flex-col gap-[3px] flex-1 overflow-y-auto ">
        {data.map((item) => (
          <Item key={item.id} variant="outline" size="sm" className="w-full cursor-pointer hover:bg-gray-50 transition-colors">
            {/* 1. 아이템 미디어 (아이콘) */}
            <ItemMedia className="mt-[7px]">{item.icon}</ItemMedia>
            {/* 2. 아이템 내용 (제목 및 설명) */}
            <ItemContent className="flex flex-col">
              <ItemTitle className="text-gray-900">{item.title}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </div>
    </div>
  );
}
