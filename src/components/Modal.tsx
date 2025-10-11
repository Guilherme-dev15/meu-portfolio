// src/components/Modal.tsx

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

// --- PROPS ---
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

// --- SUBCOMPONENTES ---
const ModalTitle: React.FC<{ title: string; titleId: string }> = React.memo(({ title, titleId }) => {
  if (!title) return null;
  const words = title.toUpperCase().split(' ');
  const firstWord = words[0];
  const restOfTitle = words.slice(1).join(' ');

  return (
    <h2 id={titleId} className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10 pb-4 border-b border-gray-700">
      <span className="text-custom-gold">{firstWord}</span>
      {restOfTitle && <span className="ml-2">{restOfTitle}</span>}
    </h2>
  );
});

// --- COMPONENTE PRINCIPAL ---
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const titleId = 'modal-title';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
    >
      <div
        // ATUALIZADO: Aumentamos a largura máxima do modal de 5xl para 6xl.
        className="w-full max-w-6xl max-h-[90vh] bg-dark-card rounded-xl shadow-2xl p-6 md:p-10 relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-custom-gold transition-colors duration-300 z-10"
          aria-label="Fechar modal"
        >
          <X size={28} />
        </button>

        {title && <ModalTitle title={title} titleId={titleId} />}
        
        {children}
      </div>
    </div>
  );
};

export default Modal;