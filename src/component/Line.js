import datas from "../data.json";

const Line = ({ search }) => {
  return (
    <div>
      {datas
        .filter((data) => data.keywords.includes({ search }))
        .map((data) => {
          return (
            <div className="mb-6 flex items-center gap-4">
              <div className=" text-2xl">{data.symbol}</div>
              <h1 className="text-xl">{data.title}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default Line;
