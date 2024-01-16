interface ChipProps {
  ref?: React.RefObject<HTMLDivElement> | null;
  name: string;
  handleCancel: () => void;
}

const Chip: React.FC<ChipProps> = ({ ref, name, handleCancel }) => {
  return (
    <div
      className="flex items-center gap-2 bg-gray-300 px-2 py-1.5 rounded-2xl hover:bg-gray-400 focus:bg-blue-200"
      ref={ref}
    >
      {name}
      <button onClick={handleCancel}>X</button>
    </div>
  );
};

export default Chip;
