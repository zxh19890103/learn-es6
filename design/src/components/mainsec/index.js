import './style.scss'

export default {
    template: require('./tpl.html'),
    data() {
        return {
            qeitems: [
                { img: '//img11.360buyimg.com/cms/jfs/t3133/223/9200586007/46104/742ad26e/58d150b3Nd7273c5a.jpg' },
                { img: '//img11.360buyimg.com/cms/jfs/t3118/213/9290515621/44700/1b3a6dd/58d150beN829e2c0e.jpg' },
                { img: '//img10.360buyimg.com/cms/jfs/t9001/306/740186106/47319/7ed381fe/59ae6355N9620f6c5.jpg' },
                { img: '//img11.360buyimg.com/cms/jfs/t4063/309/2518045546/38102/d60a1a83/58d150cfN624d9721.jpg' },
            ],
            naviitems: [
                { text: '哥伦比亚旗舰店', key: '1' },
                { text: '渔具双11', key: '2' },
                { text: '骑行好货抢先定', key: '3' },
                { text: '自营户外', key: '4' },
                { text: 'phenix旗舰店', key: '5' }
            ],
            bigcats: ['京东','体育服务','运动勋章','运动馆','户外馆','体育馆','骑行馆','型动派'],
            cats: [
                {
                    title: '户外鞋服',
                    items: ['冲锋衣裤','徒步鞋','抓绒衣裤','羽绒服棉服','越野跑鞋','软壳登山鞋','休闲鞋']
                },
                {
                    title: '户外装备',
                    items: ['帐篷','照明','背包','智能手环','工具','望远镜','旅游用品','便携桌椅床','野餐烧烤']
                },
                {
                    title: '骑行运动',
                    items: ['山地车','电动车','电动滑板车','骑行穿戴装备','公路车','平衡车','折叠车','教育培训','装车服务']
                },
                {
                    title: '垂钓',
                    items: ['垂钓季','鱼竿鱼线','钓鱼桌椅','浮漂鱼饵','钓鱼配件','钓鱼箱包']
                },
                {
                    title: '游泳',
                    items: ['泳镜','女士泳衣','泳裤','泳帽','冲浪','潜水','游泳包','防水包']
                }
            ]
        }
    }
}