import Telegram from "../assets/icons/telegram.svg?react";
import Whatsapp from "../assets/icons/whatsapp.svg?react";
import { trainlabPodonkiLastHapkaBlaze, trainlabPodonkiLastHapkaBloodyValentines, trainlabPodonkiLastHapkaBornThisWay, trainlabPodonkiLastHapkaCrashTest, trainlabPodonkiLastHapkaHighVoltage, trainlabPodonkiLastHapkaInsertHere, trainlabPodonkiLastHapkaKindALonely, trainlabPodonkiLastHapkaMadnessWeek, trainlabPodonkiLastHapkaOnHold, trainlabPodonkiLastHapkaPoorPot } from ".";
import { HUSKY_DEVICES } from "./devices/husky";
import { TRAINLAB_DEVICES } from "./devices/trainlab";
import { VLIQ_DEVICES } from "./devices/vliq";
import { HUSKY_LINES } from "./lines/husky";
import { TRAINLAB_LINES } from "./lines/trainlab";
import { VLIQ_LINES } from "./lines/vliq";

export const LARGE_MEDIA_QUERY = "(min-width: 1000px) and (max-width: 1300px)";
export const MEDIUM_MEDIA_QUERY = "(min-width: 768px) and (max-width: 1000px)";
export const SMALL_MEDIA_QUERY = "(min-width: 375px) and (max-width: 769px)";

export const PATHS = {
  home: "/",
  lines: "/lines",
  delivery: "/delivery",
  devices: "/devices"
};

export const HEADER_NAVS = [
  {
    id: 1,
    text: "ДЕВАЙСЫ",
    path: PATHS.devices,
    isMenu: true,
  },
  {
    id: 2,
    text: "ЛИНЕЙКИ",
    path: PATHS.lines,
    isMenu: true,
  },
  {
    id: 3,
    text: "НОВИНКИ",
    path: PATHS.home,
    isMenu: false,
  },
  {
    id: 4,
    text: "ДОСТАВКА",
    path: PATHS.delivery,
    isMenu: false,
  },
  {
    id: 5,
    text: "КОНТАКТЫ",
    path: PATHS.home,
    isMenu: false,
  },
];

export const CONTAINED_BUTTON_STYLES = (Large, Medium, Small) => {
  return {
    height: "fit-content",
    fontFamily: "Roboto Condensed Variable",
    padding: Large
      ? "12px 48px"
      : Medium
      ? "8px 40px"
      : Small
      ? "8px 40px"
      : "16px 56px",
    fontSize: "20px",
    fontWeight: 700,
    backgroundColor: "accentColor.main",
    borderRadius: "0px",
    borderWidth: "3px",
    borderColor: "accentColor.main",
    "&:hover": {
      backgroundColor: "transparent",
      borderWidth: "3px",
      borderColor: "accentColor.main",
      borderStyle: "solid",
      padding: Large
        ? "10px 46px"
        : Medium
        ? "6px 38px"
        : Small
        ? "6px 38px"
        : "14px 54px",
    },
  };
};

export const OUTLINED_BUTTON_STYLES = (Large, Medium, Small) => {
  return {
    borderWidth: "3px",
    borderStyle: "solid",
    borderColor: "accentColor.main",
    borderRadius: 0,
    color: "whiteColor.main",
    width: "fit-content",
    padding: Large
      ? "12px 48px"
      : Medium
      ? "8px 40px"
      : Small
      ? "8px 40px"
      : "16px 56px",
    fontFamily: "Roboto Condensed Variable",
    fontSize: "20px",
    fontWeight: 700,
    "&:hover": {
      borderColor: "accentColor.main",
      borderWidth: "3px",
      backgroundColor: "accentColor.main",
    },
  };
};

export const BUTTON_TEXT = "ЗАКАЗАТЬ";

export const DELIVERY_TITLE = "ДОСТАВКА";

export const DELIVERY_ADVANTAGES = [
  {
    id: 1,
    text: "КРУТАЯ ДОСТАВКА",
  },
  {
    id: 2,
    text: "КРУТАЯ ДОСТАВКА",
  },
  {
    id: 3,
    text: "КРУТАЯ ДОСТАВКА",
  },
  {
    id: 4,
    text: "КРУТАЯ ДОСТАВКА",
  },
  {
    id: 5,
    text: "КРУТАЯ ДОСТАВКА",
  },
  {
    id: 6,
    text: "КРУТАЯ ДОСТАВКА",
  },
];

export const DELIVERY_TEXT =
  "У НАС САМАЯ КРУТАЯ ДОСТАВКА У НАС САМАЯ КРУТАЯ ДОСТАВКА У НАС САМАЯ КРУТАЯ ДОСТАВКА У НАС САМАЯ КРУТАЯ ДОСТАВКА У НАС САМАЯ КРУТАЯ ДОСТАВКА";

export const HOME_BANNER_BRANDS = "TRAIN_LAB, BRAND#1, BRAND#2...";

export const HOME_BANNER_TITLE = "ДИСТРИБЬЮТОР ОРИГИНАЛЬНЫХ ЖИДКОСТЕЙ";

export const HOME_BANNER_INFORMATION_TEXT =
  "УЗНАВАЙТЕ О НОВИНКАХ, УСЛОВИЯХ ДОСТАВКИ, ЛИНЕЙКАХ ПРОДУКЦИИ НА НАШЕМ САЙТЕ";

export const HOME_POPULAR_GOODS_TITLE = "ПОПУЛЯРНЫЕ ТОВАРЫ";

export const HOME_WARNING_BLOCK_TITLE = "ОСТЕРЕГАЙТЕСЬ ПОДДЕЛОК!";

export const HOME_WARNING_BLOCK_TEXT =
  "ОБРАЩАЙТЕ СВОЁ ВНИМАНИЕ НА ЦЕНУ, ДИЗАЙН УПАКОВКУ И ВКУС ПОКУПАЕМОЙ ЖИДКОСТИ";

export const HOME_RUNNING_LINE_TEXT = [
  { id: 1, text: "АКЦИЗ" },
  { id: 2, text: "ОПЛАТА НА РС" },
  { id: 3, text: "РАБОТА В БЕЛУЮ" },
  { id: 4, text: "БЫСТРАЯ ДОСТАВКА" },
  { id: 5, text: "ТОВАР ПОДТВЕРЖДЕН" },
];

export const HOME_OUR_LINES_TITLE = "НАШИ ЛИНЕЙКИ";

export const HOME_REVIEWS_TITLE = "ОБЗОРЫ";

export const SLIDER_PODONKI_ADDITION = "PODONKI";

export const HOME_SLIDER_REVIEWS = [
  {
    id: 1,
    link: "https://www.youtube.com/embed/Z74rPMGQzCY?si=OlMlOP1gQrQsSDAN&amp;start=0",
  },
  {
    id: 2,
    link: "https://www.youtube.com/embed/1N1C_emq7n8?si=IAgGi3Lf18yjPEfQ&amp;start=0",
  },
  {
    id: 3,
    link: "https://www.youtube.com/embed/yEs3R3PlclY?si=bCYckRZX-7CPx6Gj&amp;start=0",
  },
  {
    id: 4,
    link: "https://www.youtube.com/embed/a9xwl6HwySw?si=IK82nLblMVOpW5ns&amp;start=0",
  },
  {
    id: 5,
    link: "https://www.youtube.com/embed/fABhzcP_lx4?si=xaS9kuhGey3Mk3Jn&amp;start=0",
  },
  {
    id: 6,
    link: "https://www.youtube.com/embed/rMQiF4TaRvo?si=KG9wyL0qftSmrXbQ&amp;start=181",
  },
  {
    id: 7,
    link: "https://www.youtube.com/embed/CnI7_gchq64?si=bVXuFEBPYhdZuxVb&amp;start=181",
  },
];

export const LINES_BANNER_TITLE = "PODONKI";

export const LINES_BANNER_TEXT =
  "ЭТО СОВЕРШЕННО ДРУГОЙ НАКУР, СОВЕРШЕННО ДРУГАЯ ФОРМУЛА, НИКАКОГО ТХ";

export const LINES_LIST_TITLE = "ТОВАРЫ ЛИНЕЙКИ";

export const FOOTER_TITLE = "СВЯЖИТЕСЬ С НАМИ!";

export const FOOTER_ANNOUNCEMENT = "ПОЛУЧИТЕ ПРАЙС И ЗАКАЖИТЕ ТОВАР УЖЕ СЕЙЧАС";

export const FOOTER_EMAIL = "ADMIN@MAIL.RU";

export const FOOTER_PHONE_NUMBER = "+7(900) 000-00-01";

export const FOOTER_WARNINGS = [
  "ИНФОРМАЦИЯ ПРЕДСТАВЛЕННАЯ НА САЙТЕ КОМПАНИИ OPT-DISTR НОСИТ ИСКЛЮЧИТЕЛЬНО ОЗНАКОМИТЕЛЬНЫЙ ХАРАКТЕР",
  "МАТЕРИАЛЫ НА САЙТЕ НЕ ЯВЛЯЮТСЯ ПРЕДЛОЖЕНИЯМИ О ПРЯМОЙ ПОКУПКЕ ИЛИ ПРОДАЖЕ ПРОДУКЦИИ КОМПАНИИ",
];

export const FOOTER_AGE = "18+";

export const FOOTER_SOCIALS = [
  {
    id: 1,
    icon: <Telegram />,
    text: "TELEGRAM",
  },
  {
    id: 2,
    icon: <Whatsapp />,
    text: "WHATSAPP",
  },
];

export const FOOTER_TELEGRAM_LINK = "https://t.me/opt_distr";

export const POPULAR_GOODS = [
  {
    id: 1,
    name: "BLAZE",
    line: "PODONKI LAST HAP'KA",
    image: trainlabPodonkiLastHapkaBlaze,
  },
  {
    id: 2,
    name: "BLOODY VALENTINE'S",
    line: "PODONKI LAST HAP'KA",
    image: trainlabPodonkiLastHapkaBloodyValentines,
  },
  {
    id: 3,
    name: "BORN THIS WAY",
    line: "PODONKI LAST HAP'KA",
    image: trainlabPodonkiLastHapkaBornThisWay,
  },
  {
    id: 4,
    name: "CRASH TEST",
    line: "PODONKI LAST HAP'KA",
    image: trainlabPodonkiLastHapkaCrashTest,
  },
  {
    id: 5,
    name: "HIGH VOLTAGE",
    line: "PODONKI LAST HAP'KA",
    image: trainlabPodonkiLastHapkaHighVoltage,
  },
];

export const SLIDER_POTS = [
  {
    id: 1,
    image: trainlabPodonkiLastHapkaBlaze,
    line: "PODONKI LAST HAP'KA",
  },
  {
    id: 2,
    image: trainlabPodonkiLastHapkaBloodyValentines,
    line: "PODONKI LAST HAP'KA",
  },
  {
    id: 3,
    image: trainlabPodonkiLastHapkaBornThisWay,
    line: "PODONKI LAST HAP'KA",
  },
  {
    id: 4,
    image: trainlabPodonkiLastHapkaCrashTest,
    line: "PODONKI LAST HAP'KA",
  },
  {
    id: 5,
    image: trainlabPodonkiLastHapkaHighVoltage,
    line: "PODONKI LAST HAP'KA",
  },
  {
    id: 6,
    image: trainlabPodonkiLastHapkaInsertHere,
    line: "PODONKI LAST HAP'KA",
  },
  {
    id: 7,
    image: trainlabPodonkiLastHapkaKindALonely,
    line: "PODONKI LAST HAP'KA",
  },
  {
    id: 8,
    image: trainlabPodonkiLastHapkaMadnessWeek,
    line: "PODONKI LAST HAP'KA",
  },
  {
    id: 9,
    image: trainlabPodonkiLastHapkaOnHold,
    line: "PODONKI LAST HAP'KA",
  },
  {
    id: 10,
    image: trainlabPodonkiLastHapkaPoorPot,
    line: "PODONKI LAST HAP'KA",
  },
];

export const LINES = [TRAINLAB_LINES, HUSKY_LINES, VLIQ_LINES];

export const DEVICES = [TRAINLAB_DEVICES, HUSKY_DEVICES, VLIQ_DEVICES]
