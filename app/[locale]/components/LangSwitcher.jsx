"use client";

import { useRouter } from "next/navigation";
const LangSwitcher = () => {
  const router = useRouter();

  return (
    <div>
      <select
        onChange={(e) =>
          router.push(
            {
              pathname: router.pathname,
              query: router.query,
            },
            null,
            { locale: e.target.value }
          )
        }
      >
        <option value="de">de</option>
        <option value="en">en</option>
        <option value="it">it</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
