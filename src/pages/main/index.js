import React, { memo } from "react";
import { HashRouter } from "react-router-dom";
import SetRoutes from "../../router";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";

export default memo(function Main() {
  return (
    <HashRouter>
      <AppHeader />
      <SetRoutes />
      <AppFooter />
    </HashRouter>
  );
});
