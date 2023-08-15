import NextIcon from "@/assets/vectors/next.svg";
import ReactIcon from "@/assets/vectors/react.svg";
import SassIcon from "@/assets/vectors/sass.svg";
import TailwindIcon from "@/assets/vectors/tailwind.svg";
import JavaIcon from "@/assets/vectors/java.svg";
import CShapIcon from "@/assets/vectors/csharp.svg";
import StrapIcon from "@/assets/vectors/strapi.svg";
import FirebaseIcon from "@/assets/vectors/firebase.svg";
import PostgresIcon from "@/assets/vectors/postgres.svg";
import JavascriptIcon from "@/assets/vectors/javascript.svg";
import TypescriptIcon from "@/assets/vectors/typescript.svg";
import PrismaIcon from "@/assets/vectors/prisma.svg";

import { SvgComponent } from "@/types/model";

export const stacks = [
    {
      id: 1,
      titleCard: "Front-end",
      skills: [
        {
          name: "React",
          icon : ReactIcon as SvgComponent,
        },
        {
          name: "Next",
          icon: NextIcon as SvgComponent,
        },
        {
          name: "Tailwind",
          icon: TailwindIcon as SvgComponent,
        },
        {
            name: "Sass",
            icon: SassIcon as SvgComponent,
            },

      ],
    },
    {
        id: 2,
        titleCard: "Languages",
        skills: [
            {
                name: "Typescript",
                icon: TypescriptIcon as SvgComponent,
            },
            {
                name: "Javascript",
                icon: JavascriptIcon as SvgComponent,
            },

            {
                name: "C#",
                icon: CShapIcon as SvgComponent,
            },
            {
                name : "Java",
                icon: JavaIcon as SvgComponent,
            }
        ]
    },
    {
        id: 3,
        titleCard: "Database",
        skills: [
            {
                name : "Strapi",
                icon: StrapIcon as SvgComponent,
            },
            {
                name: "Firebase",
                icon: FirebaseIcon as SvgComponent,
            },
            {
                name: "Postgres",
                icon: PostgresIcon as SvgComponent,
            },{
                name: "Prisma",
                icon: PrismaIcon as SvgComponent,
            }
        ]
    }
  ];