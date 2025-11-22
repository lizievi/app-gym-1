import Logo from "../src/assets/img/header/logo.png";
import ResistanceImg from "../src/assets/img/workouts/resistance.png";
import BoxingImg from "../src/assets/img/workouts/boxing.png";
import BodyPumpImg from "../src/assets/img/workouts/body-pump.png";
import YogaImg from "../src/assets/img/workouts/yoga.png";
import FullBodyImg from "../src/assets/img/workouts/full-body.png";
import FitnessImg from "../src/assets/img/workouts/fitness.png";
import BattleRopeImg from "../src/assets/img/workouts/battle-rope.png";
import CommunityImg1 from "../src/assets/img/community/img1.png";
import CommunityImg2 from "../src/assets/img/community/img2.png";
import CommunityImg3 from "../src/assets/img/community/img3.png";
import CommunityImg4 from "../src/assets/img/community/img4.png";
import JoinImg from "../src/assets/img/join/woman.png";
import UsersIcn from "../src/assets/img/about/icons/users-icn.svg";
import CalendarIcn from "../src/assets/img/workouts/icons/calendar.svg";
import PriceIcn from "../src/assets/img/pricing/icons/price.svg";
import CommunityIcn from "../src/assets/img/community/icons/community-icn.svg";
import QuestionMarkIcn from "../src/assets/img/faq/icons/question-mark.svg";

// --- 2. Definición de Interfaces para Estructuras de Datos ---

interface NavItem {
  name: string;
  href: string;
}

interface HeaderData {
  logo: string; // La ruta de la imagen importada
  btnLoginText: string;
  btnSignupText: string;
}

interface BannerData {
  titlePart1: string;
  titlePart2: string;
  subtitle: string;
  textBtn: string;
  img: string; // Vacío, pero se tipa como string
}

interface AboutData {
  icon: string;
  title: string;
  subtitle1: string;
  subtitle2: string;
  link: string;
}

interface WorkoutProgram {
  image: string;
  name: string;
}

interface WorkoutsData {
  icon: string;
  title: string;
  programs: WorkoutProgram[];
}

interface PricingListItem {
  name: string;
}

interface PricingPlan {
  name: string;
  price: string;
  list: PricingListItem[];
  delay: number;
}

interface PricingData {
  icon: string;
  title: string;
  plans: PricingPlan[];
}

interface Testimonial {
  image: string;
  name: string;
  message: string;
}

interface CommunityData {
  icon: string;
  title: string;
  testimonials: Testimonial[];
}

interface AccordionItem {
  question: string;
  answer: string;
}

interface FaqData {
  icon: string;
  title: string;
  accordions: AccordionItem[];
}

interface JoinData {
  image: string;
  title: string;
  subtitle: string;
  btnText: string;
}

interface FooterData {
  logo: string;
  copyrightText: string;
}

// --- 3. Exportación de Constantes Tipeadas ---

// export const header: HeaderData = {
//   logo: Logo,
//   btnLoginText: 'Log in',
//   btnSignupText: 'Sign Up',
// };

export const header: HeaderData = {
  logo: Logo,
  btnLoginText: "Iniciar sesión",
  btnSignupText: "Registrarse",
};

// export const nav: NavItem[] = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/' },
//   { name: 'Workouts', href: '/' },
//   { name: 'Pricing', href: '/' },
//   { name: 'Community', href: '/' },
//   { name: 'FAQ', href: '/' },
// ];

export const nav: NavItem[] = [
  { name: "Inicio", href: "/" },
  { name: "Sobre nosotros", href: "/" },
  { name: "Entrenamientos", href: "/" },
  { name: "Precios", href: "/" },
  { name: "Comunidad", href: "/" },
  { name: "Preguntas frecuentes", href: "/" },
];

// export const banner: BannerData = {
//   titlePart1: 'Get the best part of your day',
//   titlePart2: '– you fit here.',
//   subtitle:
//     'We provide serious fitness but within a fun and friendly, safe space.',
//   textBtn: 'Join Now',
//   img: '',
// };

export const banner: BannerData = {
  titlePart1: "Consigue la mejor parte de tu día",
  titlePart2: "– tú encajas aquí.",
  subtitle:
    "Ofrecemos fitness serio pero dentro de un ambiente divertido, amigable y seguro.",
  textBtn: "Únete Ahora",
  img: "",
};

// export const about: AboutData = {
//   icon: UsersIcn,
//   title: 'Our misson',
//   subtitle1:
//     'We are distinguished by our unsurpassed motivating atmosphere, knowledgeable staff, and premier exercise equipment, which supports our members in meeting their individual fitness goals.',
//   subtitle2:
//     'The strength of our heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves.',
//   link: 'Join Now',
// };

export const about: AboutData = {
  icon: UsersIcn,
  title: "Nuestra misión",
  subtitle1:
    "Nos distinguimos por nuestra inigualable atmósfera motivadora, personal experto y equipo de ejercicio de primera clase, lo que apoya a nuestros miembros a alcanzar sus metas individuales de fitness.",
  subtitle2:
    "La fuerza de nuestra identidad sincera es utilizada para inspirar a cada persona que pone un pie en nuestros gimnasios a superarse.",
  link: "Únete Ahora",
};

// export const workouts: WorkoutsData = {
//   icon: CalendarIcn,
//   title: "Training programs",
//   programs: [
//     {
//       image: ResistanceImg,
//       name: "Resistance",
//     },
//     {
//       image: BoxingImg,
//       name: "Boxing",
//     },
//     {
//       image: BodyPumpImg,
//       name: "Body Pump",
//     },
//     {
//       image: YogaImg,
//       name: "Yoga",
//     },
//     {
//       image: FullBodyImg,
//       name: "Full Body",
//     },
//     {
//       image: FitnessImg,
//       name: "Fitness",
//     },
//     {
//       image: BattleRopeImg,
//       name: "Battle Rope",
//     },
//   ],
// };

export const workouts: WorkoutsData = {
  icon: CalendarIcn,
  title: "Programas de entrenamiento",
  programs: [
    {
      image: ResistanceImg,
      name: "Resistencia",
    },
    {
      image: BoxingImg,
      name: "Boxeo",
    },
    {
      image: BodyPumpImg,
      name: "Body Pump",
    },
    {
      image: YogaImg,
      name: "Yoga",
    },
    {
      image: FullBodyImg,
      name: "Cuerpo Completo",
    },
    {
      image: FitnessImg,
      name: "Fitness",
    },
    {
      image: BattleRopeImg,
      name: "Battle Rope",
    },
  ],
};

// export const pricing: PricingData = {
//   icon: PriceIcn,
//   title: "Pricing plan",
//   plans: [
//     {
//       name: "Basic",
//       price: "20",
//       list: [
//         { name: "unlimited gym access" },
//         { name: "1 training programs" },
//         { name: "free fitness consultation" },
//       ],
//       delay: 600,
//     },
//     {
//       name: "Premium",
//       price: "35",
//       list: [
//         { name: "unlimited gym access" },
//         { name: "5 training programs" },
//         { name: "free fitness consultation" },
//         { name: "personal trainer" },
//       ],
//       delay: 800,
//     },
//     {
//       name: "Elite",
//       price: "49",
//       list: [
//         { name: "unlimited gym access" },
//         { name: "all training programs" },
//         { name: "free fitness consultation" },
//         { name: "personal trainer" },
//         { name: "50% off drinks" },
//       ],
//       delay: 1000,
//     },
//   ],
// };

export const pricing: PricingData = {
  icon: PriceIcn,
  title: "Plan de precios",
  plans: [
    {
      name: "Básico",
      price: "50",
      list: [
        { name: "acceso ilimitado al gimnasio" },
        { name: "1 programa de entrenamiento" },
        { name: "consulta de fitness gratuita" },
      ],
      delay: 600,
    },
    {
      name: "Premium",
      price: "70",
      list: [
        { name: "acceso ilimitado al gimnasio" },
        { name: "5 programas de entrenamiento" },
        { name: "consulta de fitness gratuita" },
        { name: "entrenador personal" },
      ],
      delay: 800,
    },
    {
      name: "Élite",
      price: "80",
      list: [
        { name: "acceso ilimitado al gimnasio" },
        { name: "todos los programas de entrenamiento" },
        { name: "consulta de fitness gratuita" },
        { name: "entrenador personal" },
        { name: "4 sesiones de zumba gratis" },
      ],
      delay: 1000,
    },
  ],
};

// export const community: CommunityData = {
//   icon: CommunityIcn,
//   title: "Community",
//   testimonials: [
//     {
//       image: CommunityImg1,
//       name: "Mark A.",
//       message:
//         "“Great location, great price and great, helpful people. What to want more?”",
//     },
//     {
//       image: CommunityImg2,
//       name: "Lauren K.",
//       message:
//         "“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”",
//     },
//     {
//       image: CommunityImg3,
//       name: "Jhon D.",
//       message:
//         "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
//     },
//     {
//       image: CommunityImg4,
//       name: "Anne R.",
//       message:
//         "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
//     },
//   ],
// };

export const community: CommunityData = {
  icon: CommunityIcn,
  title: "Comunidad",
  testimonials: [
    {
      image: CommunityImg1,
      name: "Mark A.",
      message:
        "“Excelente ubicación, excelente precio y gente genial y servicial. ¿Qué más se puede pedir?”",
    },
    {
      image: CommunityImg2,
      name: "Lauren K.",
      message:
        "“Gymme cambió mi vida. No solo físicamente sino también mentalmente. Soy una mejor madre, y un mejor ser humano en general gracias a este gimnasio.”",
    },
    {
      image: CommunityImg3,
      name: "Jhon D.",
      message:
        "“¡Me encantan estos entrenamientos! Los entrenadores están informados y motivan. ¡Gymme es maravilloso!”",
    },
    {
      image: CommunityImg4,
      name: "Anne R.",
      message:
        "“¡Me encantan estos entrenamientos! Los entrenadores están informados y motivan. ¡Gymme es maravilloso!”",
    },
  ],
};

// export const faq: FaqData = {
//   icon: QuestionMarkIcn,
//   title: "FAQ",
//   accordions: [
//     {
//       question: "How can I book a workout class?",
//       answer:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
//     },
//     {
//       question: "Can I pay by cash for my membership?",
//       answer:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
//     },
//     {
//       question: "What age do I need to be to join?",
//       answer:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
//     },
//     {
//       question: "Are there any lockers?",
//       answer:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
//     },
//     {
//       question: "How do I cancel my membership?",
//       answer:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
//     },
//     {
//       question: "Is there water available at the gym?",
//       answer:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
//     },
//   ],
// };

export const faq: FaqData = {
  icon: QuestionMarkIcn, // Asumo que QuestionMarkIcn es el icono de interrogación que usas
  title: "Preguntas Frecuentes",
  accordions: [
    {
      question: "¿Cómo puedo reservar una clase de entrenamiento?",
      answer:
        "Puedes reservar fácilmente a través de nuestra aplicación móvil 'Fitness Gym' (disponible para iOS y Android). Solo tienes que ir a la sección 'Clases', seleccionar tu programa y horario, y confirmar tu asistencia. ¡Te esperamos!",
    },
    {
      question: "¿Puedo pagar mi membresía en efectivo?",
      answer:
        "Priorizamos la comodidad y la seguridad. Aceptamos pagos con tarjeta de crédito/débito (Visa, Mastercard, Amex) y transferencias bancarias. Por el momento, no aceptamos pagos en efectivo.",
    },
    {
      question: "¿Qué edad necesito tener para unirme?",
      answer:
        "La edad mínima para obtener una membresía es de 16 años. Los menores de 18 años deben presentar una autorización firmada por un padre o tutor legal en el momento de la inscripción.",
    },
    {
      question: "¿Hay casilleros disponibles?",
      answer:
        "Sí, disponemos de casilleros seguros y gratuitos para el uso diario. Por favor, asegúrate de traer tu propio candado. Por razones de seguridad, los casilleros no pueden dejarse ocupados durante la noche.",
    },
    {
      question: "¿Cómo cancelo mi membresía?",
      answer:
        "Si necesitas cancelar, por favor envía una solicitud formal por escrito a nuestro correo de atención al cliente o habla directamente con el gerente de turno. Se requiere un aviso previo de 30 días para procesar la cancelación sin cargos adicionales.",
    },
    {
      question: "¿Hay agua disponible en el gimnasio?",
      answer:
        "Sí, contamos con bebederos de agua potable gratuitos en la zona de pesas y cardio. Además, tenemos una estación de bebidas energéticas y agua embotellada disponible para la venta en nuestra recepción.",
    },
  ],
};

// export const join: JoinData = {
//   image: JoinImg,
//   title: "Wanna join & have fun?",
//   subtitle:
//     "We’ll keep you updated on the things you need to know about Gymme. Nothing more, nothing less.",
//   btnText: "Join now",
// };

// export const footer: FooterData = {
//   logo: Logo,
//   copyrightText: "All rights reserved. Gymme 2022.",
// };

export const join: JoinData = {
  image: JoinImg,
  title: "Quieres unirte y divertirte?",
  subtitle:
    "Te mantendremos al día con las cosas que necesitas saber sobre Gymme. Nada más, nada menos.",
  btnText: "Únete ahora",
};

export const footer: FooterData = {
  logo: Logo,
  copyrightText: "Todos los derechos reservados. Gymme 2022.",
};
