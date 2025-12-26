// import { type MouseEvent, type ReactNode, useEffect } from 'react';
// import { createPortal } from 'react-dom';

// interface ModalProps {
//   children: ReactNode;
//   onClose: () => void;
// }

// export default function Modal({ children, onClose }: ModalProps) {
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') onClose();
//     };
//     document.addEventListener('keydown', handleKeyDown);
//     document.body.style.overflow = 'hidden';

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.body.style.overflow = '';
//     };
//   }, [onClose]);

//   const handleBackdropClose = (e: MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) onClose();
//   };

//   return createPortal(
//     <div
//       className={css.backdrop}
//       role="dialog"
//       aria-modal="true"
//       onClick={handleBackdropClose}
//     >
//       <div className={css.modal}>{children}</div>
//     </div>,
//     document.body,
//   );
// }
'use client';

import css from './Modal.module.css';
import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const close = () => router.back();

  return (
    <div className={css.backdrop} role="dialog">
      <div className={css.modal}>
        {children}
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
