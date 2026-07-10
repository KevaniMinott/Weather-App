import { useEffect, useState } from 'react';
import { Cards } from './Cards';
import { Search } from './Search';

export interface dashboardProp {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
  };
  wind: {
    speed: number;
  };
}
export function Dashboard() {
  const [query, setQuery] = useState<string>();
  const [dashboardData, setDashboardData] = useState<dashboardProp | null>(
    null,
  );
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${!query ? 'Kingston,jm' : query},JM&appid=${import.meta.env.VITE_API_KEY}&units=metric`,
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDashboardData(data);
      });
  }, [query]);
  return (
    <main className="w-screen h-screen bg-[rgb(3,1,45)] fixed overflow-scroll ">
      <h2 className="text-white font-sans ml-[100px] font-semibold text-[25px]">
        Weather App
      </h2>
      <section className="flex flex-col items-center w-full h-full">
        <Search setQuery={setQuery} />
        <Cards dashboardData={dashboardData} />
      </section>
    </main>
  );
}
