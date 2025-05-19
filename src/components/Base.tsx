import { ReactNode } from "react";
import { PAGE_TYPE_ENUM } from "../enums/page-type-enum";

export default function Base(props: IProps) {
  function checkComponent() {
    switch (props.type) {
      case PAGE_TYPE_ENUM.PRIMARY:
        return (
          <div className="flex">
            <div className="flex-1">
              <div className="pt-top-bar-height mt-8 ">{props.children}</div>
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
