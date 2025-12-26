import './layout.module.css';

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

export default function NotesLayout({ children, sidebar }: Props) {
  return (
    <section>
      <aside style={{ display: 'flex', gap: 24 }}>{sidebar}</aside>
      <hr />
      <div style={{ flex: 1 }}>{children}</div>
    </section>
  );
}
