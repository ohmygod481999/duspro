import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql, withPrefix } from "gatsby";
import Layout from "../components/layout";
import ArticlesGrid from "../components/articles-grid";
import Seo from "../components/seo";
import Headings from "../components/headings";

const IndexPage = () => {
    const { allStrapiArticle, strapiGlobal } = useStaticQuery(graphql`
        query {
            allStrapiArticle {
                nodes {
                    ...ArticleCard
                }
            }
            strapiGlobal {
                siteName
                siteDescription
            }
        }
    `);

    return (
        <Layout>
            <Seo seo={{ metaTitle: "Home" }} />
            <Helmet>
                {/* <script src={withPrefix("script.js")} type="text/javascript" /> */}
                <script
                    src={withPrefix("js/vendor/bootstrap.bundle.min.js")}
                ></script>
                <script
                    src={withPrefix("js/vendor/jquery-3.6.0.min.js")}
                ></script>
                <script
                    src={withPrefix("js/vendor/jquery-migrate-3.3.2.min.js")}
                ></script>
                <script
                    src={withPrefix("js/vendor/jquery.waypoints.js")}
                ></script>
                <script
                    src={withPrefix("js/vendor/modernizr-3.11.2.min.js")}
                ></script>
                <script src={withPrefix("js/plugins/wow.min.js")}></script>
                <script
                    src={withPrefix("js/plugins/swiper-bundle.min.js")}
                ></script>
                <script
                    src={withPrefix("js/plugins/jquery.nice-select.js")}
                ></script>
                <script src={withPrefix("js/plugins/parallax.min.js")}></script>
                <script
                    src={withPrefix("js/plugins/jquery.magnific-popup.min.js")}
                ></script>
                <script src={withPrefix("js/plugins/tippy.min.js")}></script>
                <script
                    src={withPrefix("js/plugins/ion.rangeSlider.min.js")}
                ></script>
                <script
                    src={withPrefix("js/plugins/mailchimp-ajax.js")}
                ></script>
                <script
                    src={withPrefix("js/plugins/jquery.counterup.js")}
                ></script>
                <script src={withPrefix("js/main.js")}></script>
            </Helmet>
            <Headings
                title={strapiGlobal.siteName}
                description={strapiGlobal.siteDescription}
            />
            <main>
                <ArticlesGrid articles={allStrapiArticle.nodes} />
            </main>
        </Layout>
    );
};

export default IndexPage;
