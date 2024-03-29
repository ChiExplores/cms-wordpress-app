import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
    return (
        <section>
            <h4 className="mb-8 text-base md:text-sm font-bold tracking-tighter leading-tight">
                More Posts
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                {posts.map(({ node }) => (
                    <PostPreview
                        key={node.slug}
                        title={node.title}
                        coverImage={node.featuredImage}
                        date={node.date}
                        author={node.author}
                        slug={node.slug}
                        excerpt={node.excerpt}
                    />
                ))}
            </div>
        </section>
    )
}
