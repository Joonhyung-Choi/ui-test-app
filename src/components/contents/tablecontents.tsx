import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
const invoices = [
  {
    invoice: "비합리적인 가격",
    paymentStatus: "Paid",
    totalAmount: "47명",
    paymentMethod: "높은 가격",
  },
  {
    invoice: "상품 불만족",
    paymentStatus: "Pending",
    totalAmount: "44명",
    paymentMethod: "스타일 불만",
  },
  {
    invoice: "상품 탐색의 불편",
    paymentStatus: "Paid",
    totalAmount: "35명",
    paymentMethod: "서비스 제공 시간 지연",
  },
  {
    invoice: "상품 탐색의 불편",
    paymentStatus: "",
    totalAmount: "22명",
    paymentMethod: "동선의 불편",
  },
  {
    invoice: "과도한 선택지",
    paymentStatus: "Unpaid",
    totalAmount: "17명",
    paymentMethod: "결정 피로 압박",
  },
];
export function TableContents() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>카테고리</TableHead>
          <TableHead>구매 포기 이유</TableHead>
          <TableHead className="text-right">인원</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>

            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
