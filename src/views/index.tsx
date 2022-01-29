import Loading from "components/Loading";
import { APP_BASE_URL } from "constant";
import React, { lazy, memo, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const KYCListingPage = lazy(() => import("./kyc/pages/KYCListingPage"));
const KYCDetailPage = lazy(() => import("./kyc/pages/KYCDetailPage"));
const KYCBlackListPage = lazy(() => import("./kyc/pages/KYCBlackListPage"));
const ManageAppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Routes>
        <Route path={APP_BASE_URL}>
          <Route
            path="kyc/detail/:uid/:update_at"
            element={<KYCDetailPage />}
          />
          <Route path="kyc/list" element={<KYCListingPage />} />
          <Route path="kyc/black-list" element={<KYCBlackListPage />} />
        </Route>
        <Route path="*" element={<Navigate to={`${APP_BASE_URL}`} />} />
      </Routes>
    </Suspense>
  );
};

export default memo(ManageAppViews);
