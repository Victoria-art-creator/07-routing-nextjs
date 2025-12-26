'use client';

import { Note } from '@/types/note';
import Modal from '@/components/Modal/Modal';
import { useRouter } from 'next/navigation';

interface NotePreviewProps {
  note: Note;
}

export default function NotePreviewClient({ note }: NotePreviewProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>{note.tag}</p>
    </Modal>
  );
}
