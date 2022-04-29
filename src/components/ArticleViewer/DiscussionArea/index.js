import { ButtonArea, Container, CreateDiscussion, CreateDiscussionButton, Form, Icon, Input, IconsArea, SendButton, TextArea, TextEditor, Title } from "./styles.ts"
import disc1 from '../../../images/Disc1.png'
import disc2 from '../../../images/Disc2.png'
import disc3 from '../../../images/Disc3.png'
import criartopico from '../../../images/criartopico.png'
import negrito from '../../../images/negrito.png'
import italico from '../../../images/italico.png'
import React from "react"
import topics from "./topics"
import TopicCard from "./TopicCard"
import FakeCard from "./FakeCard"

const DiscussionArea = () => {
    const [showNewDiscussion, setShowNewDiscussion] = React.useState(false)
    const [showSuccessMessage, setShowSuccessMessage] = React.useState(false)
    return (
        <Container>
            <Title>
                Discussões
            </Title>
            {!showNewDiscussion && !showSuccessMessage && (
                <CreateDiscussion>
                    <h3>
                        Compartilhe suas ideias ou dúvidas com os autores!
                    </h3>
                    <IconsArea>
                        <Icon src={disc1} />
                        <Icon src={disc2} />
                        <Icon src={disc3} />
                    </IconsArea>
                    <p>
                        Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!
                    </p>
                    <CreateDiscussionButton onClick={() => { setShowNewDiscussion(!showNewDiscussion) }}>
                        <img src={criartopico} /> Criar tópico
                    </CreateDiscussionButton>
                </CreateDiscussion>
            )}
            {showNewDiscussion && !showSuccessMessage && (
                <CreateDiscussion>
                    <p>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>
                    <Form>
                        <h3>
                            Assunto
                        </h3>
                        <Input placeholder="Defina um tópico sucinto para notificar os autores..." />
                        <h3>
                            Conteúdo
                        </h3>
                        <TextArea></TextArea>
                        <TextEditor>
                            <div>
                                <img src={negrito} />
                            </div>
                            <div>
                                <img src={italico} />
                            </div>
                            <ButtonArea>
                                <SendButton onClick={() => { setShowSuccessMessage(!showSuccessMessage) }}>
                                    Enviar
                                </SendButton>
                            </ButtonArea>
                        </TextEditor>
                    </Form>
                </CreateDiscussion>
            )}
            {showSuccessMessage && (
                <CreateDiscussion>
                    <h3>
                        Seu tópico foi enviado com sucesso! :D
                    </h3>
                    <p>
                        Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!
                    </p>
                    <a>
                        Descubra outros trabalhos!
                    </a>
                    <br />
                    <CreateDiscussionButton
                        onClick={() => {
                            setShowNewDiscussion(!showNewDiscussion)
                            setShowSuccessMessage(!showSuccessMessage)
                        }}>
                        Criar novo tópico
                    </CreateDiscussionButton>
                </CreateDiscussion>
            )}
            <hr />
            <br />
            <FakeCard
                show={showSuccessMessage}
                author={topics[0].author}
                content={topics[0].content}
                theme={topics[0].theme}
            />
            {topics.map((item, index) => (
                <TopicCard
                    author={item.author}
                    content={item.content}
                    theme={item.theme}
                    replies={item.replies}
                    key={index}
                />
            ))}
        </Container>
    )
}

export default DiscussionArea