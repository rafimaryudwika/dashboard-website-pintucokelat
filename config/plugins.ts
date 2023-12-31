import { Config as ImageOptimizerConfig } from "strapi-plugin-image-optimizer/dist/server/models/config";


export default ({ env }) => ({
    // ...
    "image-optimizer": {
      enabled: true,
      config: {
        include: ["jpeg", "jpg", "png", "heif"],
        exclude: ["gif"],
        formats: ["original", "webp"],
        sizes: [
          {
            name: "128",
            width: 128,
            withoutEnlargement: true,
          },
          {
            name: "256",
            width: 256,
            withoutEnlargement: true,
          },
          {
            name: "360",
            width: 360,
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
            name: "2048",
            width: 2048,
            withoutEnlargement: true,
          },
          {
            name: "2304",
            width: 2304,
            // Won't create an image larger than the original size
            withoutEnlargement: true,
          },
          {
            name: "2560",
            width: 2560,
            // Won't create an image larger than the original size
            withoutEnlargement: true,
          },
          {
            name: "2880",
            width: 2880,
            // Won't create an image larger than the original size
            withoutEnlargement: true,
          },
          {
            name: "3072",
            width: 3072,
            // Won't create an image larger than the original size
            withoutEnlargement: true,
          },
          {
            // Uses original size but still transforms for formats
            name: "3840",
            width: 3840,
            withoutEnlargement: true,
          },
          {
            name: "original",
            withoutEnlargement: true,
          },
        ],
        quality: 70,
      } satisfies ImageOptimizerConfig,
    },
    // ...
  });