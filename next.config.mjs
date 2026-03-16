/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.prismic.io',
            },{
                protocol: 'https',
                hostname: 'www.shutterstock.com',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/reg/hs',
                destination: 'https://unstop.com/p/hackerzstreet-40-manipal-university-mu-jaipur-1657990',
                permanent: false,
            },
            {
                source: '/reg/mockup',
                destination:
                    'https://unstop.com/o/5JHBCOz?lb=jRTzLubh&utm_medium=Share&utm_source=sarapan47121&utm_campaign=Online_coding_challenge',
                permanent: false,
            },
        ];
    },
};

export default config;
