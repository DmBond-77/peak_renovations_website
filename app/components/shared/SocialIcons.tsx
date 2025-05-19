import { Facebook, Instagram, Mail, Phone, Send } from 'lucide-react';

export default function SocialIcons() {
  return (
    <div className="flex space-x-3 sm:space-x-3 md:space-x-6">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-600 transition hover:scale-120" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Instagram className="w-6 h-6 text-gray-600 hover:text-pink-500 transition hover:scale-120" />
      </a>
      <a href="mailto:info@peakrenovationspdx.com">
        <Mail className="w-6 h-6 text-gray-600 hover:text-red-500 transition hover:scale-120" />
      </a>
      <a href="tel:+503-123-4567">
        <Phone className="w-6 h-6 text-gray-600 hover:text-green-600 transition hover:scale-120" />
      </a>
      <a
        href="https://t.me/your_telegram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Send className="w-6 h-6 text-gray-600 hover:text-blue-400 transition hover:scale-120" />
      </a>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-6 h-6 text-gray-600 hover:text-green-500 transition hover:scale-120"
        >
          <path d="M16 0C7.163 0 0 6.872 0 15.36c0 3.136.96 6.032 2.624 8.456L0 32l8.608-2.784C11.216 30.4 13.552 31 16 31c8.837 0 16-6.872 16-15.36C32 6.872 24.837 0 16 0zm0 28.224c-2.112 0-4.16-.544-5.92-1.568l-.424-.248-5.12 1.648 1.664-4.896-.28-.456c-1.36-2.152-2.08-4.616-2.08-7.2 0-7.104 6.048-12.896 13.488-12.896 7.44 0 13.488 5.792 13.488 12.896 0 7.104-6.048 12.896-13.488 12.896z" />
          <path d="M24.08 19.008c-.336-.168-1.984-.976-2.288-1.088-.304-.112-.528-.168-.752.168-.224.336-.864 1.088-1.056 1.312-.192.224-.384.248-.72.08-.336-.168-1.408-.52-2.68-1.664-.992-.888-1.664-1.984-1.856-2.32-.192-.336-.02-.52.144-.688.152-.152.336-.384.504-.576.168-.192.224-.336.336-.56.112-.224.056-.416-.024-.584-.08-.168-.752-1.808-1.032-2.472-.272-.656-.544-.568-.752-.568h-.648c-.224 0-.584.08-.888.416s-1.168 1.144-1.168 2.784 1.196 3.232 1.36 3.448c.168.224 2.352 3.584 5.712 5.032.8.344 1.424.552 1.912.704.8.256 1.52.22 2.088.136.64-.096 1.984-.808 2.264-1.592.28-.784.28-1.456.2-1.592-.08-.136-.304-.216-.64-.384z" />
        </svg>
      </a>
    </div>
  );
}
