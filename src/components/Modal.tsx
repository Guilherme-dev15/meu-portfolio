// Arquivo: src/components/Modal.tsx

import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

/**
 * Componente Modal genérico, centralizado e responsivo.
 * Estilizado com tema dark e detalhes yellow-500.
 */
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title = "" }) => {
  if (!isOpen) return null;

  // Renderiza o modal fixo e centralizado
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        // Container principal do modal: Dark background, max width, max height
        className="w-full max-w-4xl max-h-[90vh] bg-[#252525] rounded-xl shadow-2xl p-6 md:p-10 relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Impede que o clique dentro feche o modal
      >
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-yellow-500 transition duration-300 z-10"
          aria-label="Fechar Modal"
        >
          <X size={28} />
        </button>

        {/* Título (Se fornecido) */}
        {title && (
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6 pb-4 border-b border-gray-700">
            {/* Divisão do título, como no seu design (ex: ABOUT ME) */}
            <span className="text-yellow-500">{title.toUpperCase().split(' ')[0]}</span>
            <span className="ml-2">{title.toUpperCase().split(' ').slice(1).join(' ')}</span>
          </h2>
        )}
        
        {/* Conteúdo do Modal */}
        <div className="pt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
