export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61f163474efc61c1e64b51f2",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ro6gefss",
                  apiId: "d6c2ae3d-8306-48a5-a24f-9106cb2bc769",
                },
                {
                  buildHookId: "61f16347ae70e9d3abdceb00",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-miop8in8",
                  apiId: "bbf5ab9f-569e-4536-ba3b-93e6b054c888",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/DevAkhil/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-miop8in8.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
