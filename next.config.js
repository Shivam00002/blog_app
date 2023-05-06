/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
      domains: ['unsplash.com','thumbs.dreamstime.com', 'images.newindianexpress.com','encrypted-tbn0.gstatic.com' ,'cdn.pixabay.com','printify.com','media.istockphoto.com','media.istockphoto.com','www.incimages.com','media.gettyimages.com']
    },
}

module.exports = nextConfig
