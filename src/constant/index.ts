import { IconType } from "react-icons";
import { FcMoneyTransfer } from "react-icons/fc";
export const PG_TITLE_PREFIX = "BITX Exchange";
export const APP_BASE_URL = "admin";
export const DEFAULT_KYC_STEPS = ["email", "profile", "document", "address"];
export const ORDER_BOOK_DEFAULT_SIDE_LIMIT = 50;
export const STORAGE_DEFAULT_LIMIT = 20;

// Language: typescript

interface IConstant {
  path_prefix: string;
  path?: string;
  title: string;
  icons: IconType;
  items?: IConstant[];
}
export const routes: IConstant[] = [
  {
    title: "EARNINGS MANAGE",
    path_prefix: "kyc",
    icons: FcMoneyTransfer,
  },
];
