import type { ReactNode } from "react";

function ContentsRow({ heightClass, children }: { heightClass: string; children: ReactNode }) {
  return <div className={`${heightClass} w-full flex justify-between`}>{children}</div>;
}

export default ContentsRow;
