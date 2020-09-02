### 快速条件筛选 QuickSearchBox
---
  <ul>
    <li>快速生成条件筛选。</li>
    <li>搜索，重置</li>
    <li>@search</li>
  </ul>
  
:::demo
```html
    <template>
        <CQuickSearchBox :options-data="optionsData"/>
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
                            placeholder: '请输入关键词',
                        },
                        {
                            tagName: 'CSelection',
                            label: '分类',
                            key: 'category',
                            placeholder: '请选择分类',
                            listData: [{key: '历史', value: '1'},{key: '军事', value: '2'}],
                        },
                        {
                            tagName: 'CCheckboxGroup',
                            label: '分组',
                            key: 'group',
                            listData: [{key: '读者', value: '1'},{key: '访客', value: '2'}],
                        },
                        {
                            tagName: 'CRadioGroup',
                            label: '是否已读',
                            key: 'isRead',
                            listData: [{key: '未读', value: '0'},{key: '已读', value: '1'}],
                        },
                        {
                            tagName: 'CRadioGroup',
                            model: 'advance',
                            label: '热度',
                            key: 'hotLv',
                            listData: [{key: 'lv1', value: '0'},{key: 'lv2', value: '1'}],
                        },
                        {
                            tagName: 'CCheckboxGroup',
                            model: 'advance',
                            label: '来源',
                            key: 'source',
                            listData: [{key: '地台', value: '0'},{key: '其他', value: '1'}],
                        },
                    ]
                }
            }
        }
    </script>
```
::: 

