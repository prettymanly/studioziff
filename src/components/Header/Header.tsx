import Link from 'next/link';

interface HeaderProps {
  textColor?: string;
}

const Header = ({ textColor = "text-[#5e7c72]" }: HeaderProps) => {
  return (
    <header className={`w-full mb-10 flex flex-row justify-between items-start font-mono text-base py-4 ${textColor}`}>
      <div>
        <p className="font-bold">FIND ME</p>
        <p><Link href="https://zifflau.substack.com/" className="hover:opacity-80" target="_blank">BLOG</Link></p>
        <p><Link href="https://sg.linkedin.com/in/razifflau" className="hover:opacity-80" target="_blank">LINKEDIN</Link></p>
      </div>
      <div className="text-left md:text-right">
        <p className="font-bold">SAY HELLO</p>
        <p><a href="mailto:ZIFF.LAU@GMAIL.COM" className="hover:opacity-80">ZIFF.LAU@GMAIL.COM</a></p>
        <p>+65 9322 7317</p>
      </div>
    </header>
  );
};

export default Header; 