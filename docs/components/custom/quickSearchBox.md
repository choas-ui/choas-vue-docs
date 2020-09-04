### 快速条件筛选 QuickSearchBox
---
  <ul>
    <li>数据生成条件筛选组件。</li>
    <li>支持注册的自定义组件,需要自行处理样式及逻辑。</li>
  </ul>
  
#### 基础 basic 

:::demo
```html
    <template>
        <CQuickSearchBox :list-data="optionsData" @searchHandle="searchHandle"/>
    </template>
    <script>
        export default {
            data(){
                return {
                    optionsData:[
                        {
                            tagName: 'CInput',
                            label: '关键词',
                            key: 'keyWord',
                            value: '',
                            placeholder: '请输入关键词',
                        },
                        {
                            tagName: 'CSelection',
                            label: '分类',
                            key: 'category',
                            placeholder: '请选择分类',
                            value: [{}],
                            listData: [{key: '历史', value: '1'},{key: '军事', value: '2'}],
                        },
                        {
                            tagName: 'CCheckboxGroup',
                            label: '分组',
                            key: 'group',
                            value: [],
                            listData: [{key: '读者', value: '1'},{key: '访客', value: '2'}],
                        },
                        {
                            tagName: 'CRadioGroup',
                            label: '是否已读',
                            key: 'isRead',
                            value: [],
                            listData: [{key: '未读', value: '0'},{key: '已读', value: '1'}],
                        },
                        {
                            tagName: 'CRadioGroup',
                            model: 'advance',
                            label: '热度',
                            key: 'hotLv',
                            value: [],
                            listData: [{key: 'lv1', value: '0'},{key: 'lv2', value: '1'}],
                        },
                        {
                            tagName: 'CCheckboxGroup',
                            model: 'advance',
                            label: '来源',
                            key: 'source',
                            value: [],
                            listData: [{key: '地台', value: '0'},{key: '其他', value: '1'}],
                        },
                    ]
                }
            },
            methods:{
                searchHandle(v){
                    console.log(v);
                }
            }
        }
    </script>
```
::: 

#### 插槽 slot 
  <ul>
    <li>用以替换按钮组。</li>
  </ul>
  
:::demo
```html
    <template>
        <CQuickSearchBox :list-data="optionsData">
            <template slot="btn-box">
                <div @click="click">自定义的按钮组</div>
            </template>
        </CQuickSearchBox>
    </template>
    <script>
        export default {
            data(){
                return {
                    optionsData:[
                        {
                            tagName: 'CInput',
                            label: '关键词',
                            key: 'keyWord',
                            value: '',
                            placeholder: '请输入关键词',
                        },
                        {
                            tagName: 'CSelection',
                            label: '分类',
                            key: 'category',
                            placeholder: '请选择分类',
                            value: [{}],
                            listData: [{key: '历史', value: '1'},{key: '军事', value: '2'}],
                        },
                        {
                            tagName: 'CCheckboxGroup',
                            label: '分组',
                            key: 'group',
                            value: [],
                            listData: [{key: '读者', value: '1'},{key: '访客', value: '2'}],
                        },
                        {
                            tagName: 'CRadioGroup',
                            label: '是否已读',
                            key: 'isRead',
                            value: [],
                            listData: [{key: '未读', value: '0'},{key: '已读', value: '1'}],
                        },
                        {
                            tagName: 'CRadioGroup',
                            model: 'advance',
                            label: '热度',
                            key: 'hotLv',
                            value: [],
                            listData: [{key: 'lv1', value: '0'},{key: 'lv2', value: '1'}],
                        },
                        {
                            tagName: 'CCheckboxGroup',
                            model: 'advance',
                            label: '来源',
                            key: 'source',
                            value: [],
                            listData: [{key: '地台', value: '0'},{key: '其他', value: '1'}],
                        },
                    ]
                }
            },
            methods:{
                click(v){
                    console.log(v)
                }
            }
        }
    </script>
```
::: 
