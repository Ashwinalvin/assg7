import React, { Component } from 'react';
import '../Styles/home.css';

import Wallpaper from './Wallpaper';
import QuickSearches from './QuickSearches';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Wallpaper />
                <QuickSearches />
            </React.Fragment>
        )
    }
}
