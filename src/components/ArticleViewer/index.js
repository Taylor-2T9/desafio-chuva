import {
    Article,
    ArticleHeader,
    Button,
    ButtonsArea,
    Container,
    DownloadButton,
    DownloadIcon,
    Icon,
    Title,
    VideoPlayer
} from './styles.ts'
import download from '../../images/download.png'
import favorite from '../../images/star.png'
import doi from '../../images/doi.png'
import DetailsMenu from './DetailsMenu'
import ArticleAbstract from './ArticleAbstract'
import DiscussionArea from './DiscussionArea'
import Footer from './Footer'

const ArticleViewer = () => {
    return (
        <Container>
            <ArticleHeader>
                <Title>
                    Análise Sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP
                </Title>
                <ButtonsArea>
                    <li>
                        <DownloadButton>
                            <DownloadIcon src={download} />
                            Download
                        </DownloadButton>
                    </li>
                    <li>
                        <Button>
                            <Icon src={favorite} />
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Icon src={doi} />
                        </Button>
                    </li>
                </ButtonsArea>
            </ArticleHeader>
            <Article>
                <VideoPlayer
                    src="https://www.youtube.com/embed/pAGrykAxkB4"
                >
                </VideoPlayer>
                <DetailsMenu />
            </Article>
            <ArticleAbstract />
            <DiscussionArea />
            <Footer />
        </Container>
    )
}
export default ArticleViewer