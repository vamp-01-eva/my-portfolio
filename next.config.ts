import type { NextConfig } from "next";

const oldPages: Array<{ source: string; destination: string }> = [
  { source: "/index.html", destination: "/" },
  { source: "/work.html", destination: "/work" },
  { source: "/about.html", destination: "/about" },
  { source: "/contact.html", destination: "/contact" },
  { source: "/case-time-in-out.html", destination: "/case/time-in-out" },
  { source: "/case-vehicle-booking.html", destination: "/case/vehicle-booking" },
  { source: "/case-contract-renewal.html", destination: "/case/contract-renewal" },
  {
    source: "/case-barbershop-manager.html",
    destination: "/case/barbershop-manager",
  },
  { source: "/case-youtube-clipper.html", destination: "/case/youtube-clipper" },
  {
    source: "/case-youtube-reclipper.html",
    destination: "/case/youtube-reclipper",
  },
  {
    source: "/case-local-video-captioner.html",
    destination: "/case/local-video-captioner",
  },
  { source: "/case-soletisfaction.html", destination: "/case/soletisfaction" },
];

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [256, 384],
  },
  async redirects() {
    return oldPages.map((page) => ({
      ...page,
      statusCode: 301 as const,
    }));
  },
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
