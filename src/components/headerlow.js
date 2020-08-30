import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Menu } from 'semantic-ui-react'

class HeaderLow extends React.Component {

    state = { activeItem: 'index' }

    render() {

        const { activeItem } = this.state

        return (
            <Menu borderless huge secondary pointing fuild blue stackable>
                <Menu.Menu>
                    <Menu.Item active={activeItem === 'token'} href="#token">Token</Menu.Item>
                    <Menu.Item active={activeItem === 'metrics'} href="#metrics">Metrics</Menu.Item>
                    <Menu.Item active={activeItem === 'faq'} href="#faq">FAQ</Menu.Item>
                    <Menu.Item href="">Etherscan</Menu.Item>
                    <Menu.Item href="">Uniswap</Menu.Item>
                    <Menu.Item active={activeItem === 'farms'} href="">Farms (coming soon™)</Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default HeaderLow;