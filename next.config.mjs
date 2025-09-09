import nextra from 'nextra'
 
const withNextra = nextra({ 
 	search: false 
 })
 
// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  // ... Other Next.js config options
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