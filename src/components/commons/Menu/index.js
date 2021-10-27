import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import { Logo } from "../../../theme/Logo";

export default function Menu() {

    return (
        <MenuWrapper>
            <MenuWrapper.LeftSide>
                <Logo />
            </MenuWrapper.LeftSide>
            <MenuWrapper.CentralSide as="ul">
                {[
                    {
                        name: 'Home',
                        url: "/"
                    },
                    {
                        name: 'Perguntas frequentes',
                        url: "/faq"
                    },
                    {
                        name: 'Sobre',
                        url: "/sobre"
                    },
                ].map((link) => {
                    return (
                        <li key={link.url}>
                            <a href={link.url}>
                                {link.name}
                            </a>
                        </li>
                    )
                })}
            </MenuWrapper.CentralSide>
            <MenuWrapper.RightSide>
                <button>
                    Entrar
                </button>
                <button>
                    Cadastrar
                </button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
}