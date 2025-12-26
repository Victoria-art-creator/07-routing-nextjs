import { fetchNoteById } from '@/lib/api';
import NotePreviewClient from './NotePreview.client';

type NotePreviewProps = {
  params: Promise<{ id: string }>;
};

const NotePreviewPage = async ({ params }: NotePreviewProps) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return <NotePreviewClient note={note} />;
};

export default NotePreviewPage;
