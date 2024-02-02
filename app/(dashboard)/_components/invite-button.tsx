import React from "react";
import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function InviteButton() {
  return (
  <Dialog>
    <DialogTrigger asChild>
        <Button variant={"outline"}>
            <Plus  className="mr-2 w-4 h-4" />
            Invite members
        </Button>
    </DialogTrigger>
    <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
        <OrganizationProfile />
    </DialogContent>
  </Dialog>
  );
}
