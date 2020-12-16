import {FC, useCallback, useEffect, useState} from "react";

const withMobile = (Comp: FC): FC<{ mobile: boolean } & any> => {
  return (props: any) => {
    const [mobile, setMobile] = useState(window.innerWidth < 600);
    const onResize            = useCallback(() => {
      setMobile(window.innerWidth < 600);
    }, [setMobile]);
    useEffect(() => {
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, [onResize]);
    return <Comp {...props} mobile={mobile}/>;
  };
};
export default withMobile;
