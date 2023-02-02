import data from "../data.json";

const Line = ({ search }) => {
  return (
    <div>
      {data.keywords
        .filter((line) => line.includes({ search }))
        .map(({ symbol, title }) => {
          return (
            <div className="mb-6 flex items-center gap-4">
              <div className=" text-2xl">{symbol}</div>
              <h1 className="text-xl">{title}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default Line;
