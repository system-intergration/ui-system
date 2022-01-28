import Loading from "components/Loading";
import { APP_BASE_URL } from "constant";
import React, { lazy, memo, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ArticleCreate from "./annoucement/pages/Article/screens/ArticleCreate";
import ArticleDetail from "./annoucement/pages/Article/screens/ArticleDetail";
import ArticleList from "./annoucement/pages/Article/screens/ArticleList";
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

          <Route
            path="announcement/article/create"
            element={<ArticleCreate />}
          />
          <Route path="announcement/article/list" element={<ArticleList />} />
          <Route
            path="announcement/article/detail/:articleId"
            element={<ArticleDetail />}
          />
        </Route>
        <Route path="*" element={<Navigate to={`${APP_BASE_URL}`} />} />
      </Routes>
    </Suspense>
  );
};

export default memo(ManageAppViews);
