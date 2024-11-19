import { MapPin } from "lucide-react";
import { HelpCircle } from "lucide-react";
import { Users } from "lucide-react";
import { AlertTriangle } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Calendar } from "lucide-react";
import { User } from "lucide-react";
import { Edit } from "lucide-react";
import { Settings } from "lucide-react";
import { LogOut } from "lucide-react";
import { Search } from "lucide-react"; 
import { Dog } from "lucide-react";
import { Cat } from "lucide-react";
import { Fish } from "lucide-react";
import { Bird } from "lucide-react";
import { Bone } from "lucide-react";
import { Package } from "lucide-react";
import { Star } from "lucide-react";


export const Menus = [
  {
    name: "Veterinarios y Servicios",
    subMenuHeading: ["Ubicaciones", "Citas", "Productos"],
    subMenu: [
      {
        name: "Encuentra Veterinarios",
        desc: "Ubica los veterinarios más cercanos a ti",
        icon: MapPin,
      },
      {
        name: "Compra Productos",
        desc: "Adquiere artículos esenciales para tu mascota",
        icon: ShoppingCart,
      },
      {
        name: "Buscar",
        desc: "Busca veterinarios y servicios fácilmente",
        icon: Search,
      },
    ],
    gridCols: 3,
  },
  {
    name: "Tienda",
    subMenuHeading: ["Categorías", "Ofertas", "Populares"],
    subMenu: [
      {
        name: "Perros",
        desc: "Accesorios, alimentos y más",
        icon: Dog,
      },
      {
        name: "Gatos",
        desc: "Juguetes, rascadores y comida",
        icon: Cat,
      },
      {
        name: "Acuarios",
        desc: "Decoración y alimentos para peces",
        icon: Fish,
      },
      {
        name: "Aves",
        desc: "Jaulas, comida y accesorios",
        icon: Bird,
      },
      {
        name: "Snacks",
        desc: "Premios para consentirlos",
        icon: Bone,
      },
      {
        name: "Paquetes",
        desc: "Combos y promociones",
        icon: Package,
      },
      {
        name: "Recomendados",
        desc: "Los productos favoritos",
        icon: Star,
      },
    ],
    gridCols: 3,
  },
  {
    name: "Soporte",
    subMenu: [
      {
        name: "Ayuda",
        desc: "Centro de soporte para tus dudas",
        icon: HelpCircle,
      },
      {
        name: "Comunidad",
        desc: "Conéctate con otros amantes de mascotas",
        icon: Users,
      },
      {
        name: "Emergencias",
        desc: "Encuentra ayuda urgente para tu mascota",
        icon: AlertTriangle,
      },
      {
        name: "Reservas",
        desc: "Gestiona tus citas con veterinarios",
        icon: Calendar,
      },
      {
        name: "Productos",
        desc: "Compra artículos esenciales para tu mascota",
        icon: ShoppingCart,
      },
      {
        name: "Blog",
        desc: "Lee artículos sobre el cuidado de mascotas",
        icon: BookOpen,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Perfil",
    subMenuHeading: ["Resumen", "Opciones"],
    subMenu: [
      {
        name: "Información Personal",
        desc: "Ver y editar tus datos",
        icon: User,
      },
      {
        name: "Editar Perfil",
        desc: "Actualizar tu perfil",
        icon: Edit,
      },
      {
        name: "Configuración",
        desc: "Ajustes de cuenta",
        icon: Settings,
      },
      {
        name: "Cerrar Sesión",
        desc: "Salir de tu cuenta",
        icon: LogOut,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Contacto",
    
  },
];