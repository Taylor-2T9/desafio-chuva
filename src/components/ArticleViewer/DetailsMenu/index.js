import {
    Container,
    TextArea,
    Title
} from "./styles.ts"
import details from "./contentDetails"

const DetailsMenu = () => {
    return (
        <Container>
            <TextArea>
                    <Title>
                        Detalhes
                    </Title>
                {details}
            </TextArea>
        </Container>
    )
}
export default DetailsMenu
