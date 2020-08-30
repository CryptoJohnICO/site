import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Statistic, Grid } from 'semantic-ui-react'
import './stats.css';

class Stats extends React.Component {

    render() {

        return (
            <div>
            <Statistic.Group widths='five'>
                <Statistic></Statistic>
                        <Statistic className="stats">
                            <Statistic.Label className="statistics">Farts given</Statistic.Label>
                            <Statistic.Value>40,509</Statistic.Value>
                        </Statistic>
                        <Statistic></Statistic>
                        <Statistic className="stats">
                            <Statistic.Label>FART</Statistic.Label>
                            <Statistic.Value>1.32$</Statistic.Value>
                        </Statistic>
                        <Statistic></Statistic>
             </Statistic.Group >
             </div>
        );
    }
}

export default Stats;