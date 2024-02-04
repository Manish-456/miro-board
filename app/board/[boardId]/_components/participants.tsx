import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export function Participants() {
  return (
    <div className='absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md'>
    List of users        
    </div>
  )
}

export function ParticipantsSkeleton(){
  return (
    <div className='absolute w-[100px] h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md' />
  )
}