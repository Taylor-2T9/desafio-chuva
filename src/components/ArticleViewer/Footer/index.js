import {Container} from './styles.ts'
import credits from '../../../images/credits.png'

const Footer = () => {
    return (
        <Container>
            <img src={credits} />
        </Container>
    )
}
export default Footer