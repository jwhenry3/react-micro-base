import {exposeMicroApp} from "@jwhenry/react-micro/dist";
import {nameConvention} from "../config/name-convention";

export const exposeMicroClient = (name: string, root: any) => exposeMicroApp(nameConvention(name), root);
