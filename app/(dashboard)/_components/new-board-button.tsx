"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export function NewBoardButton({ orgId, disabled }: NewBoardButtonProps) {
    const router = useRouter();
    const { pending, mutate } = useApiMutation(api.board.create);

    const onClick = () => {
        if(!orgId) return;

        mutate({
            title: 'Untitled',
            orgId
        }).then((id) => {
            toast.success("Board created!");            
            router.push(`/board/${id}`)
        }).catch(() => {
            toast.error("Failed to create board!")
        })
    }

  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 flex-col rounded-lg hover:bg-blue-800 flex items-center justify-center py-6",
        disabled && "opacity-75 hover:bg-blue-600"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1"/>
      <p className="text-xs text-white font-light">New board</p>
    </button>
  );
}
