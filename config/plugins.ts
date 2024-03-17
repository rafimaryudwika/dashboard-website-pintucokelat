// import { Config as ImageOptimizerConfig } from "strapi-plugin-image-optimizer/dist/server/models/config";



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
    'preview-button': {
      config: {
        contentTypes: [
          {
            uid: 'api::prewedding-wedding.prewedding-wedding',
            draft: {
              url: `${env('WEBSITE_URL')}/api/postPreview`,
              query: {
                secret: env('WEBSITE_PREVIEW_SECRET'),
                slug: '{Slug}',
                endpoint: 'prewedding-weddings',
              },
            },
            published: {
              url: `${env('WEBSITE_URL')}/wedding/{Slug}`,
            },
          },
          {
            uid: 'api::creative-project-client-list.creative-project-client-list',
            draft: {
              url: `${env('WEBSITE_URL')}/api/postPreview`,
              query: {
                secret: env('WEBSITE_PREVIEW_SECRET'),
                slug: '{Slug}',
                endpoint: 'creative-project-client-lists',
              },
            },
            published: {
              url: `${env('WEBSITE_URL')}/creative-project/{Slug}`,
            },
          },
          {
            uid: 'api::photography-client-list.photography-client-list',
            draft: {
              url: `${env('WEBSITE_URL')}/api/postPreview`,
              query: {
                secret: env('WEBSITE_PREVIEW_SECRET'),
                slug: '{Slug}',
                endpoint: 'photography-client-lists',
              },
            },
            published: {
              url: `${env('WEBSITE_URL')}/fotografi/{Slug}`,
            },
          },
          {
            uid: 'api::ph-portofolio.ph-portofolio',
            draft: {
              url: `${env('WEBSITE_URL')}/api/postPreview`,
              query: {
                secret: env('WEBSITE_PREVIEW_SECRET'),
                slug: '{Slug}',
                endpoint: 'ph-portofolio',
              },
            },
            published: {
              url: `${env('WEBSITE_URL')}/productionhouse/{Slug}`,
            },
          },
         
        ],
      },
    },
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'mail.pintucokelat.com'),
          port: env('SMTP_PORT', 465),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
        },
        settings: {
          defaultFrom: 'admin@pintucokelat.com',
          defaultReplyTo: 'your_email@address.com',
        },
      },
    },
    // ...
  });