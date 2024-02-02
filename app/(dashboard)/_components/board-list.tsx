"use client";

import React from 'react'
import { EmptySearch } from './empty-search';
import { EmptyFavorite } from './empty-favorite';
import { EmptyBoards } from './empty-boards';

interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favorites?: string
    }
}

export function BoardList({
    orgId,
    query
}: BoardListProps) {
    const data = [];

    if(!data?.length && query.search){
       return  <EmptySearch />
    }

    if(!data?.length && query.favorites){
       return <EmptyFavorite />
    }

    if(!data?.length){
        return (
          <EmptyBoards />
        )
    }

  return (
    <div>
      
    </div>
  )
}
