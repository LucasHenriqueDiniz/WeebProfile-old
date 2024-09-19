export interface PorcentageItem {
  name: string;
  size: number;
  color?: string;
  className?: string;
}

interface PorcentageBarProps {
  values: PorcentageItem[];
}

const PorcentageBar = ({ values }: PorcentageBarProps) => {
  const totalSize = values.reduce((sum, item) => sum + item.size, 0);

  return (
    <div className="progress-bar mt-4">
      {values.map((item) => (
        <div
          key={item.name}
          className={`progress-bar-segment ${item.className}`}
          style={{
            width: `${(item.size / totalSize) * 100}%`,
            backgroundColor: item.color,
          }}
        ></div>
      ))}
    </div>
  );
};

export default PorcentageBar;
