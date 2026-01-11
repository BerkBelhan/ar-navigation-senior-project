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
      image: "",
      title: "Alperen Karadağ",
      subtitle: "Backend Developer",
      handle: "@mikechen",
      borderColor: "#464646",
      gradient: "linear-gradient(180deg, #444445, #000)",
      url: ""
    },
    {
      image: "",
      title: "Altuğ Berke Akman",
      subtitle: "Backend Developer",
      borderColor: "#464646",
      gradient: "linear-gradient(145deg, #444445, #000)",
      url: ""
    },
    {
      image: "",
      title: "Ceren Duru Kızılırmak",
      subtitle: "Backend Developer",
      handle: "@mikechen",
      borderColor: "#464646",
      gradient: "linear-gradient(180deg, #444445, #000)",
      url: ""
    }
  ];

  return (
    <main className="pt-24 ">
        <CardNavBar />
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