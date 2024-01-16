interface ChipProps {
  name: string;
  handleCancel: () => void;
}

const Chip: React.FC<ChipProps> = ({ name, handleCancel }) => {
  return (
    <div className="flex items-center gap-2 bg-gray-300 px-2 py-1.5 rounded-2xl hover:bg-gray-400">
      {name}
      <button onClick={handleCancel}>X</button>
    </div>
  );
};

export default Chip;
