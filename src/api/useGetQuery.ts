import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GH_TOKEN } from "./httpConfig";

type Param = Record<string, string | number | (string | number)[] | undefined>;

interface UseGetQueryProps {
  key?: QueryKey;
  url: string;
  params?: Param;
  options?: UseQueryOptions;
}

export function useGetQuery(props: UseGetQueryProps) {
  const params = props.params && removeBlankAttr(props.params);

  const config = {
    // headers: { Authorization: `Bearer ${GH_TOKEN}` },
    params,
  };

  return useQuery({
    queryKey: [props.key, props.params],
    queryFn: async () => {
      const res = await axios.get(props.url, config);
      return res.data;
    },
    ...props.options,
  });
}

export function removeBlankAttr(params: Param) {
  for (const key in params) {
    if (Array.isArray(params[key])) {
      continue;
    }

    if (!params?.[key]) {
      delete params[key];
    }
  }

  return params;
}
