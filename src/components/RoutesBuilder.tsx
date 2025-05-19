import { JSX } from "react";

export interface IRouteList {
  route: string;
  elements: () => JSX.Element;
  type: PAGE_TYPE_ENUM;
}

import { Route, Routes } from "react-router-dom";
import Base from "./Base.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import { RouteList } from "../routes/route-list.ts";
import { PAGE_TYPE_ENUM } from "../enums/page-type-enum.ts";

export default function RouteBuilder() {
  return (
    <Routes>
      {RouteList.map((e) => {
        const Element = e.elements;
        return (
          <Route
            key={e.route}
            path={e.route}
            element={
              <Base type={e.type}>
                <Element />
              </Base>
            }
          />
        );
      })}
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
}
