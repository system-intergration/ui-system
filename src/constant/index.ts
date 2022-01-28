import { BsFilePersonFill, BsFillPencilFill } from "react-icons/bs";
import { MdOutlinePersonOff } from "react-icons/md";
import { GrAnnounce, GrArticle } from "react-icons/gr";
export const PG_TITLE_PREFIX = "BITX Exchange";
export const APP_BASE_URL = "dashboard";
export const DEFAULT_KYC_STEPS = ["email", "profile", "document", "address"];
export const ORDER_BOOK_DEFAULT_SIDE_LIMIT = 50;
export const STORAGE_DEFAULT_LIMIT = 20;

export const routes = [
  {
    title: "KYC MANAGE",
    path_prefix: "kyc",
    icons: BsFilePersonFill,
    items: [
      {
        title: "KYC List",
        path: `${APP_BASE_URL}/kyc/list`,
        icons: BsFilePersonFill,
      },
      {
        title: "KYC Black List",
        path: `${APP_BASE_URL}/kyc/black-list`,
        icons: MdOutlinePersonOff,
      },
    ],
  },
  {
    title: "ANNOUNCEMENT MANAGE",
    path_prefix: "announcement",
    icons: GrAnnounce,
    items: [
      {
        title: "Create Article",
        path: `${APP_BASE_URL}/announcement/article/create`,
        icons: BsFillPencilFill,
      },
      {
        title: "Article List",
        path: `${APP_BASE_URL}/announcement/article/list`,
        icons: GrArticle,
      },
    ],
  },
];
