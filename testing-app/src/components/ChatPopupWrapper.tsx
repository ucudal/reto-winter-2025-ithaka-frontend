'use client'; 

import { usePathname } from "next/navigation";
import { ChatPopup } from 'entrepreneur-ai-assistant';
import { useMemo } from "react";

export default function ChatPopupWrapper() {
  const pathname = usePathname();

  const pageName = useMemo(() => {
    if (pathname === "/faq") return "FAQPage";
    if (pathname === "/") return "HomePage";
    return "unknown";
  }, [pathname]);

  return <ChatPopup apiUrl="/api/copilotkit" pageName={pageName} />;
}
