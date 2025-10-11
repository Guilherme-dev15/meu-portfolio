/**
 * @file Componente Modal genérico, acessível e reutilizável.
 * Inclui funcionalidades como fechar com a tecla Escape,
 * gerenciamento de foco (aria attributes) e estilo consistente com o tema.
 */

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

// --- PROPS ---
interface ModalProps {
  /** Determina se o modal está visível ou não. */
  isOpen: boolean;
  /** Função a ser chamada quando o modal for fechado (pelo botão, backdrop ou tecla Esc). */
  onClose: () => void;
  /** O conteúdo a ser renderizado dentro do modal. */
  children: React.ReactNode;
  /** Título opcional para o modal. */
  title?: string;
}

// --- SUBCOMPONENTES ---

/** Renderiza o título do modal com o estilo de duas palavras. */
const ModalTitle: React.FC<{ title: string; titleId: string }> = React.memo(({ title, titleId }) => {
  // Evita erros caso o título seja uma string vazia.
  if (!title) return null;

  const words = title.toUpperCase().split(' ');
  const firstWord = words[0];
  const restOfTitle = words.slice(1).join(' ');

  return (
    <h2
      id={titleId} // ID para acessibilidade (aria-labelledby)
      className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6 pb-4 border-b border-gray-700"
    >
      <span className="text-custom-gold">{firstWord}</span>
      {restOfTitle && <span className="ml-2">{restOfTitle}</span>}
    </h2>
  );
});

// --- COMPONENTE PRINCIPAL ---
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  // Efeito para fechar o modal ao pressionar a tecla 'Escape'.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    // Função de limpeza: remove o listener quando o componente é desmontado ou o modal fecha.
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
      // Atributos de acessibilidade essenciais para um modal
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] bg-dark-card rounded-xl shadow-2xl p-6 md:p-10 relative overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()} // Impede que o clique dentro feche o modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-custom-gold transition-colors duration-300 z-10"
          aria-label="Fechar modal"
        >
          <X size={28} />
        </button>

        {title && <ModalTitle title={title} titleId={titleId} />}
        
        <div className="flex-grow overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;