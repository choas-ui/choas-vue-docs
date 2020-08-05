
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
            '/': [
                ['/components/', '概述'],
                {
                    title: '组件',
                    children:[
                        {
                            title: '表格',
                            children: [
                                [
                                    '/components/table/table', '表格* CTable'
                                ],
                            ]
                        },
                        {
                            title: '表单',
                            children:[
                                [
                                    '/components/form/radio', '单选框 CRadio'
                                ],
                                [
                                    '/components/form/checkbox', '复选框 CCheckbox'
                                ],
                                [
                                    '/components/form/input', '输入框* CInput'
                                ],
                                [
                                    '/components/form/form', '表单* CFrom'
                                ],
                            ]
                        },
                        {
                            title: '基础组件',
                            path: '/components/basic/',
                            children: [
                                [
                                    '/components/basic/button', '按钮 CButton'
                                ],
                                [
                                    '/components/basic/dropdown', '下拉菜单* CDropdown'
                                ],
                                [
                                    '/components/basic/icon', '图标 CIcon'
                                ],
                                [
                                    '/components/basic/loading', '加载* CLoading'
                                ],
                                [
                                    '/components/basic/menu', '菜单* CMenu'
                                ],
                                [
                                    '/components/basic/message', '消息 CMessage'
                                ],
                                [
                                    '/components/basic/modal', '弹层 CModal'
                                ],
                                [
                                    '/components/basic/notice', '提醒* CNotice'
                                ],
                                [
                                    '/components/basic/notification', '通知* CNotification'
                                ],
                                [
                                    '/components/basic/progress', '进度条* CProgress'
                                ],
                                [
                                    '/components/basic/prompt', '轻提示 CPrompt'
                                ],
                                [
                                    '/components/basic/selection', '下拉框* CSelection'
                                ],
                                [
                                    '/components/basic/skeleton', '骨架屏* CSkeleton'
                                ],

                                [
                                    '/components/basic/tag', '标签 CTag'
                                ],
                                [
                                    '/components/basic/timeLine', '时间线* CTimeLine'
                                ],
                                [
                                    '/components/basic/tree', '树形 CTree'
                                ],
                            ]
                        },
                        {
                            title: '结构组件',
                            path: '/components/structure/',
                            children: [
                                [
                                    '/components/structure/breadCrumb', '面包屑* CBreadCrumb'
                                ],
                                [
                                    '/components/structure/cascade', '级联* CCascade'
                                ],
                                [
                                    '/components/structure/dialogBox', '对话框* CDialogBox'
                                ],
                                [
                                    '/components/structure/messageListBox', '消息列表* CMessageListBox'
                                ],
                                [
                                    '/components/structure/pagination', '分页* CPagination'
                                ],
                                [
                                    '/components/structure/selectTree', '树形选择器* CSelectTree'
                                ],
                                [
                                    '/components/structure/shuttle', '穿梭框* CShuttle'
                                ],
                                [
                                    '/components/structure/steps', '步骤条* CSteps'
                                ],
                                [
                                    '/components/structure/treeModal', '树形弹框* CTreeModal'
                                ],
                                [
                                    '/components/structure/uploader', '上传文件* CUploader'
                                ],
                            ]
                        },
                        {
                            title: '定制组件',
                            children: [
                                [
                                    '/components/custom/checkboxCascade', '多选级联* CCheckboxCascade'
                                ],
                                [
                                    '/components/custom/inputCascade', 'input级联* CInputCascade'
                                ],
                                [
                                    '/components/custom/inputTreeModal', 'input树形弹窗 CInputTreeModal'
                                ],
                                [
                                    '/components/custom/quickSearchBox', '快搜条件筛选* CQuickSearchBox'
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
        ]
    ]
};
