import { RiFileList2Line, RiHome7Fill } from "react-icons/ri";
import { IconType } from "react-icons/lib";
import {CiHashtag } from "react-icons/ci";
import { AiOutlineBell } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";

import {SlFlag} from 'react-icons/sl'
import {CgMoreO} from 'react-icons/cg'

interface NavbarProps {
  Title: string;
  Icon: IconType;
}

const Data: NavbarProps[] = [
  {
    Title: "Página inicial",
    Icon: RiHome7Fill,
  },
  {
    Title: "Explorar",
    Icon: CiHashtag,
  },
  {
    Title: "Notificações",
    Icon: AiOutlineBell,
  },
  {
    Title: "Mensagens",
    Icon: FiMail
  },
  {
    Title: "Perfil",
    Icon: IoPersonOutline
  },
  {
    Title: "Itens salvos",
    Icon: SlFlag
  },
  {
    Title: "Listas",
    Icon: RiFileList2Line
  },
  {
    Title: "Mais",
    Icon: CgMoreO
  }
];

export { Data };
