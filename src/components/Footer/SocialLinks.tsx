import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/ifixhut", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/ifixhut", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/ifixhut", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/ifixhut", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/ifixall_/", label: "Instagram" }
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors"
          aria-label={social.label}
        >
          <social.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}