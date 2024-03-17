import nodemailer from 'nodemailer';

export default ({env}) => ({
    async afterCreate(event) {
        const {result} = event;
        try {
            await strapi.plugin['email'].services.email.send({
                to: result.Email,
                from: env('SMTP_USERNAME'),
                subject: ``,
                html: ``,
            })
        } catch (err) {
            console.error(err);
        }
    }
  });