import {
  FaUserGraduate,
  FaHome,
  FaUserAlt,
  FaUsers,
  FaCog,
} from 'react-icons/fa';
import { MdDashboard, MdBookmark } from 'react-icons/md';
import { BiMoneyWithdraw } from 'react-icons/bi';
import {
  BsFillBuildingFill, Bs1Circle, Bs2Circle, Bs3Circle,
} from 'react-icons/bs';


// Sidebar Data

export const SidebarData = [

  {
    icon: BsFillBuildingFill,
    heading: 'Departamentos',
  },
  {
    icon: FaUserAlt,
    heading: 'Perfil',
  },
  {
    icon: FaUserGraduate,
    heading: 'Pastores',
  },

  {
    icon: FaUsers,
    heading: 'Pedidos',
  },

  // {
  //   icon: MdBookmark,
  //   heading: 'Cursos',
  // },

  {
    icon: FaCog,
    heading: 'Config',
  },

];


export const data = [
  {
    id: 1,
    name: {
      first: 'John',
      last: 'Pedro',
    },
    total: 2795.95,
    status: 'Esperando',
    method: '10/3/2023',
    date: 'Há 15 minutos',
  },
  {
    id: 2,
    name: {
      first: 'Adão',
      last: 'Marcos',
    },
    total: 1195.95,
    status: 'Processando',
    method: '10/3/2023',
    date: 'Há 23 minutos',
  },
  {
    id: 3,
    name: {
      first: 'Sarah',
      last: 'Pedro',
    },
    total: 495.85,
    status: 'Completado',
    method: '31/4/223',
    date: '1 Horas',
  },
  {
    id: 4,
    name: {
      first: 'Josepha',
      last: 'Paula',
    },
    total: 150.45,
    status: 'Processando',
    method: 'MasterCard',
    date: '1 Horas',
  },
  {
    id: 5,
    name: {
      first: 'Steve',
      last: 'Harding',
    },
    total: 175.25,
    status: 'Esperando',
    method: '10/3/2023',
    date: '2 Horas',
  },
  {
    id: 6,
    name: {
      first: 'Laura',
      last: 'Croft',
    },
    total: 1295.75,
    status: 'Completado',
    method: '9/11/2023',
    date: 'Há 8 horas ',
  },
 
  
];
