"use client";

import type { CSSProperties } from "react";
import type { ResolvedProspect } from "@/prospects/types";
import { QuickConsultModal } from "@/components/quiz/QuickConsultModal";

type FloatingActionsProps = {
  prospect: ResolvedProspect;
};

type FloatingActionsStyle = CSSProperties & {
  "--chatbot-delay": string;
};

export function FloatingActions({ prospect }: FloatingActionsProps) {
  if (!prospect.quickConsult.enabled || prospect.enabledServices.length === 0) {
    return null;
  }

  return (
    <div
      className="floating-actions"
      style={{ "--chatbot-delay": `${Math.max(0, prospect.chatbot.showAfterSeconds)}s` } as FloatingActionsStyle}
    >
      <QuickConsultModal prospect={prospect} />
    </div>
  );
}
