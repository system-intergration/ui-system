import axiosClient from "api/config";
import React from "react";
import Chart from "react-apexcharts";
import { useQuery } from "react-query";

export const EarningPage = () => {
  // print begin to end

  const { data } = useQuery("department-query", () => {
    return axiosClient.get("/department-earning") as unknown as Promise<
      Array<{
        [key: string]: number;
      }>
    >;
  });

  const { data: gender_earning } = useQuery("gender_earning", () => {
    return axiosClient.get("/gender-earning") as unknown as Promise<
      Array<{
        [key: string]: number;
      }>
    >;
  });

  const { data: statisticVacation } = useQuery("vacation", () => {
    return axiosClient.get("/vacation") as unknown as Promise<
      {
        [key: string]: number;
      }[]
    >;
  });

  console.log(statisticVacation);

  const labelsDepartment = data?.map((item) => Object.keys(item)[0]);
  const seriesDepartment = data?.map((item) => Object.values(item)[0]);

  const labelsGender = gender_earning?.map((item) =>
    Object.keys(item)[0] === "true" ? "male" : "female"
  );

  const seriesGender = gender_earning?.map((item) => Object.values(item)[0]);
  const chartDepartmentState = {
    options: {
      labels: labelsDepartment || [],
    },
    series: seriesDepartment || [],
  };

  const chartGenderState = {
    options: {
      labels: labelsGender || [],
    },
    series: seriesGender || [],
  };

  const genderState = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["male", "female"],
      },
    },
    series: [
      {
        name: "series-1",
        data: statisticVacation?.map((item) => Object.values(item)[0]),
      },
    ],
  };

  return (
    <div className="earning-page d-flex flex-wrap">
      <div className="w-50">
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Statistic Earning By Department
        </div>
        <Chart
          options={chartDepartmentState.options}
          series={chartDepartmentState.series}
          type="donut"
          width="400"
          style={{
            height: 300,
          }}
        />
      </div>

      <div className="w-50">
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Statistic Earning By Gender
        </div>
        <Chart
          options={chartGenderState.options}
          series={chartGenderState.series}
          type="donut"
          width="400"
          style={{
            height: 300,
          }}
        />
      </div>

      <div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Compare Vacation Gender By Department
        </div>
        <Chart
          options={genderState.options}
          series={genderState.series || []}
          type="bar"
          height="500"
        />
      </div>
    </div>
  );
};

// print begin to end
