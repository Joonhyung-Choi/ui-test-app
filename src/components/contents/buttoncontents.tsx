"use client";
import type { ReactNode } from "react";

export const description = "A pie chart with a custom label";

export function ButtonContents({ children }: { children: ReactNode }) {
  return <div className=" flex flex-col justify-center items-center gap-[5px]">{children}</div>;
}
