import Loading from "components/Loading";
import { APP_BASE_URL } from "constant";
import React, { lazy, memo, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AddEmployeePAge } from "./AddEmployeePage";
import { EarningPage } from "./EarningPages";
import { VacationPage } from "./VacationPage";

const ManageAppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Routes>
        <Route path={APP_BASE_URL}>
          <Route path="earning" element={<EarningPage />} />
          <Route path="vacation" element={<VacationPage />} />
          <Route path="add-employee" element={<AddEmployeePAge />} />
        </Route>
        <Route path="*" element={<Navigate to={`${APP_BASE_URL}/earning`} />} />
      </Routes>
    </Suspense>
  );
};

export default memo(ManageAppViews);
