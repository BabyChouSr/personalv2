module.exports = {

    author: "@BabyChouSr",
    siteTitle: "Christopher Chou",
    siteShortTitle: "Christopher Chou", // Used as logo text in header, footer, and splash screen
    siteDescription: "Christopher Chou's Personal Website",
    siteUrl: "https://chrischou.netlify.app/",
    siteLanguage: "en_US",
    siteIcon: "content/monogram.png", // Relative to gatsby-config file
    seoTitleSuffix: "Christopher Chou", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/cchou03"
        },
        {
            name: "Blog",
            url: "http://cswithchris.com/"
        },
        {
            name: "Github",
            url: "https://github.com/BabyChouSr"
        },
        {
             name: "Resume",
             url: "https://drive.google.com/file/d/1Zjrx_hgt-F1W60_0O5kcPpxsLyAzTHXe/view?usp=sharing"
        },
    ],
  
    navLinks: {
        menu: [
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Education",
                url: "/#education",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
            {
                name: "Organizations",
                url: "/#organizations",
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