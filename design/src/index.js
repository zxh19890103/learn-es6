import './style.scss'

import Vue from 'vue'
import TopBar from './components/topbar'
import SearchBar from './components/searchbar'
import MainSec from './components/mainsec'
import Layer from './components/layer'
import Ad from './components/ad'
import Foot from './components/footer'

import LayerDataProvider from './layer-data'

new Vue({
    el: '#App',
    components: {
        TopBar,
        MainSec,
        SearchBar,
        Layer,
        Ad,
        Foot
    },
    template: require('./layout.html'),
    data: {
        LayerDataProvider
    }
})

