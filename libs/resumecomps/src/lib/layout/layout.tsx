import Link from 'next/link';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex items-center h-full justify-center">
      <div className="bg-orange-100 p-4 m-4 text-blue-950 w-2/3 max-w-800 border-2">
        <div className="bg-slate-500 text-white my-2">
          <Link href="/">
            <button className="bg-slate-800 py-4 px-8 hover:text-white text-slate-200 ">
              Home
            </button>
          </Link>
        </div>
        <div className="border-2">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
