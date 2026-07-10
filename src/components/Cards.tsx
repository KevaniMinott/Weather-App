import type { dashboardProp } from './Dashboard';

interface CardsProp {
  dashboardData: dashboardProp | null;
}
export function Cards({ dashboardData }: CardsProp) {
  const dow = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const stats = ['Humidity', 'Wind', 'Feels like', 'Precip'];
  return (
    <main className="w-full h-full flex gap-[40px] justify-center mt-[30px]">
      <div className=" h-full flex flex-col items-center gap-[30px]">
        <article className="w-full h-[230px] border-[rgb(83,83,112)] border-[1px]  shrink-0 flex items-center justify-center rounded-3xl bg-[rgb(39,37,65)] gap-[40px] p-[30px]">
          <div className="flex flex-col w-full justify-start">
            <h2 className="text-white text-[24px]">Jamaica, Kingston</h2>
            <p className="text-white/60">Tuesday jun 5, 2026</p>
          </div>

          <p className="text-white text-[90px]">
            {dashboardData?.main.temp_min}
          </p>
        </article>
        <div className="w-full h-ful flex flex-col gap-[30px] justify-center items-center">
          <section className="flex gap-7">
            {stats.map((s) => (
              <div className="w-[160px] border-[rgb(83,83,112)]  border-[1px]  rounded-[8px] h-[100px] bg-[rgb(39,37,65)] p-[20px]">
                <h2 className="text-white/70">{s}</h2>{' '}
                <h2 className="text-white text-[30px]">46*</h2>
              </div>
            ))}
          </section>

          <section className="flex gap-4 ">
            {dow.map((d) => (
              <div className="w-[90px] border-[rgb(83,83,112)]  border-[1px] rounded-[8px] flex flex-col p-[10px] items-center h-[130px] bg-[rgb(39,37,65)] ">
                <h2 className="text-white/70">{d}</h2>
                <div className="flex h-full gap-[20px] ">
                  <div className="mt-auto w-full flex justify-start">
                    <p className="text-white">20*</p>
                  </div>
                  <div className="mt-auto w-full flex justify-end">
                    <p className="text-white">12*</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      <section className=" bg-[rgb(39,37,65)] p-[20px] border-[rgb(83,83,112)]  border-[1px] flex flex-col shrink-0 w-[280px] gap-[20px] h-[520px] rounded-[8px]">
        <h2 className="text-white">Hourly forcast</h2>
        <div className="w-full flex h-[50px] p-[10px] items-center bg-[rgb(49,47,75)] border-[1px] rounded-[5px] border-[rgb(83,83,112)] ">
          <div className="w-full flex justify-start">
            <p className="text-white">3pm</p>
          </div>
          <div className="w-full flex justify-end">
            <p className="text-white">20*</p>
          </div>
        </div>
      </section>
    </main>
  );
}
