import Dashboard           from './Dashboard';
import {exposeMicroClient} from "../../lib/expose";

exposeMicroClient('dashboard', Dashboard);
