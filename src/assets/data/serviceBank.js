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

export const shootingBank = [
    {
        name: `Индивидуальная фотосессия`,
        description: `60 фотографий с цветокоррекцией, 20 фотографий с ретушью, 10 фотографий, обработанных в нейросетях.`,
        price: `800₪ за 1 час.`,
        images: [p1, p2, p3, p4, p5, p6, p7],
    },
    {
        name: `Групповая фотосессия`,
        description: `80 обработанных фотографий, 20 фотографий с ретушью, 10 фотографий, обработанных в нейросетях.`,
        price: `900₪ за 1 час.`,
        images: [g1, g2, g3, g4, g5, g6],
    },
    {
        name: `Контент-съемка`,
        description: `100 обработанных фотографий, 2 смонтированных рилса, все исходники видео.`,
        price: `1100₪ за 1.5 часа.`,
        images: [c1, c2, c3, c4, c5, c6],
    },
    {
        name: `Репортажная фотосъемка мероприятий`,
        description: `100 обработанных фото за час.`,
        price: `1000₪ за 2 часа. За каждый дополнительный час 300 ₪.`,
        images: [e1, e2, e3, e4, e5, e6, e7, e8],
    },
];

export const designBank = [
    {
        name: `test`,
        description: `It's testing description`,
        price: `100$`,
        images: [],
    },
    {
        name: `test`,
        description: `It's testing description`,
        price: `100$`,
        images: [`IMAGE`],
    },
    {
        name: `test`,
        description: `It's testing description`,
        price: `100$`,
        images: [],
    },
];
