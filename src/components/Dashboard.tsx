import { Search } from './Search';

export function Dashboard() {
  return (
    <main className="w-screen h-screen bg-[rgb(1,5,44)] fixed ">
      <h2 className="text-white font-sans ml-[100px] mt-[50px] font-semibold text-[25px]">
        Weather App
      </h2>
      <section className="flex flex-col items-center w-full h-full">
        <h2 className="text-white font-sans text-[40px] font-semibold ">
          How's the weather looking today?{' '}
        </h2>
        <Search />
      </section>
    </main>
  );
}
