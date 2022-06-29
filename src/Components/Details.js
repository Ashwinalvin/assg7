import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import '../Styles/details.css';

export default class Details extends Component {
    render() {
        return (
            <div className="container details">
                <div className="images">
                    <Carousel showThumbs={false}>
                        <div>
                            <img src={require('../Assets/breakfast.png').default} alt="not found" />
                        </div>
                        <div>
                            <img src={require('../Assets/lunch.png').default} alt="not found" />
                        </div>
                        <div>
                            <img src={require('../Assets/dinner.png').default} alt="not found" />
                        </div>
                    </Carousel>
                </div>
                <div className="restName my-3">
                    The Big Chill Cakery
                    <button className="btn btn-danger float-end mt-4">Place Online Order</button>
                </div>
                <div className="myTabs mb-5">
                    <Tabs>
                        <TabList>
                            <Tab>Overview</Tab>
                            <Tab>Contact</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="about my-5">About this place</div>
                            <div className="cuisine">Cuisine</div>
                            <div className="cuisines">Bakery, Fast-food</div>
                            <div className="cuisine mt-3">Average Cost</div>
                            <div className="cuisines"> &#8377; 700 for two people (approx.)</div>
                        </TabPanel>
                        <TabPanel>
                            <div className="cuisines my-5">Phone Number
                                <div className="text-danger">+91 114004566</div>
                            </div>
                            <div className="cuisine mt-4">The Big Chill Cakery</div>
                            <div className="text-muted mt-2">
                                Shop 1, Plot D, Samruddhi Complex, Chincholi, 
                                <br/>
                                Mumbai-400002, Maharashtra
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        )
    }
}
