import {FC}  from "react";
import {env} from "./environment";

export function withBaseRoute<T>(Comp: FC<T>) {
  return (props: any) => <Comp {...props} baseRoute={env.baseRoute}/>;
}
