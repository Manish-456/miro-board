import React from 'react'
import { Canvas } from './_components/canvas';
import { Room } from '@/components/room';
import { Loading } from './_components/loading';

interface BoardIdPageProps {
    params: {
        boardId: string;
    }
}

export default function BoardIdPage({ 
    params
 }: BoardIdPageProps) {

  return (
    <Room fallback={<Loading />} roomId={params.boardId}>
   <Canvas 
   boardId={params.boardId}
   />
   </Room>
  )
}
