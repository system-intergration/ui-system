import { ColumnsType } from "antd/lib/table";
import { Table } from "antd";

import axiosClient from "api/config";
import React from "react";
import { useQuery } from "react-query";
import { ResponseVacation, StatisticVacation } from "types";

export const VacationPage = () => {
  const { data, isLoading } = useQuery("query-earning", () => {
    return axiosClient.get<ResponseVacation>(
      "/vacation"
    ) as unknown as Promise<ResponseVacation>;
  });

  const columns: ColumnsType<StatisticVacation> = [
    {
      title: "Employee ID",
      key: "Employee_ID",
      dataIndex: "Employee_ID",
      align: "center",
    },
    {
      title: "Employee Name",
      key: "First_Name",
      dataIndex: "First_Name",
      align: "center",
    },
    {
      title: "Last_Name",
      key: "Last_Name",
      dataIndex: "Last_Name",
      align: "center",
    },
    {
      title: "Vacation Days",
      key: "Vacation_Days",
      dataIndex: "Vacation_Days",
      align: "center",
    },
    {
      title: "Employment Status",
      key: "Employment_Status",
      dataIndex: "Employment_Status",
      align: "center",
    },
  ];
  return (
    <div className="earning-page">
      <Table columns={columns} dataSource={data?.list} loading={isLoading} />
    </div>
  );
};
