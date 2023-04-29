import "./globals.css";

// imports
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Afzaal Ahmad",
  description: "Resume of Afzaal Ahmad",
  icons: {
    icon: "@/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col sm:flex-row">
        <div className="sm:basis-1/3">
          <Sidebar />
        </div>
        <div className="sm:basis-2/3">{children}</div>
      </body>
    </html>
  );
}
