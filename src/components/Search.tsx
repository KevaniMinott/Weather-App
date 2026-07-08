export function Search() {
  return (
    <main className="flex w-full justify-center gap-[20px]">
      <input
        placeholder="search for a place."
        type="text"
        className="h-[30px] w-[450px] bg-gray-700/60 border-2"
      />
      <button className="h-[30px] w-[80px] border-2">search</button>
    </main>
  );
}
