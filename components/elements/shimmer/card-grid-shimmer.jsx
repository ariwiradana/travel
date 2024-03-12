const CardGridShimmer = ({ number }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-12">
      {[...Array(number || 0).keys()]?.map((el) => (
        <div key={el}>
          <div className="h-[14rem] md:h-[16rem] group lg:h-[20rem] rounded-2xl w-full bg-gray-200 animate-pulse mb-4"></div>
          <div className="h-3 w-60 rounded-full bg-gray-200 animate-pulse mb-4"></div>
          <div className="h-3 w-56 rounded-full bg-gray-200 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

export default CardGridShimmer;
