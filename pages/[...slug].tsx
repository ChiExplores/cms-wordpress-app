import { BlockRenderer } from "../components/BlockRenderer";
import { getAllPages, getDefaultPage } from "../lib/api"
import { cleanAndTransformBlocks } from "../utils/cleanAndTransformBlocks";

export default function Page(props) {
    console.log('PAGE PROPS', props)
    return (
        <BlockRenderer blocks={props.blocks} />
    )
};

export const getStaticProps = async (context) => {
    console.log('CONTEXT', context);
    const uri = `/${context.params.slug.join("/")}/`;
    console.log("URI", uri);
    const defaultPage = await getDefaultPage(uri);
    const blocks = cleanAndTransformBlocks(defaultPage.data.nodeByUri.blocks)

    return {
        props: {
            title: defaultPage.data.nodeByUri.title,
            blocks
        },
        // revalidate: 10,
    }
};

export const getStaticPaths = async () => {
    const data = await getAllPages();
    // console.log('static path data', data.pages.nodes.filter(page => page.uri !== "/"))

    return {
        paths: data.pages.nodes.filter(page => page.uri !== "/").map(page => ({
            params: {
                slug: page.uri.substring(1, page.uri.length - 1).split("/"),
            },
        })),
        fallback: "blocking",
    };
};

// we want to split each page uri '/slug/child-slug/' by '/' and also remove the last '/' and put it in array
// filter to filter out home page "/" bc that is the default 
