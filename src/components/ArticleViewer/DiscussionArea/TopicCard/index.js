import React from 'react'
import {
    Author,
    Card,
    Content,
    Dots,
    Like,
    LikesCounter,
    OptionsArea,
    RepliesCounter,
    Title
} from "./styles.ts"
import dots from '../../../../images/topicDots.png'
import like from '../../../../images/topicLike.png'
import ReplyCard from "./ReplyCard"

const TopicCard = ({
    author,
    content,
    theme,
    replies
}) => {
    const [showReplies, setShowReplies] = React.useState(false)
    return (
        <>
            <Card>
                <Title>
                    {theme}
                </Title>
                <Author>
                    {author}
                </Author>
                <Content>
                    {content}
                </Content>
                <OptionsArea>
                    <Dots src={dots} />
                    <Like src={like} />
                    <LikesCounter>1 like</LikesCounter>
                    <RepliesCounter
                        onClick={() => { setShowReplies(!showReplies) }}
                    >
                        {
                            replies.length > 1 ? `${replies.length} respostas`
                                : replies.length === 1 ? `${replies.length} resposta`
                                    : 'Nenhuma resposta'
                        }
                    </RepliesCounter>
                </OptionsArea>
                {showReplies && replies.map((item, index) => (
                    <ReplyCard
                        author={item.author}
                        content={item.content}
                        isAuthor={item.isAuthor}
                        key={index}
                    />
                ))}
            </Card>
        </>
    )
}
export default TopicCard