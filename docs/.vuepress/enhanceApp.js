export default ({
                    Vue, // the version of Vue being used in the VuePress app
                    options, // the options for the root Vue instance
                    router, // the router instance for the app
                    siteData // site metadata
                }) => {
    // TODO: Input中使用了window对象，在node编译过程中无法使用，因此存在报错。
    // TODO: 这里使用异步组件绕过了验证。
    // TODO: UnhandledPromiseRejectionWarning: ReferenceError: window is not defined
    import('choas-vue').then(res=>Vue.use(res.default))
}
