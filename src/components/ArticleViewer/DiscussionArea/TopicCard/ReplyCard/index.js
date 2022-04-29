import {
    Author,
    AuthorArea,
    Card,
    Content,
    IsAuthor,
    Verified
} from "./styles.ts"
import authorVerification from '../../../../../images/authorVerification.png'

const ReplyCard = ({
    author,
    content,
    isAuthor
}) => {
    return (
        <Card>
            <AuthorArea>
                <Author>
                    {author}
                </Author>
                {isAuthor && (
                    <Verified>
                    <IsAuthor>
                        Autor
                    </IsAuthor>
                    <div>
                    <img src={authorVerification}/>
                    </div>
                    </Verified>
                )}
            </AuthorArea>
            <Content>
                {content}
            </Content>
        </Card>
    )
}
export default ReplyCard