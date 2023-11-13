"use client";
import { gql, useQuery } from "@apollo/client";
import { FC, useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FormSelect from "../ui/form/select/formSelect";
import { SelectOption } from "@/models/selectOption.interface";

const Filter: FC = () => {
  const [filterOptions, setFilterOptions] = useState<{options: SelectOption[]}[]>([]);
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
        const filterAttributes: any = {};
        for (const { name,  value } of data.filters) {
            if (!filterAttributes[name]) filterAttributes[name] = { name, options: [] };
            filterAttributes[name].options.push({value: name, label: value});
        }
        setFilterOptions(Object.values(filterAttributes));
      },
    }
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name.toLowerCase(), value.toLowerCase())
 
      return params.toString()
    },
    [searchParams]
  )

  return (
    <div className="flex mt-10">
      {filterOptions.map((filter, id) => (
          <FormSelect list={filter.options} key={id} onSelectUpdate={(e) => router.push(pathname + '?' + createQueryString(e.value, e.label))} />
      ))}
    </div>
  );
}

export default Filter