import React, { Component } from 'react';
import Tour from '../Tour';
import './tourlist.scss';

export default class Tourlist extends Component {
    state={
        tours: this.props.tourlist
    }
    render() {
        return (
            <section className="tourlist">                                        
                <Tour tour={this.state.tours[0]}/>
                <Tour tour={this.state.tours[1]}/>
                <Tour tour={this.state.tours[2]}/>
                <Tour tour={this.state.tours[3]}/>
            </section>
        )
    }
}
