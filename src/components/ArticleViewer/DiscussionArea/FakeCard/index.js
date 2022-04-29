import {
    Author,
    Card,
    Container,
    Content,
    TopicSent,
    Title
} from "./styles.ts"
import success from '../../../../images/success.png'

const FakeCard = ({
    show,
    author,
    content,
    theme
}) => {
    return (
        <>
            {show && (
                <Container>
                    <TopicSent>
                        <img src={success} />
                        <h3>Aguardando feedback dos autores</h3>
                        <a>Editar tópico</a>
                    </TopicSent>
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
                    </Card>
                </Container>
            )}
        </>
    )
}
export default FakeCard