import React, { useEffect, useState } from 'react'
import { BlogLayout } from "../../components/templates/layouts";
import { Container, View, Text, Image, Badge} from '../../components/atoms'
import Moment from 'moment';

import './stories.scss'
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { useSelector, useDispatch } from 'react-redux';
import * as Markdown from 'react-markdown'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import actions from '../../store/modules/stories/actions'

import { NextSeo } from 'next-seo';

const Bold = ({ children }) => <p className="bold">{children}</p>;

const client = require('contentful').createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
})


const Story = ({story}) => {
    console.log("RES :: ", story)

    const options = {
        renderMark: {
          [MARKS.BOLD]: text => <Text>{text}</Text>,
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => <Text variant="grey">{children}</Text>,
          [BLOCKS.EMBEDDED_ASSET]: node => {
            // console.log(node)
            let { description, title, file } = node.data.target.fields

            return <img src={file.url} />
          },
        },
        renderText: text => {
            return text.split('\n').reduce((children, textSegment, index) => {
              return [...children, index > 0 && <br key={index} />, textSegment];
            }, []);
          },
      };

    const content = documentToReactComponents(story.items[0].fields.body, options)
      
    return (
        <>
        <NextSeo
            openGraph={{
                title: story.items[0].fields.title,
                description: story.items[0].fields.subtitle,
                url: `https://ahroidlife.com/stories/${story.items[0].fields.slug}`,
                type: 'article',
                article: {
                authors: [
                    story.items[0].fields.author.fields.name,
                ],
                tags: [story.items[0].fields.tags],
                },
                images: [
                {
                    url: `https:${story.items[0].fields.heroImage.fields.file.url}`,
                    width: story.items[0].fields.heroImage.fields.file.details.image.width,
                    height: story.items[0].fields.heroImage.fields.file.details.image.height,
                    alt: story.items[0].fields.heroImage.fields.file.title,
                },
                ],
            }}
            />
            <BlogLayout>
                <Container className="story-container">
                    <View className="story-content" direction="column">
                        <Link href="/stories">
                            <a>
                                <View className="story-close-btn">
                                    <Image src="/static/illustrations/close-dark.svg"/>
                                </View>
                            </a>
                        </Link>
                        <View className="story-content-header">
                            <h1 className="title">{story.items[0].fields.title}</h1>
                            <Text className="subtitle" family="quicksand">{story.items[0].fields.subtitle}</Text>
                            <Image src={`https:${story.items[0].fields.heroImage.fields.file.url}`} className="hero-image"/>
                        </View>
                        <View className="story-content-body" direction="column">
                            {/* <Markdown source={content} /> */}
                            {content}
                        </View>
                        <View className="story-content-footer">
                            <View className="tags-wrapper">
                                <Text className="title">Tags</Text>
                                <View className="tags">
                                {
                                    story.items[0].fields.tags.map((tag, index) => <Badge key={index} title={tag} backgroundColor="#FFEDED" color="#FF5252"/>)
                                }
                                </View>
                            </View>
                            <View className="publish-date">
                                <Text className="title">Publish date</Text>
                                <Text className="subtitle">{Moment(story.items[0].fields.publishDate).format('LLLL')}</Text>
                            </View>
                        </View>
                    </View>
                </Container>
            </BlogLayout>
        </>
    )
}

Story.getInitialProps = async ({ query }) => {
    const res = await client.getEntries({
        content_type: 'story',
        'fields.slug[match]': query.slug
    })
    
    return { story: res }
  }

export default Story