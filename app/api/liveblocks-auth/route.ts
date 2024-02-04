import { api } from "@/convex/_generated/api";
import { auth, currentUser } from "@clerk/nextjs";
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";



const liveblocks = new Liveblocks({
  secret: "sk_dev_L1Sh6NrW-2sw_p8o-zYBlnu22Wsa7dvYiIEXqq0j__Yci9zQgbdAwePSjXDYCYKO",
});

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(request: Request) {
 const authorization =  auth();
 const user = await currentUser()
 
 if(!user || !authorization) return new Response("Unauthorized", {
    status: 400
 });

 const { room } = await request.json();
 
 const board = await convex.query(api.board.get, {
    id: room
 });

 if(board?.orgId !== authorization.orgId){
    return new Response("Unauthorized", {
        status: 400
    })
 }

 const userInfo = {
    name: user.firstName || "Teammate",
    picture: user.imageUrl!
 }

 const session = liveblocks.prepareSession(user.id, { userInfo });

 if(room){
    session.allow(room, session.FULL_ACCESS)
 }

 const { status, body } = await session.authorize()


 return new Response(body, { status });

}