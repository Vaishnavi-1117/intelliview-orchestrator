"use client";
import { cn } from "@/lib/utils";

/**
 * Skeleton with a moving shimmer gradient for a more polished loading state.
 */
export function Shimmer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-bg-card",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.6s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/[0.04] before:to-transparent",
        className
      )}
    />
  );
}

// Inject keyframes once on the client
if (typeof document !== "undefined" && !document.getElementById("shimmer-keyframes")) {
  const style = document.createElement("style");
  style.id = "shimmer-keyframes";
  style.textContent = "@keyframes shimmer { 100% { transform: translateX(100%); } }";
  document.head.appendChild(style);
}
