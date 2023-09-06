import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome, getPage } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Image from 'next/image'
import cn from 'classnames'
import { BlockRenderer } from '../components/BlockRenderer/block-renderer'
import { cleanAndTransformBlocks } from '../utils/cleanAndTransformBlocks'
import { mapMainMenuItems } from '../utils/mapMainMenuItems'
import { MainMenu } from '../components/MainMenu'


export default function Index(props) {
    console.log("Props", props)
    return (
        <div>
            <MainMenu items={props.mainMenuItems} callToActionDestination={props.callToActionDestination} callToActionLabel={props.callToActionLabel} />
            <BlockRenderer blocks={props.blocks} />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const page = await getPage('/')
    return {
        props: {
            blocks: cleanAndTransformBlocks(page.data.nodeByUri.blocks),
            mainMenuItems: mapMainMenuItems(page.data.acfOptionsMainMenu.mainMenu.menuItems),
            callToActionLabel: page.data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
            callToActionDestination: page.data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
            preview
        },
        revalidate: 10,
    }
}
