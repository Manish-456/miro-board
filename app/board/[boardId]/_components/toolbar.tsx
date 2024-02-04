import React from 'react'

export function Toolbar() {
  return (
    <div className='absolute h-12 top-[50%] -translate-y-[50%] left-2  flex flex-col gap-y-4 '>
        <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <div>
            Pencil
        </div>
        <div>
            Square
        </div>
        <div>
            Circle
        </div>
        <div>
            Ellipsis
        </div>
        </div>
        <div className='bg-white rounded-md p-1.5 flex flex-col items-center shadow-md'>
         <div>
            Undo
         </div>
         <div>
            Redo
         </div>
        </div>
    </div>
  )
}

export function ToolbarSkeleton(){
    return (
        <div className='absolute w-[52px] top-[50%] shadow-md rounded-md -translate-y-[50%] left-2  flex flex-col gap-y-4 bg-white h-[360px] ' />
    )
}