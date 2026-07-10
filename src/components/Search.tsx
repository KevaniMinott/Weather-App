import { useRef } from 'react';

interface SearchProp {
  setQuery: (query: string) => void;
}
export function Search({ setQuery }: SearchProp) {
  const searchRef = useRef<HTMLInputElement>(null);
  function search() {
    if (searchRef.current) setQuery(searchRef.current?.value);
  }
  return (
    <main className="flex w-full justify-center  items-center gap-[20px] mt-[30px]">
      <input
        ref={searchRef}
        placeholder="Search for a place. eg: Kingston,JM"
        type="text"
        className="h-[40px] pl-[20px] rounded-[8px] placeholder:text-white/70 text-white w-[450px]  outline-none bg-[rgb(39,37,65)]  "
      />
      <button
        onClick={search}
        className="h-[40px] w-[100px] cursor-pointer rounded-[8px] bg-[rgb(68,85,218)] text-white"
      >
        search
      </button>
    </main>
  );
}
