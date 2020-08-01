const path = require('path')

module.exports = {
    title: 'Choas-vue',
    description: 'Choas Choas and more',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {text: '组件', link: '/components/'},
            {text: '日志', link: '/logs/'},
            {text: '工程', link: '/project/'},
            {text: 'issues', link: 'https://github.com/choas-ui/choas-vue/issues'},
            {text: 'GitHub', link: 'https://github.com/choas-ui/choas-vue'}
        ],
        sidebarDepth: 4,
        sidebar: {
            '/components': [
                ['/components/', '概述'],
                {
                    title: '组件',
                    children:[
                        {
                            title: '基础组件',
                            children: [
                                [
                                    '/components/common/button', '按钮 CButton'
                                ],
                                [
                                    '/components/common/icon', '图标 CIcon'
                                ],
                                [
                                    '/components/common/message', '消息* CMessage'
                                ],
                                [
                                    '/components/common/modal', '弹层 CModal'
                                ],
                                [
                                    '/components/common/notification', '提醒* CNotification'
                                ],
                                [
                                    '/components/common/progress', '进度条* CProgress'
                                ],
                                [
                                    '/components/common/prompt', '轻提示* CPrompt'
                                ],
                                [
                                    '/components/common/selection', '下拉框* CSelection'
                                ],
                                [
                                    '/components/common/skeleton', '骨架屏* CSkeleton'
                                ],
                                [
                                    '/components/common/table', '表格* CTable'
                                ],
                                [
                                    '/components/common/tag', '标签 CTag'
                                ],
                                [
                                    '/components/common/timeLine', '时间线* CTimeLine'
                                ],
                                [
                                    '/components/common/tree', '树形 CTree'
                                ],
                            ]
                        },
                        {
                            title: '表单',
                            children:[
                                [
                                    '/components/common/radio', '单选框 CRadio'
                                ],
                                [
                                    '/components/common/checkbox', '复选框 CCheckbox'
                                ],
                                [
                                    '/components/common/input', '输入框* CInput'
                                ],
                                [
                                    '/components/common/input', '表单* CFrom'
                                ],
                            ]
                        },
                        {
                            title: '复合组件',
                            children: [
                                [
                                    '/components/complex/cascade', '级联* CCascade'
                                ],
                                [
                                    '/components/complex/treeModal', '树形弹框* CTreeModal'
                                ],
                                [
                                    '/components/complex/selectTree', '树形选择器* CSelectTree'
                                ],
                                [
                                    '/components/complex/shuttle', '穿梭框* CShuttle'
                                ],
                                [
                                    '/components/complex/uploader', '上传文件* CUploader'
                                ],
                            ]
                        },
                        {
                            title: '特异组件',
                            children: [
                                [
                                    '/components/custom/inputCascade', 'input级联* CInputCascade'
                                ],
                                [
                                    '/components/custom/inputTreeModal', 'input树形弹窗* CInputTreeModal'
                                ],
                            ]
                        }
                    ]
                }
            ],
            '/logs':[
                ['/logs/', '概述'],
                {
                    title: '迭代日志',
                    children: [
                        ['/logs/version', '日志'],
                    ]
                }
            ],
            '/project':[
                {
                    title: '工程*',
                    children: []
                }
            ]
        }
    },
    plugins: [
        [
            'vuepress-plugin-demo-container'
        ],
    ]
}

