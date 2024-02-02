import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export function EmptyBoards() {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image src={"/note.svg"} alt='empty' height={110} width={110} />
      <h2 className="text-2xl font-semibold mt-6">
        Create your first board!
      </h2>
      <p className='text-muted-foreground text-sm mt-2'>
      Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button size={"lg"}>Create board</Button>
      </div>
    </div>
  )
}
