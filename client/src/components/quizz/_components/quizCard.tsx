export interface QuizCardTypes {
  answer: string;
  onClick: () => void;
}

const QuizCard = ({ answer, onClick }: QuizCardTypes) => {
  return (
    <div
      onClick={onClick}
      className={`hover:bg-white/40 active:bg-white/60 cursor-pointer flex items-start py-4 px-3 gap-3 border border-solid border-white rounded-md`}
    >
      <p className="text-white ">{answer}</p>
    </div>
  );
};

export default QuizCard;
