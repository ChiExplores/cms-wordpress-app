import { v4 as uuid } from 'uuid';

export const cleanAndTransformBlocks = (blocksJSON) => {
    const blocks = JSON.parse(JSON.stringify(blocksJSON));
    //recursion to assign ids to blocks and their innerBlocks 
    const assignIds = (b) => {
        b.forEach(block => {
            block.id = uuid();
            if (block.innderBlocks?.length) {
                assignIds(block.innderBlocks);
            }
        });
    };

    assignIds(blocks)

    return blocks;

}

// when working with appollo data returned is immuntable, so this is the recommended way to transform data
// to modify results that is coming back from Graphql query when working with apollo and in memory cache (using apollo client.)
//Although right now, I am not using apollo client, this is just reocmmended from the tutorial I am watching