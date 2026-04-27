import nextra from 'nextra'
 
const withNextra = nextra({ 
 	search: false 
 })
 
// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  async redirects() {
    return [
      // /rules → index of rules section (bare /rules has no content file)
      {
        source: '/rules',
        destination: '/rules/accesskeys',
        permanent: false,
      },
      // Support old /help/rules paths arriving from the portal redirect
      {
        source: '/help/rules',
        destination: '/rules/accesskeys',
        permanent: true,
      },
      {
        source: '/help/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },

   images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "127.0.0.1",
          port: "1337",
          pathname: "/uploads/**",
        },
        {
          protocol: "http",
          hostname: "127.0.0.1",
          port: "9090",
          pathname: "/**",
        },
      ],
    },
})