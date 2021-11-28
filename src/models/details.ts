export interface DetailProps {
    title: string;
    subTitle: string;
    _selectTab: (tab:string) => void;
    tabSelected: string;
}