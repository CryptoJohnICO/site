import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Image, Menu } from 'semantic-ui-react'

class Header extends React.Component {

  render() {

    return (
        <Menu borderless huge secondary fuild stackable>
            <Menu.Menu position='left'>
                <Menu.Item header href="index.js">Fart App</Menu.Item>
            </Menu.Menu>

            <Menu.Menu position='right'>
                <Menu.Item>
                    <Image src="../wallet.png" size="tiny"/>
                    <div id="wallet_connected">Connect wallet</div>
                </Menu.Item>
            </Menu.Menu>
        
        </Menu>
    );
  }
}

export default Header;