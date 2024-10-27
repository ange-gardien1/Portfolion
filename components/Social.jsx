import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ange-gardien1" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ange-gardien-144a0018b/",
  },
  { icon: <FaYoutube />, path: "" }, 
  { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map(
        (item, index) =>
          item.path && (
            <Link
              key={index}
              href={item.path}
              className={iconStyles}
              aria-label={`Link to ${item.path}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </Link>
          )
      )}
    </div>
  );
};

export default Social;
