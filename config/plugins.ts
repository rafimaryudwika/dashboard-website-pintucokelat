// import { Config as ImageOptimizerConfig } from "strapi-plugin-image-optimizer/dist/server/models/config";
import type { Config as SentryConfig } from "@strapi/plugin-sentry/dist/server/src/config.d.ts";
import { Integrations } from "@sentry/node";
import type {} from "@strapi/provider-upload-local/dist";

export default ({ env }) => ({
  // ...
  // "image-optimizer": {
  //   enabled: true,
  //   config: {
  //     include: ["jpeg", "jpg", "png", "heif"],
  //     exclude: ["gif"],
  //     formats: ["original", "webp"],
  //     sizes: [
  //       {
  //         name: "128",
  //         width: 128,
  //         withoutEnlargement: true,
  //       },
  //       {
  //         name: "256",
  //         width: 256,
  //         withoutEnlargement: true,
  //       },
  //       {
  //         name: "360",
  //         width: 360,
  //         withoutEnlargement: true,
  //       },
  //       {
  //         name: "480",
  //         width: 480,
  //         withoutEnlargement: true,
  //       },
  //       {
  //         name: "640",
  //         width: 640,
  //         withoutEnlargement: true,
  //       },
  //       {
  //         name: "768",
  //         width: 768,
  //         withoutEnlargement: true,
  //       },
  //       {
  //         name: "1024",
  //         width: 1024,
  //         withoutEnlargement: true,
  //       },
  //       {
  //         name: "1280",
  //         width: 1280,
  //         withoutEnlargement: true,
  //       },
  //       {
  //         name: "1536",
  //         width: 1536,
  //         withoutEnlargement: true,
  //       },
  //       {
  //         name: "1920",
  //         width: 1920,
  //         withoutEnlargement: true,
  //       },
  //       {
  //         name: "2048",
  //         width: 2048,
  //         withoutEnlargement: true,
  //       },
  //       {
  //         name: "2304",
  //         width: 2304,
  //         // Won't create an image larger than the original size
  //         withoutEnlargement: true,
  //       },
  //       {
  //         name: "2560",
  //         width: 2560,
  //         // Won't create an image larger than the original size
  //         withoutEnlargement: true,
  //       },
  //       {
  //         name: "2880",
  //         width: 2880,
  //         // Won't create an image larger than the original size
  //         withoutEnlargement: true,
  //       },
  //       {
  //         name: "3072",
  //         width: 3072,
  //         // Won't create an image larger than the original size
  //         withoutEnlargement: true,
  //       },
  //       {
  //         // Uses original size but still transforms for formats
  //         name: "3840",
  //         width: 3840,
  //         withoutEnlargement: true,
  //       },
  //       {
  //         name: "original",
  //         withoutEnlargement: true,
  //       },
  //     ],
  //     quality: 70,
  //   } satisfies ImageOptimizerConfig,
  // },
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 10 * 1024 * 1024, // 5 MB
        localServer: {},
      },
    },
  },
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::prewedding-wedding.prewedding-wedding",
          draft: {
            url: `${env("WEBSITE_URL")}/api/postPreview`,
            query: {
              secret: env("WEBSITE_PREVIEW_SECRET"),
              slug: "{Slug}",
              endpoint: "prewedding-weddings",
            },
          },
          published: {
            url: `${env("WEBSITE_URL")}/wedding/{Slug}`,
          },
        },
        {
          uid: "api::creative-project-client-list.creative-project-client-list",
          draft: {
            url: `${env("WEBSITE_URL")}/api/postPreview`,
            query: {
              secret: env("WEBSITE_PREVIEW_SECRET"),
              slug: "{Slug}",
              endpoint: "creative-project-client-lists",
            },
          },
          published: {
            url: `${env("WEBSITE_URL")}/creative-project/{Slug}`,
          },
        },
        {
          uid: "api::photography-client-list.photography-client-list",
          draft: {
            url: `${env("WEBSITE_URL")}/api/postPreview`,
            query: {
              secret: env("WEBSITE_PREVIEW_SECRET"),
              slug: "{Slug}",
              endpoint: "photography-client-lists",
            },
          },
          published: {
            url: `${env("WEBSITE_URL")}/fotografi/{Slug}`,
          },
        },
        {
          uid: "api::ph-portofolio.ph-portofolio",
          draft: {
            url: `${env("WEBSITE_URL")}/api/postPreview`,
            query: {
              secret: env("WEBSITE_PREVIEW_SECRET"),
              slug: "{Slug}",
              endpoint: "ph-portofolio",
            },
          },
          published: {
            url: `${env("WEBSITE_URL")}/productionhouse/{Slug}`,
          },
        },
      ],
    },
  },
  // email: {
  //   config: {
  //     provider: 'nodemailer',
  //     providerOptions: {
  //       host: env('SMTP_HOST', 'mail.pintucokelat.com'),
  //       port: env('SMTP_PORT', 465),
  //       auth: {
  //         user: env('SMTP_USERNAME'),
  //         pass: env('SMTP_PASSWORD'),
  //       },
  //     },
  //     settings: {
  //       defaultFrom: 'admin@pintucokelat.com',
  //       defaultReplyTo: 'your_email@address.com',
  //     },
  //   },
  // },
  sentry: {
    enabled: true,
    config: {
      dsn: env("SENTRY_DSN"),
      sendMetadata: true,
      init: {
        tracesSampleRate: 1.0,
        integrations: [new Integrations.Mysql()],
        environment: env("NODE_ENV"),
        release:
          env("GITHUB_PROJECT_NAME") &&
          env("GITHUB_PROJECT_NAME") + process.env.npm_package_version,
      },
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          updateAgeOnGet: false,
        },
      },
      strategy: {
        logs: true,
        clearRelatedCache: true,
        maxAge: 3600000,
        contentTypes: [
          // list of Content-Types UID to cache
          "api::main-layout.main-layout",
          "api::home-page.home-page",
          "api::self-photo-studio.self-photo-studio",
          "api::wedding-page.wedding-page",
          "api::creative-project.creative-project",
          "api::photography.photography",
          "api::production-house.production-house",
          "api::photo-booth.photo-booth",
          "api::promotion.promotion",
          "api::creative-project-client-list.creative-project-client-list",
          "api::prewedding-wedding.prewedding-wedding",
          "api::photography-client-list.photography-client-list",
          "api::ph-portofolio.ph-portofolio",
        ],
      },
    },
  },
  // ...
});
