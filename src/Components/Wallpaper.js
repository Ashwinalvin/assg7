import React, { Component } from 'react'

export default class Wallpaper extends Component {
    render() {
        return (
            <>
                <img src={require('../Assets/home.png').default} alt="not found" height="450px" width="100%"/>
                <div className="topSection">
                    <div className="logo">e!</div>
                    <div className="desc-text">Find the best restaurants, cafés, and bars</div>
                    <div className="search-options">
                        <select className="location">
                            <option disabled value="">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Chennai">Chennai</option>
                        </select>
                        <input className="search" type="text" placeholder="Search for food.."/>
                    </div>
                </div>
            </>
        )
    }
}
