import {
    Avatar, AvatarArea, Container,
    DivTitle, Email, TextArea,
    LanguageChanger, Selector, Salutation,
    Serial, Subtitle, Title,
    UserArea
} from './styles.ts'
import languages from '../../images/languages.png'

const Header = () => {
    return (
        <Container>
            <DivTitle>
                <Subtitle>Anais do Simpósio Latino Americano de Ciências de Alimentos</Subtitle>
                <Title>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos</Title>
                <Serial>ISSN: 1234-5678</Serial>
            </DivTitle>
            <LanguageChanger>
                <Selector>
                    <option>PT, BR</option>
                    <option>EN, US</option>
                    <option>ES, ES</option>
                </Selector>
            </LanguageChanger>
            <UserArea>
                <TextArea>
                    <Salutation>
                        Bem vindo!
                    </Salutation>
                    <Email>
                        emailaqui@gmail.com
                    </Email>
                </TextArea>
                <AvatarArea>
                    <Avatar src={'http://pm1.narvii.com/6595/933c513060887cd5efb354900243a22edb15d877_00.jpg'} />
                </AvatarArea>
            </UserArea>
        </Container>
    )
}
export default Header