

#### 多选 multiple
----
  <ul>
     <li>multiple 多选功能。</li>
     <li>condition-props控制树形和级联的不可选条件，condition-props为truthy树形列表用户不可选。</li>
     <li>多选时，点击父节点将会添加其子节点，现已实现正选反选功能。</li>
  </ul>

:::demo
```html
    <template>
        <CInputTreeModal
               :list-data="listData"
               v-model="selectedData"
               :can-be-edited="canBeEdited"
               :reflect-key="reflectKey"
               title="请选择机构"
               mask
               cancel
               multiple
        />
    </template>
    <script>
        export default {
            data(){
                return{
                    canBeEdited: true,
                    selectedData: [{
                        id: '014557484S-2-2-0047',
                        name: '谢广坤',
                    }],
                    reflectKey: {
                        key: 'name',
                        value: 'id'
                    },
                    listData: [
                        {
                            id: '014557484S',
                            name: '特殊事务部',
                            expand: true,
                            node: 1,
                            children: [
                                {
                                    id: '014557484S-0',
                                    name: '指挥部',
                                    expand: true,
                                    node: 1,
                                    children: [
                                        {
                                            id: '014557484S-0-007',
                                            name: '谢永强',
                                        },
                                        {
                                            id: '014557484S-0-008',
                                            name: '谢大脚',
                                        },
                                    ],
                                },
                                {
                                    id: '014557484S-1',
                                    name: '后勤',
                                    expand: true,
                                    node: 1,
                                    children: [
                                        {
                                            id: '014557484S-1-0017',
                                            name: '尼古拉斯.赵',
                                        },
                                        {
                                            id: '014557484S-1-0019',
                                            name: '王常规',
                                        },
                                        
                                    ],
                                },
                                {
                                    id: '014557484S-2',
                                    name: '业务部',
                                    expand: true,
                                    node: 1,
                                    children: [
                                        {
                                            id: '014557484S-2-1',
                                            name: '一组',
                                            node: 1,
                                        },
                                        {
                                            id: '014557484S-2-2',
                                            name: '二组',
                                            expand: true,
                                            node: 1,
                                            children: [
                                                {
                                                    id: '014557484S-2-2-0047',
                                                    name: '谢广坤',
                                                },
                                                {
                                                    id: '014557484S-2-2-0048',
                                                    name: '王小蒙',
                                                },
                                                {
                                                    id: '014557484S-2-2-0049',
                                                    name: '刘能',
                                                },
                                            ],
                                        },
                                    ]
                                },
                            ]
                        },
                    ],
                }
            },
            mounted(){
              setTimeout(()=>{
                this.selectedData.push({
                   id: '014557484S-1-0019',
                   name: '王常规',
                })
              },2000)
              setTimeout(()=>{
                this.selectedData.splice(0,2);
console.log(this.selectedData)
              },5000)
            }
        }
    </script>
```
:::

