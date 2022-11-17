
import { TrendingData } from "../mocks/TrendingData";
export default function Trending() {
  return (
    <>
    {TrendingData.map((Trending, i) => 
      <div className="flex-col mb-4">
        <div className="text-sm text-gray-500">
        {Trending.Title}
        </div>
        <div className="text-white text-lg"> {Trending.Topic} </div>
        <div className="text-sm text-gray-500"> {Trending.Subtitle} </div>
      </div>
      )}

    </>
  );
}
