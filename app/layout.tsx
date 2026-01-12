import CardNav from "@/components/layout/CardNav";
import "./globals.css";
import Footer from "@/components/layout/footer";
import AuroraBackground from "@/components/ui/AuroraBackground";
import CardNavbar from "@/components/layout/CardNavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black overflow-x-hidden">
        {/* Global fixed background */}
        <AuroraBackground />

        <CardNavbar />

        {/* Foreground content */}
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
