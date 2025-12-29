import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const socialLinks = [
  {
    icon: FaWhatsapp,
    href: "https://wa.me/919876543210",
    label: "WhatsApp",
    color: "hover:bg-green-500",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/zeanclasses",
    label: "Instagram",
    color: "hover:bg-pink-600",
  },
  {
    icon: FaFacebook,
    href: "https://facebook.com/zeanclasses",
    label: "Facebook",
    color: "hover:bg-blue-800",
  },
  {
    icon: IoMdMail,
    href: "mailto:info@zeanclassess.com",
    label: "Email",
    color: "hover:bg-red-600",
  },
];

export default function SocialBar() {
  return (
    <div className="fixed right-0 bottom-24 md:bottom-40 z-40 opacity-70">
      <div className="flex flex-col gap-2 bg-blue-600 shadow-lg rounded-l-lg p-2 border border-blue-200 opacity-100">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 text-gray-700 transition-colors rounded-lg ${link.color} hover:text-white`}
              aria-label={link.label}
            >
              <Icon className="h-5 w-5 text-white" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
