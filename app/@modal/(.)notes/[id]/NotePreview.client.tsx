import { fetchNoteById } from '@/lib/api';
import Modal from '@/components/Modal/Modal';

type NotePreviewProps = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: NotePreviewProps) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>{note.tag}</p>
    </Modal>
  );
};

export default NotePreview;
