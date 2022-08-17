import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '0iu84h1k',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
