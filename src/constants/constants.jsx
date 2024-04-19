import Whatsapp from "../assets/icons/whatsapp.svg?react";
import Telegram from "../assets/icons/telegram.svg?react";

export const PATHS = {
  home: "/",
  lines: "/lines",
  delivery: "/delivery",
};

export const HEADER_NAVS = [
  {
    id: 1,
    text: "ДЕВАЙСЫ",
    path: PATHS.home,
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

export const CONTAINED_BUTTON_STYLES = {
  height: "fit-content",
  fontFamily: "Roboto Condensed Variable",
  padding: "16px 56px",
  fontSize: "20px",
  fontWeight: 700,
  backgroundColor: "accentColor.main",
  borderRadius: "0px",
  "&:hover": {
    backgroundColor: "accentColor.main",
  },
};

export const OUTLINED_BUTTON_STYLES = {
  borderWidth: "3px",
  borderStyle: "solid",
  borderColor: "accentColor.main",
  borderRadius: 0,
  color: "whiteColor.main",
  width: "fit-content",
  padding: "16px 56px",
  fontFamily: "Roboto Condensed Variable",
  fontSize: "20px",
  fontWeight: 700,
  "&:hover": {
    borderColor: "accentColor.main",
    borderWidth: "3px",
  },
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

export const HOME_OUR_LINES_TITLE = "НАШИ ЛИНЕЙКИ"

export const HOME_REVIEWS_TITLE = "ОБЗОРЫ"

export const SLIDER_PODONKI_ADDITION = "PODONKI"

export const HOME_SLIDER_REVIEWS = [
  {
    id: 1,
    link: "https://www.youtube.com/embed/Z74rPMGQzCY?si=OlMlOP1gQrQsSDAN&amp;start=0" 
  },
  {
    id: 2,
    link: "https://www.youtube.com/embed/1N1C_emq7n8?si=IAgGi3Lf18yjPEfQ&amp;start=0",
  },
  {
    id: 3,
    link: "https://www.youtube.com/embed/yEs3R3PlclY?si=bCYckRZX-7CPx6Gj&amp;start=0"
  },
  {
    id: 4,
    link: "https://www.youtube.com/embed/a9xwl6HwySw?si=IK82nLblMVOpW5ns&amp;start=0"
  },
  {
    id: 5,
    link: "https://www.youtube.com/embed/fABhzcP_lx4?si=xaS9kuhGey3Mk3Jn&amp;start=0" 
  },
  {
    id: 6,
    link: "https://www.youtube.com/embed/rMQiF4TaRvo?si=KG9wyL0qftSmrXbQ&amp;start=181" 
  },
  {
    id: 7,
    link: "https://www.youtube.com/embed/CnI7_gchq64?si=bVXuFEBPYhdZuxVb&amp;start=181"
  },
]

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
