import React, { Component } from 'react';
// import { connect } from 'react-redux';

class confirmHikePage extends Component {
    

    handleClick =() =>{
        this.props.history.push('/detail')
    }
    render(){
        return(
            <div>
               <input/> 
               <button onClick={this.handleClick}>Confirm</button>
               <button onSubmit={this.handleSubmit}>Cancel</button>
            </div>
        );
    }
}

export default confirmHikePage;