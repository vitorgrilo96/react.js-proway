interface Subject {
  name: string;
  code: string;
  professor: string;
  schedule: string;
}

interface CardProps {
  subject: Subject;
}

interface CardDialogProps {
  isOpen: boolean;
  onClose: () => void;
  subject: Subject;
}

export type { CardProps, Subject, CardDialogProps };