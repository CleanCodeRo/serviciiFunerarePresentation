"use client";

import Button from "@/components/ui/button/Button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    // this uses qs from query-string to parse the current query string
    const currentQuery = qs.parse(searchParams.toString());

    // this creates a new query object with the new value
    const query = {
      ...currentQuery,
      [valueKey]: id,
    };

    // if the value is already selected, we remove it from the query
    if (currentQuery[valueKey] === id) {
      query[valueKey] = null;
    }

    // this uses qs from query-string to stringify the query object and create a new url which is then pushed to the router
    // the skipNull option is used to remove null values from the query
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="md-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id}>
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectedValue === filter.id && "bg-black text-white"
                )}
                onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
