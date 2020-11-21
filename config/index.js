module.exports = {

    author: "@konstantinmuenster",
    siteTitle: "Christopher Chou",
    siteShortTitle: "Christopher Chou", // Used as logo text in header, footer, and splash screen
    siteDescription: "Christopher Chou's Personal Website",
    siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
    siteLanguage: "en_US",
    siteIcon: "content/favicon.png", // Relative to gatsby-config file
    seoTitleSuffix: "Portfolio Minimal", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/christopher-chou-b346aa1b0/"
        },
        {
            name: "Blog",
            url: "http://cswithchris.com/"
        },
        {
            name: "Github",
            url: "https://github.com/BabyChouSr"
        },
        // {
        //     name: "Behance",
        //     url: "https://www.behance.net/konstanmnster"
        // },
    ],
  
    navLinks: {
        menu: [
            {
                name: "Articles",
                url: "/#articles",
            },
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}