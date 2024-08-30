import React, { ReactNode } from 'react';

type DialogSize = 'small' | 'medium' | 'large';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: DialogSize;
  children: ReactNode;
}

const sizeClasses = {
  small: 'max-w-sm',
  medium: 'max-w-md',
  large: 'max-w-lg',
};

export default function Dialog({
  isOpen,
  onClose,
  title,
  size = 'medium',
  children,
}: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className={`bg-white p-6 rounded shadow-lg w-full relative ${sizeClasses[size]}`}>
        {title ? <h2 className="text-xl font-bold mb-4">{title}</h2> : null}
        <div className="mb-6">
          {children}
        </div>
        <div className="absolute right-4 bottom-4 flex space-x-2">
          <button
            className="bg-red-800 text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Não
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => {
              onClose();
            }}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}
