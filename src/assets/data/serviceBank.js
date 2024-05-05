import p1 from "../media/personal_photoshoot/1.jpg";
import p2 from "../media/personal_photoshoot/2.jpg";
import p3 from "../media/personal_photoshoot/3.jpg";
import p4 from "../media/personal_photoshoot/4.jpg";
import p5 from "../media/personal_photoshoot/5.jpg";
import p6 from "../media/personal_photoshoot/6.jpg";
import p7 from "../media/personal_photoshoot/7.jpg";

import g1 from "../media/group_photoshoot/1.jpg";
import g2 from "../media/group_photoshoot/2.jpg";
import g3 from "../media/group_photoshoot/3.jpg";
import g4 from "../media/group_photoshoot/4.jpg";
import g5 from "../media/group_photoshoot/5.jpg";
import g6 from "../media/group_photoshoot/6.jpg";

import c1 from "../media/content_photoshoot/1.jpg";
import c2 from "../media/content_photoshoot/2.jpg";
import c3 from "../media/content_photoshoot/3.jpg";
import c4 from "../media/content_photoshoot/4.jpg";
import c5 from "../media/content_photoshoot/5.jpg";
import c6 from "../media/content_photoshoot/6.jpg";

import e1 from "../media/event_photoshoot/1.jpg";
import e2 from "../media/event_photoshoot/2.jpg";
import e3 from "../media/event_photoshoot/3.jpg";
import e4 from "../media/event_photoshoot/4.jpg";
import e5 from "../media/event_photoshoot/5.jpg";
import e6 from "../media/event_photoshoot/6.jpg";
import e7 from "../media/event_photoshoot/7.jpg";
import e8 from "../media/event_photoshoot/8.jpg";

import d1 from "../media/design/d1.gif";
import d2 from "../media/design/d2.gif";
import d3 from "../media/design/d3.gif";
import d4 from "../media/design/d4.gif";
import d5 from "../media/design/d5.jpg";
import d6 from "../media/design/d6.jpg";
import d7 from "../media/design/d7.jpg";

export const shootingBank = [
    {
        name: `ИНДИВИДУАЛЬНАЯ ФОТОСЕССИЯ`,
        description: `60 фотографий с цветокоррекцией, 20 фотографий с ретушью, 10 фотографий, обработанных в нейросетях.`,
        price: `800₪ за 1 час.`,
        images: [p1, p2, p3, p4, p5, p6, p7],
        videos: [],
        isVideo: false,
    },
    {
        name: `ГРУППОВАЯ ФОТОСЕССИЯ`,
        description: `80 обработанных фотографий, 20 фотографий с ретушью, 10 фотографий, обработанных в нейросетях.`,
        price: `900₪ за 1 час.`,
        images: [g1, g2, g3, g4, g5, g6],
        videos: [],
        isVideo: false,
    },
    {
        name: `КОНТЕНТ-СЪЕМКА`,
        description: `100 обработанных фотографий, 2 смонтированных рилса, все исходники видео.`,
        price: `1100₪ за 1.5 часа.`,
        images: [c1, c2, c3, c4, c5, c6],
        videos: [],
        isVideo: false,
    },
    {
        name: `РЕПОРТАЖНАЯ ФОТОСЪЕМКА МЕРОПРИЯТИЙ`,
        description: `100 обработанных фото за час.`,
        price: `1000₪ за 2 часа. Каждый дополнительный час 300 ₪.`,
        images: [e1, e2, e3, e4, e5, e6, e7, e8],
        videos: [],
        isVideo: false,
    },
];

export const designBank = [
    {
        name: `ВИЗИТНЫЕ КАРТЫ`,
        description: `Дизайн без / с возможностью правок `,
        price: ` 200₪ || 450₪`,
        images: [d5],
        videos: [],
        isVideo: false,
    },
    {
        name: `ХАЙЛАЙТЫ ДЛЯ ИНСТАГРАМ`,
        description: `За иконку`,
        price: `20₪`,
        images: [d6],
        videos: [],
        isVideo: false,
    },
    {
        name: `МОНТАЖ РИЛС`,
        description: `Один ролик в зависимости от сложности`,
        price: `175-500₪`,
        images: [],
        videos: [],
        isVideo: false,
    },
    {
        name: `ЦВЕТОКОРРЕКЦИЯ`,
        description: `10 || 50 || 100 || 200 фотографий`,
        price: `10₪ || 50₪ || 100₪ || 200₪`,
        images: [],
        videos: [d1],
        isVideo: true,
    },
    {
        name: `ОБРАБОТКА В НЕЙРОСЕТЯХ`,
        description: `Одно фото в зависимости от сложности`,
        price: `30-400₪`,
        images: [],
        videos: [d2, d3, d4],
        isVideo: true,
    },
    {
        name: `ГЕНЕРАЦИЯ ИЗОБРАЖЕНИЙ В НЕЙРОСЕТЯХ`,
        description: `Базовая || Сложная`,
        price: `35-175₪ || 175-700₪`,
        images: [d7],
        videos: [],
        isVideo: false,
    },
    {
        name: `ПРОЕКТ НА МЕСЯЦ`,
        description: `15 сценариев`,
        price: `800₪`,
        images: [],
        videos: [],
        isVideo: false,
    },
    {
        name: `СТОРОИТЕЛЛИНГ`,
        description: `Одна тема до 10 сторис`,
        price: `100₪`,
        images: [],
        videos: [],
        isVideo: false,
    },
    {
        name: `ОБЛОЖКИ ДЛЯ ЮТУБА`,
        description: `Простой || Расширенный (с пользовательской графикой)`,
        price: `100-350₪ || 1050-1750₪`,
        images: [],
        videos: [],
        isVideo: false,
    },
    {
        name: `КОНСУЛЬТАЦИЯ`,
        description: `По любым вопросам`,
        price: `350₪`,
        images: [],
        videos: [],
        isVideo: false,
    },
];
