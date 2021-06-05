import { ReactNode } from "react";
import { Menu } from "../Menu";

interface TemplateProps {
  children: ReactNode;
}

export function Template({ children }: TemplateProps) {
  return (
    <div>
      <Menu />
      <main>{children}</main>
    </div>
  )
}