"use client";

import { useState } from "react";

import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";

type CopyEmailButtonProps = {
  email: string;
};

export function CopyEmailButton({
  email,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the mailto link still works.
    }
  };

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={handleCopy}
    >
      {copied ? <Check /> : <Copy />}
      {copied ? "Copied" : "Copy email"}
    </Button>
  );
}
