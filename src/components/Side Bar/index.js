import React from 'react'
import image from '../../images/slaca.jpeg'
import { DivTitle, Image, Menu, MenuList, Option, OptionsGroup, Title } from './styles.ts'
const SideBar = () => {
    return (
            <Menu>
                <DivTitle>
                    <Title>SLACA 2019</Title>
                </DivTitle>
                <Image src={image} />
                <MenuList>
                    <OptionsGroup>
                        <li>
                            <Option href={'http://localhost:3000/#'}>
                                Apresentação
                            </Option>
                        </li>
                        <li>
                            <Option href={'http://localhost:3000/#'}>
                                Comitês
                            </Option>
                        </li>
                    </OptionsGroup>
                    <OptionsGroup>
                        <li>
                            <Option href={'http://localhost:3000/#'}>
                                Autores
                            </Option>
                        </li>
                        <li>
                            <Option href={'http://localhost:3000/#'}>
                                Eixos temáticos
                            </Option>
                        </li>
                    </OptionsGroup>
                    <OptionsGroup>
                        <li>
                            <Option href={'http://localhost:3000/#'}>
                                Trabalhos
                            </Option>
                        </li>
                        <li>
                            <Option href={'http://localhost:3000/#'}>
                                Contato
                            </Option>
                        </li>
                    </OptionsGroup>
                </MenuList>
            </Menu>
    )
}

export default SideBar