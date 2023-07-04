import { Cover } from "../Cover/cover";
import { Heading } from "../Heading/heading";
import { Paragraph } from "../Paragraph";
import { theme } from "../../theme";

export const BlockRenderer = ({ blocks }) => {
    console.log('block rednder')
    return blocks.map(block => {
        switch (block.name) {
            case 'core/heading': {
                return <Heading key={block.id} textAlign={block.attributes.textAlign} level={block.attributes.level} content={block.attributes.content} />;
            }
            case 'core/cover': {
                return (
                    <Cover key={block.id} background={block.attributes.url}>
                        <BlockRenderer blocks={block.innerBlocks} />
                    </Cover>
                );
            }
            case 'core/paragraph': {
                return (
                    <Paragraph key={block.id} content={block.attributes.content} textAlign={block.attributes.align} textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text} />
                )
            }
            default:
                return null;
        }
    }
    )
};

