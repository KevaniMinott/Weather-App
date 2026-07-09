export function Cards() {
  return (
    <main className="w-full h-full flex  mt-[50px] gap-[40px] justify-center ">
      <div className=" h-full flex flex-col items-center gap-[30px]">
        <article className="w-full h-[230px] shrink-0 rounded-3xl bg-gray-700/60"></article>
        <div className="w-full h-ful flex flex-col gap-[30px] justify-center items-center">
          <section className="flex gap-7">
            <div className="w-[160px] rounded-[8px] h-[100px] bg-white"></div>
            <div className="w-[160px] rounded-[8px] h-[100px] bg-white"></div>
            <div className="w-[160px] rounded-[8px] h-[100px] bg-white"></div>
            <div className="w-[160px] rounded-[8px] h-[100px] bg-white"></div>
          </section>

          <section className="flex  gap-7 ">
            <div className="w-[80px] rounded-[8px] h-[130px] bg-white"></div>
            <div className="w-[80px] rounded-[8px] h-[130px] bg-white"></div>
            <div className="w-[80px] rounded-[8px] h-[130px] bg-white"></div>
            <div className="w-[80px] rounded-[8px] h-[130px] bg-white"></div>
            <div className="w-[80px] rounded-[8px] h-[130px] bg-white"></div>
            <div className="w-[80px] rounded-[8px] h-[130px] bg-white"></div>
            <div className="w-[80px] rounded-[8px] h-[130px] bg-white"></div>
          </section>
        </div>
      </div>
      <div className="bg-amber-300 w-[280px] h-[530px]"></div>
    </main>
  );
}
