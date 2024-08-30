import { useCallback, useState } from "react";
import { CardDialogProps, CardProps } from "./types";
import Dialog from "../Dialog";

// Component to display card details
interface CardDetailProps {
  label: string;
  value: string;
}

const CardDetail = ({ label, value }: CardDetailProps) => (
  <span className="flex items-center text-gray-700 mb-2">
    <p className="text-base font-bold mr-2">{label}:</p>
    <p className="text-base overflow-hidden overflow-ellipsis whitespace-nowrap max-w-xs">{value}</p>
  </span>
);

// Component to display the content of the Dialog
const CardDialog = ({ isOpen, onClose, subject }: CardDialogProps) => (
  <Dialog
    isOpen={isOpen}
    onClose={onClose}
    title={subject.name}
    size="small"
  >
    <span className="text-gray-700">
      <p>Desejo me matricular no seguinte curso: </p>
      <p className="font-bold">{subject.name}</p>
    </span>
  </Dialog>
);

// Card Component
function Card({ subject }: CardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = useCallback(() => setIsDialogOpen(true), []);
  const closeDialog = useCallback(() => setIsDialogOpen(false), []);

  return (
    <>
      <div
        className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 transition-transform duration-120 ease-in-out transform hover:scale-105"
        onClick={openDialog}
      >
        <div className="font-bold text-xl mb-4">{subject.name}</div>
        <CardDetail label="Code" value={subject.code} />
        <CardDetail label="Professor" value={subject.professor} />
        <CardDetail label="Schedule" value={subject.schedule} />
      </div>

      {isDialogOpen ? <CardDialog isOpen={isDialogOpen} onClose={closeDialog} subject={subject} /> : null}
    </>
  );
}

export { Card };
