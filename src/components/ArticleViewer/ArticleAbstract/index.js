import abstract from './abstractContent'
import { Container, Title } from './styles.ts'

const ArticleAbstract = () => {
    return (
        <>
            <Container>
                <Title>
                    Resumo
                </Title>
                {abstract}
            </Container>
        </>
    )
}
export default ArticleAbstract