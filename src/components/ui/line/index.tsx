interface LineProps {
  completed: boolean;
}
const Line = ({ completed }: LineProps) => {
  return (
    <div className="absolute left-11 top-20 w-0.5 h-8 max-md:hidden">
      <div
        className={`
                      w-full h-full rounded-full transition-all duration-700
                      ${
                        completed
                          ? "bg-gradient-to-b from-green-400 to-green-300"
                          : "bg-gray-200"
                      }
                    `}
      />
    </div>
  );
};

export default Line;
