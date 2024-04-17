import Whatsapp from "../assets/icons/whatsapp.svg?react"
import Telegram from "../assets/icons/telegram.svg?react"

export const PATHS = {
  home: "/",
  lines: "/lines",
  delivery: "/delivery",
}

export const HEADER_NAVS = [
  {
    id: 1,
    text: "ДЕВАЙСЫ",
    path: PATHS.home,
    isMenu: true
  },
  {
    id: 2,
    text: "ЛИНЕЙКИ",
    path: PATHS.lines,
    isMenu: true
  },
  {
    id: 3,
    text: "НОВИНКИ",
    path: PATHS.home,
    isMenu: false
  },
  {
    id: 4,
    text: "ДОСТАВКА",
    path: PATHS.delivery,
    isMenu: false
  },
  {
    id: 5,
    text: "КОНТАКТЫ",
    path: PATHS.home,
    isMenu: false
  },
]

export const HEADER_BUTTON_TEXT = "ЗАКАЗАТЬ"

export const BANNER_TITLE = "ДОСТАВКА"

export const DELIVERY_ADVANTEGES = [
  {
    id: 1,
    text: "КРУТАЯ ДОСТАВКА"
  },
  {
    id: 2,
    text: "КРУТАЯ ДОСТАВКА"
  },
  {
    id: 3,
    text: "КРУТАЯ ДОСТАВКА"
  },
  {
    id: 4,
    text: "КРУТАЯ ДОСТАВКА"
  },
  {
    id: 5,
    text: "КРУТАЯ ДОСТАВКА"
  },
  {
    id: 6,
    text: "КРУТАЯ ДОСТАВКА"
  }
]

export const DELIVERY_TEXT = "У НАС САМАЯ КРУТАЯ ДОСТАВКА У НАС САМАЯ КРУТАЯ ДОСТАВКА У НАС САМАЯ КРУТАЯ ДОСТАВКА У НАС САМАЯ КРУТАЯ ДОСТАВКА У НАС САМАЯ КРУТАЯ ДОСТАВКА"

export const DELIVERY_BUTTON_TEXT = "ЗАКАЗАТЬ"

export const FOOTER_TITLE = "СВЯЖИТЕСЬ С НАМИ!"

export const FOOTER_ANNOUNCEMENT = "ПОЛУЧИТЕ ПРАЙС И ЗАКАЖИТЕ ТОВАР УЖЕ СЕЙЧАС"

export const FOOTER_EMAIL = "ADMIN@MAIL.RU"

export const FOOTER_PHONE_NUMBER = "+7(900) 000-00-01"

export const FOOTER_WARNINGS = [
  "ИНФОРМАЦИЯ ПРЕДСТАВЛЕННАЯ НА САЙТЕ КОМПАНИИ OPT-DISTR НОСИТ ИСКЛЮЧИТЕЛЬНО ОЗНАКОМИТЕЛЬНЫЙ ХАРАКТЕР",
  "МАТЕРИАЛЫ НА САЙТЕ НЕ ЯВЛЯЮТСЯ ПРЕДЛОЖЕНИЯМИ О ПРЯМОЙ ПОКУПКЕ ИЛИ ПРОДАЖЕ ПРОДУКЦИИ КОМПАНИИ"
]

export const FOOTER_AGE = "18+"

export const FOOTER_SOCIALS = [
  {
    id: 1, 
    icon: <Telegram />,
    text: "TELEGRAM"
  },
  {
    id: 2,
    icon: <Whatsapp />,
    text: "WHATSAPP"
  }
]