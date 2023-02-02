import datas from "../data.json";

const Line = ({ search }) => {
  return (
    <div>
      {datas
        .filter((data) => data.keywords.includes({ search }))
        .map((datas) => {
          return (
            <div className="mb-6 flex items-center gap-4">
              <div className=" text-2xl">{datas.symbol}</div>
              <h1 className="text-xl">{datas.title}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default Line;
