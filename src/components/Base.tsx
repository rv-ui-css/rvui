import { ReactNode } from "react";
import { PAGE_TYPE_ENUM } from "../enums/page-type-enum";
import TopBar from "./TopBar";

export default function Base(props: IProps) {
  function checkComponent() {
    switch (props.type) {
      case PAGE_TYPE_ENUM.PRIMARY:
        return (
          <div className="grid">
            <TopBar />
            <div className="flex-1">
              <div className="">{props.children}</div>
            </div>
          </div>
        );
      default:
        return <div>{props.children}</div>;
    }
  }

  return <>{checkComponent()}</>;
}

interface IProps {
  children: ReactNode;
  type: PAGE_TYPE_ENUM;
}
