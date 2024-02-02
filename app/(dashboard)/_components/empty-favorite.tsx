import Image from 'next/image'
import React from 'react'

export function EmptyFavorite() {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image src={"/empty-favorites.svg"} alt='empty' height={140} width={140} />
      <h2 className="text-2xl font-semibold mt-6">
        No favorite boards!
      </h2>
      <p className='text-muted-foreground text-sm mt-2'>
      Try favoriting some boards to see them here.
      </p>
    </div>
  )
}
