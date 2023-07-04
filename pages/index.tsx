import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome, getDefaultPage } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Image from 'next/image'
import cn from 'classnames'
import { BlockRenderer } from '../components/BlockRenderer/block-renderer'
import { cleanAndTransformBlocks } from '../utils/cleanAndTransformBlocks'


export default function Index(props) {
    return (
        <div>
            <BlockRenderer blocks={props.blocks} />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    console.log('index page')
    const defaultPage = await getDefaultPage('/')

    return {
        props: { blocks: cleanAndTransformBlocks(defaultPage.data.nodeByUri.blocks), preview },
        revalidate: 10,
    }
}
