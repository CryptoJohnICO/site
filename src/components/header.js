import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Image, Menu } from 'semantic-ui-react'

class Header extends React.Component {

    state = { activeItem: 'index' }

  render() {

    const { activeItem } = this.state

    return (
        <Menu borderless huge secondary pointing fuild blue stackable>
            <Menu.Menu position='left'>
                <Menu.Item header active={activeItem === 'index'} href="index.js">Fart App</Menu.Item>
            </Menu.Menu>
            <Menu.Menu position='center'>
            <Menu.Item active={activeItem === 'token'} href="index.html">Token</Menu.Item>
            <Menu.Item active={activeItem === 'metrics'} href="mybets.html">Metrics</Menu.Item>
            <Menu.Item active={activeItem === 'faq'} href="FAQ.html">FAQ</Menu.Item>
            <Menu.Item href="FAQ.html">Etherscan</Menu.Item>
            <Menu.Item href="FAQ.html">Uniswap</Menu.Item>
            <Menu.Item active={activeItem === 'farms'} href="FAQ.html">Farms (coming soon™)</Menu.Item>
            </Menu.Menu>

            <Menu.Menu position='right'>
                <Menu.Item>
                    <Image src="wallet.png" size="tiny"/>
                    <div id="wallet_connected">No wallet detected</div>
                </Menu.Item>
            </Menu.Menu>
        
        </Menu>
    );
  }
}

export default Header;