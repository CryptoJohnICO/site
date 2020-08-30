import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import '../index.css';

class Footer extends React.Component {

    render() {

        return (
            <Container text textAlign='center'>
                <p>
                    Developed by TEND developer and an ex shitcoiner<br></br>
                    Designed by ex Angry birds designer
                </p>
                <p>
                Made with ♥ in from home
                </p>
                <br></br>
            </Container>
        );
    }
}

export default Footer;