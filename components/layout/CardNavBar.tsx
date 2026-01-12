"use client";

import CardNav, { CardNavItem } from "@/components/layout/CardNav";
import {basePath} from "@/lib/basepath";

export default function CardNavbar() {
  const items: CardNavItem[] = [
    {
      label: "Process",
      bgColor: "rgb(56, 56, 55, 0.5)",
      textColor: "#fff",
      links: [
        {
          label: "How it works",
          href: `${basePath}/process`,
          ariaLabel: "Process page",
        },
      ],
    },
    {
      label: "Team",
      bgColor: "rgb(56, 56, 55,0.5)",
      textColor: "#fff",
      links: [
        {
          label: "Members",
          href: `${basePath}/process`,
          ariaLabel: "Team page",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "rgb(56, 56, 55,0.5)",
      textColor: "#fff",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/BerkBelhan",
          ariaLabel: "GitHub repository",
        },
      ],
    },
  ];

  return (
    <CardNav
      logo=""                 // will be empty, it will be using brandText
      brandText="Guid-AR"
      brandHref={`${basePath}/`}
      items={items}
      baseColor="#0a0a0a"
      menuColor="#fff"
      buttonBgColor="#111"
      buttonTextColor="#fff"
    />
  );
}
