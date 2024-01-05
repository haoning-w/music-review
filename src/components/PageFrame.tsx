import { type ReactNode } from "react";

function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="h-[100vh]">
      <div className="p-6 ml-2 text-color-dark-1 text-2xl sm:p-12">
        {children}
      </div>
    </div>
  );
}

export default PageFrame;
