"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ Placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch =useDebouncedCallback( (e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page",1)
    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  },300);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        className={styles.input}
        type="text"
        placeholder={Placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
