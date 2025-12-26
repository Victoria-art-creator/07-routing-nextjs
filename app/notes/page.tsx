import React from 'react';
import { QueryClient, dehydrate } from '@tanstack/query-core';
import { HydrationBoundary } from '@tanstack/react-query';
import NotesClient from './filter/[...slug]/Notes.client';
import { fetchNotes } from '@/lib/api';
import type { NoteTag } from '@/types/note';

interface NotesClientProps {
  tag: NoteTag | 'all';
}

export default async function NotesPage({ tag }: NotesClientProps) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', tag],
    queryFn: () => fetchNotes(undefined, 1, tag === 'all' ? undefined : tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
