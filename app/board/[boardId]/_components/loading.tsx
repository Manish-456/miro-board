import { Skeleton } from "@/components/ui/skeleton";
import { Loader } from "lucide-react";

import { Info } from "./info";
import { Toolbar } from "./toolbar";
import { Participants } from "./participants";


export function Loading() {
  return (
    <main className="h-full flex items-center justify-center w-full relative bg-neutral-100 touch-none">
        <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
      <Info.Skeleton />
      <Participants.Skeleton />
      <Toolbar.Skeleton />
    </main>
  )
}
