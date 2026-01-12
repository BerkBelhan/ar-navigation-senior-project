"use client";
import ChromaGrid from "@/components/layout/ChromaGrid";
import CardNavBar from "@/components/layout/CardNavBar";

export default function TeamPage() {
  const members = [
    {
      image: "/images/139067173.png",
      title: "Berk Belhan",
      subtitle: "Backend Developer",
      borderColor: "#464646",
      gradient: "linear-gradient(145deg, #444445, #000)",
      url: "https://www.linkedin.com/in/berkbelhan/"
    },
    {
      image: "/images/Alperen.jpeg",
      title: "Alperen Karadağ",
      subtitle: "Backend Developer",
      handle: "@mikechen",
      borderColor: "#464646",
      gradient: "linear-gradient(180deg, #444445, #000)",
      url: "https://www.linkedin.com/in/alperen-karada%C4%9F-734131269/"
    },
    {
      image: "/images/Berke.jpeg",
      title: "Altuğ Berke Akman",
      subtitle: "Backend Developer",
      borderColor: "#464646",
      gradient: "linear-gradient(145deg, #444445, #000)",
      url: "https://www.linkedin.com/in/berke-akman/"
    },
    {
      image: "/images/Ceren.jpeg  ",
      title: "Ceren Duru Kızılırmak",
      subtitle: "Backend Developer",
      handle: "@mikechen",
      borderColor: "#464646",
      gradient: "linear-gradient(180deg, #444445, #000)",
      url: "https://www.linkedin.com/in/ceren-kizilirmak-407443258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  ];

  return (
    <main className="pt-24 ">
      <div className="h-16" />
      <h1 className="text-3xl font-semibold mb-16 text-center">


        Team
      </h1>

      {/* FIX: Instead of manually mapping, pass the data to the component.
        ChromaGrid handles the rendering of the cards for you.
      */}
      <div className="w-full">
        <ChromaGrid items={members} columns={4} />
      </div>
    </main>
  );
}