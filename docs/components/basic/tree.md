

:::demo
```html
    <template>
        <p>{{ selectedData }}</p>
        <CTree
            :list-data="listData"
            v-model="selectedData"
            multiple
            line
            checkbox
        />
    </template>
<script>
export default {
    data(){
        return {
            listData:[
                {
                    key: '颜色',
                    value: '0',
                    expand: true,
                    node: 1,
                    children:[
                        {
                            key: '冷色',
                            value: '0-0',
                        },
                        {
                            key: '暖色',
                            value: '0-1',
                            expand: true,
                            node: 1,
                            children:[
                                {
                                    key: '红色',
                                    value: '0-1-0',
                                },
                                {
                                    key: '橙色',
                                    value: '0-1-1',
                                    node: 1,
                                    expand: true,
                                    children: [
                                         {
                                            key: '橙红',
                                            value: '0-1-1-0',
                                         },
                                    ],
                                },
                            ]
                        },
                    ]
                }
            ],
            selectedData:[
                {
                    key: '颜色',
                    value: '0',
                },
            ],
            searchStr:'',
        }
    },
    methods:{
    },
}
</script>
```
:::
