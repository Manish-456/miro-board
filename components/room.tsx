"use client";

import { ReactNode } from "react";
import { RoomProvider } from "@/liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";

interface RoomProps {
    roomId: string;
    children: ReactNode;
    fallback: NonNullable<ReactNode> | null;
}

export function Room({
    roomId,
    children,
    fallback
}: RoomProps){
    return (
        <RoomProvider id={roomId} initialPresence={{}}>
            <ClientSideSuspense fallback={fallback}>
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    )
}