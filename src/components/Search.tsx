export function Search() {
  return (
    <main className="flex w-full justify-center  items-center gap-[20px] mt-[30px]">
      <input
        placeholder="Search for a place."
        type="text"
        className="h-[40px] pl-[20px] rounded-[8px] placeholder:text-white/70 text-white w-[450px]  outline-none bg-[rgb(39,37,65)]  "
      />
      <button className="h-[40px] w-[100px] cursor-pointer rounded-[8px] bg-[rgb(68,85,218)] text-white">
        search
      </button>
    </main>
  );
}
