import projectImage from '@/assets/photo/background_immo.webp'
import SassIcon from '@/assets/vectors/sass.svg'
import { SvgComponent } from '@/types/model'
import NextIcon from "@/assets/vectors/next.svg";
import ReactIcon from "@/assets/vectors/react.svg";
import StrapIcon from "@/assets/vectors/strapi.svg";
import PostgresIcon from "@/assets/vectors/postgres.svg";
import TypescriptIcon from "@/assets/vectors/typescript.svg";
import PrismaIcon from "@/assets/vectors/prisma.svg";
import DockerIcon from "@/assets/vectors/docker.svg";
import MapboxIcon from "@/assets/vectors/mapbox.svg";
import GraphQLIcon from "@/assets/vectors/graphql.svg";

export const projects = [
    {
        id:1,
        cardInfo:{
            title: "Hackathon - XPerience Immo",           
            role: "Front End Developer",
            description : " Le développement foncier est un secteur clé de l’immobilier, qui consiste à identifier, acheter et valoriser des terrains à bâtir. Mais comment savoir si un terrain est rentable ? "
        },
        title: "XPerience Immo",
        description: "My role as a front-end developer in the project is to create an interactive map that, through various filters, enables users to color different parts of the map based on selected criteria. This functionality allows for the visualization of various information such as points of interest, population density, density, and cost",
        image: projectImage,
        stacks: [
            {
                name: "Typescript",
                icon: TypescriptIcon as SvgComponent,
            },
            {
                name: "React",
                icon: ReactIcon as SvgComponent,
            },
            {
                name : "Sass",
                icon: SassIcon as SvgComponent,
            },{
                name: "Mapbox",
                icon: MapboxIcon as SvgComponent,
            }
        ]
    },
    {
        id:2,
        cardInfo:{
            title: "Sogetilabs Website",
            role: "Full Stack Developer",
            description : "SogetiLabs is Capgemini's innovation hub, where we partner with clients on cutting-edge, tech-driven projects, applying the latest technologies and best practices"
        },
        title: "Sogetilabs Website",
        description: "I was tasked with implementing the website using Next.js' Static Site Generation. Additionally, I introduced Incremental Static Generation (ISG) and integrated it with a headless CMS, Strapi, to enhance performance and SEO.",
        image: projectImage,
        stacks: [
            {
                name: "Typescript",
                icon: TypescriptIcon as SvgComponent,
            },
            {
                name: "Next.js",
                icon: NextIcon as SvgComponent,
            },

            {
                name: "Strapi",
                icon: StrapIcon as SvgComponent,
            },
            {
                name : "GraphQL",
                icon: GraphQLIcon as SvgComponent,
            }
        ]
    },
    {
        id:2,
        cardInfo:{
            title: "Innovation4EDF",
            role: "Full Stack Developer",
            description : "Finalist of Innovation4EDF competition , the proposal is to create a file manager that addresses a common challenge faced by EDF employees. It will automatically identify files as business, personal, or private upon upload, alleviating the need for manual categorization and improving security."
        },
        title: "Innovation4EDF",
        description: "I have developed an application using Next.js 13 and Prisma to efficiently store my files in a database.",
        image: projectImage,
        stacks: [
            {
                name: "Typescript",
                icon: TypescriptIcon as SvgComponent,
            },
            {
                name: "Next.js",
                icon: NextIcon as SvgComponent,
            },

            {
                name: "Prisma",
                icon: PrismaIcon as SvgComponent,
            },
            {
                name : "Docker",
                icon: DockerIcon as SvgComponent,
            },
            {
                name : "Postgres",
                icon: PostgresIcon as SvgComponent,
            }
        ]
    }
]
