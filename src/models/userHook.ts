import {Result} from "./user";

export interface UserHookProps {
    _setTab: (tab: string) => void;
    tab: string;
    user: Result[] | undefined;
    subTitle: string;
    title: string;
    loading: boolean;
    _initState: () => void;
}