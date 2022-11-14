import { RiHome7Fill } from "react-icons/ri";
import { IconType } from "react-icons/lib";
import { CiHashtag } from "react-icons/ci";
import { AiOutlineBell } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";



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
  }
];

export { Data };
