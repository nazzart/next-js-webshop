"use client";
import { gql, useQuery } from "@apollo/client";
import FormSelect from "../ui/form/select/formSelect";
import { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const [filterList, setFilterList] = useState([]);
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams();

  useQuery(
    gql`
      query filters {
        filters {
          id
          name
          value
        }
      }
    `,
    {
      onCompleted: (data) => {
        const filterAttributes = {};
        for (const { name,  value } of data.filters) {
            if (!filterAttributes[name]) filterAttributes[name] = { name, options: [] };
            filterAttributes[name].options.push({value: name, label: value});
        }
        setFilterList(Object.values(filterAttributes));
      },
    }
  );

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name.toLowerCase(), value.toLowerCase())
 
      return params.toString()
    },
    [searchParams]
  )

  return (
    <div className="flex mt-10">
      {filterList.map((filter, id) => (
          <FormSelect list={filter.options} key={id} onSelectUpdate={(e) => router.push(pathname + '?' + createQueryString(e.value, e.label))} />
      ))}
    </div>
  );
}
