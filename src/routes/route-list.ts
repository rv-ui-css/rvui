import { IRouteList } from "../components/RoutesBuilder";
import { PAGE_TYPE_ENUM } from "../enums/page-type-enum";
import HomePage from "../pages/HomePage";
import { ROUTES } from "./routes";

export const RouteList: IRouteList[] = [
  {
    route: ROUTES.HOME(),
    type: PAGE_TYPE_ENUM.PRIMARY,
    elements: HomePage,
  },
];
