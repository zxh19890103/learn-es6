import './style.scss'

export default {
    template: require('./tpl.html'),
    data() {
        return {
            appName: 'Hello, Here is Topbar',
            items: [
                { text: '我的订单', hasdropdown: false },
                { text: '我的京东', hasdropdown: true },
                { text: '京东会员', hasdropdown: false },
                { text: '企业采购', hasdropdown: true },
                { text: '客户服务', hasdropdown: true },
                { text: '网站导航', hasdropdown: true },
                { text: '手机京东', hasdropdown: false }
            ]
        }
    },
    methods: {
        dropdown(e, item) {
        }
    }
}