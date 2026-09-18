import {
  CHECKOUT_URL,
  isCheckoutConfigured,
  trackCheckoutClick,
} from "@/config/site";
import { ArrowUpRight } from "lucide-react";

import { Button } from "./ui/button";

type Props = {
  children: React.ReactNode;
  location: string;
  className?: string;
};

export function BuyButton({ children, location, className = "" }: Props) {
  if (!isCheckoutConfigured) {
    return (
      <span className="inline-flex flex-col gap-1">
        <Button
          type="button"
          disabled
          className={`btn-buy h-auto opacity-60 ${className}`}
        >
          {children}
        </Button>
        <span className="text-xs text-muted-foreground">
          Configure CHECKOUT_URL em src/config/site.ts
        </span>
      </span>
    );
  }

  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCheckoutClick(location)}
      className={`btn-buy ${className}`}
    >
      {children}
      <ArrowUpRight aria-hidden="true" className="size-4" />
    </a>
  );
}
