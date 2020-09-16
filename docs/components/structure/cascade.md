### 级联
---
  <ul>
      <li>点击收起逻辑指令化。</li>
  </ul>


#### 数据源 listData
::: demo
```html
  <template>
    <CCascade :list-data="listData"
      v-model="selectedData"
      :reflectKey="{
          key: 'name',
          value: 'id'
      }"
      :placeholder="placeholder"
      :conditionProps="conditionProps"
      ></CCascade>
  </template>
    <script>
    export default {
        name: 'SomeComponent',
        props: {},
        data(){
            return {
                placeholder:'请选择机构',
                conditionProps:'node',
                selectedData:[
                    {
                        id: '014557484S-1-0017',
                        name: '尼古拉斯.赵',
                    }
                ],
                listData:[
                    {
                        id: '014557484S',
                        name: '特殊事务部',
                        node: 1,
                        children:[
                            {
                                id: '014557484S-1',
                                name: '后勤',
                                node: 1,
                                children: [
                                    {
                                        id: '014557484S-1-0017',
                                        name: '尼古拉斯.赵',
                                    }
                                ],
                            },
                            {
                                id: '014557484S-2',
                                name: '业务部',
                                node: 1,
                                children:[
                                    {
                                        id: '014557484S-2-1',
                                        name: '一组',
                                        node: 1,
                                    },
                                    {
                                        id: '014557484S-2-2',
                                        name: '二组',
                                        node: 1,
                                        children: [
                                             {
                                                id: '014557484S-2-2-0017',
                                                name: '谢广坤',
                                                node: 1,
                                             },
                                        ],
                                    },
                                ]
                            },
                        ]
                    }
                ],

            }           
        }
    }
    </script>
```
:::


#### 属性列表 props
---
  |属性|范围|类型|默认值|说明|
  |:-:|:---:|---|---|:---|
  |size|'ssmall' 'small' 'default' '' 'large' 'llarge' |String|''|尺寸|
  |type|'primary' 'success' 'warning' 'danger'| String | ''|默认提供的样式|
  |color|无| String| 无|字体颜色|
  |bgc|无| String| 无|背景颜色|
  |close|无| Function| 无|显示关闭按钮，触发关闭事件|

#### 问答 QAQ
---
  <ul>
    <li><b>Q:</b> 圆形图标？</li>
    <li><b>A:</b> 暂未提供圆形图标。</li>
  </ul>

#### 归类 Answer
---
  <ul>
    <li><b>Q:</b></li>
  </ul>

