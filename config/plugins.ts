import { Config as ImageOptimizerConfig } from "strapi-plugin-image-optimizer/dist/server/models/config";


export default ({ env }) => ({
    // ...
    "image-optimizer": {
      enabled: true,
      config: {
        include: ["jpeg", "jpg", "png", "heif"],
        exclude: ["gif"],
        formats: ["original" , "webp"],
        sizes: [
          {
            name: "128",
            width: 128,
            withoutEnlargement: true,
          },
          {
            name: "240",
            width: 240,
            withoutEnlargement: true,
          },
          {
            name: "480",
            width: 480,
            withoutEnlargement: true,
          },
          {
            name: "640",
            width: 640,
            withoutEnlargement: true,
          },
          {
            name: "768",
            width: 768,
            withoutEnlargement: true,
          },
          {
            name: "1024",
            width: 1024,
            withoutEnlargement: true,
          },
          {
            name: "1280",
            width: 1280,
            withoutEnlargement: true,
          },
          {
            name: "1536",
            width: 1536,
            withoutEnlargement: true,
          },
          {
            name: "1920",
            width: 1920,
            withoutEnlargement: true,
          },
          {
            name: "original",
            withoutEnlargement: true,
          },
        ],
        quality: 70,
        additionalResolutions: [1.5, 2]
      } satisfies ImageOptimizerConfig,
    },
    // ...
  });