import { Config as ImageOptimizerConfig } from "strapi-plugin-image-optimizer/dist/server/models/config";


export default ({ env }) => ({
    // ...
    "image-optimizer": {
      enabled: true,
      config: {
        include: ["jpeg", "jpg", "png"],
        exclude: ["gif"],
        formats: ["original", "webp", "avif"],
        sizes: [
          {
            name: "xs",
            width: 320,
          },
          {
            name: "sm",
            width: 360,
          },
          {
            name: "md",
            width: 768,
          },
          {
            name: "lg",
            width: 1024,
          },
          {
            name: "xl",
            width: 1280,
          },
          {
            name: "2xl",
            width: 1536,
          },
          {
            name: "3xl",
            width: 1920,
            // Won't create an image larger than the original size
            withoutEnlargement: true,
          },
          {
            // Uses original size but still transforms for formats
            name: "original",
          },
        ],
        additionalResolutions: [1.5, 2, 3],
        quality: 70,
      } satisfies ImageOptimizerConfig,
    },
    // ...
  });