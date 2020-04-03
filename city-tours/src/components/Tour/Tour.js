import React, { Component } from 'react';
import './tour.scss';

export default class Tour extends Component {
    state={
        showInfo:false
    }
    handleShow=()=>{
        this.setState({
            showInfo: !this.state.showInfo
        });
    }
    render() {
        const {id,city,img,name,info}=this.props.tour;
        return (
            <article className="tour">
                <img src={img} alt="City Tours Pic"/>
                <h4>aaa<span><i className="fal fa-times-square"></i></span></h4>
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>info<span><i className="fas fa-caret-square-down" onClick={this.handleShow}></i></span></h5>
                {this.state.showInfo&&(<p>{info}</p>)}
            </article>
        )
    }
}
