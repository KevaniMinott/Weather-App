import { useEffect } from 'react';
import { Cards } from './Cards';
import { Search } from './Search';

export function Dashboard() {
  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={3cd9399c66c69e503544aee4c990e556}&units=metric',
    );
  }, []);
  return (
    <main className="w-screen h-screen bg-[rgb(3,1,45)] fixed overflow-scroll ">
      <h2 className="text-white font-sans ml-[100px] font-semibold text-[25px]">
        Weather App
      </h2>
      <section className="flex flex-col items-center w-full h-full">
        <h2 className="text-white font-sans text-[40px] font-semibold ">
          How's the weather looking today?{' '}
        </h2>
        <Search />
        <Cards />
      </section>
    </main>
  );
}
