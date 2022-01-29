import API from "api";
import { useQuery } from "react-query";
import { FETCH_LIST_KYC } from ".";
import { config } from "../config";
import { KYCListResponse, StatusKYC } from "../model";

interface getKYCProps {
  page: number;
  size: number;
  status: StatusKYC | "search";
}
export const fetchKYCList = (params: getKYCProps) => {
  return API.get<KYCListResponse>(config, "/private/kyc", {
    params,
  });
};

export const useFetchListKYC = (params: getKYCProps) => {
  const { page, size, status } = params;
  return useQuery(
    [FETCH_LIST_KYC, page, size, status],
    () => fetchKYCList({ ...params, status }),
    {
      enabled: status !== "search",
      refetchOnWindowFocus: true,
      retry: 2,
    }
  );
};
