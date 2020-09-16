### 树形下拉框 SelectTree
---
  <ul>
    <li>没有SelectTree组件，Selection组件新增mode即可。</li>
  </ul>


#### 基础 basic
---
  <ul>
    <li>mode为tree时候。</li>
    <li>listData不为空。</li>
  </ul>

:::demo
```html
<template>
    <p>{{selectedValue}}</p>   
    <div>
        <CSelection :list-data="listData"
                    v-model="selectedValue"
                    mode="tree"
                    multiple
                    checkbox
                    controllers
                    :file-icon-fix-margin-right="20"
         />
    </div>   
</template>
<script>
        export default {
            name: 'SomeComponent',
            data(){
                return {
                    listData:[
                        {
                          key: '颜色',
                          value: '0',
                          expand: true,
                          children:[
                            {
                              key: '冷色',
                              value: '0-0',
                              expand: true,
                            },
                            {
                              key: '暖色',
                              value: '0-1',
                              expand: true,
                              children:[
                                {
                                  key: '红色',
                                  value: '0-1-0',
                                },
                                {
                                  key: '橙色',
                                  value: '0-1-1',
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
                    selectedValue: [{ "key": "冷色", "value": "0-0" }, { "key": "红色", "value": "0-1-0" }, { "key": "橙红", "value": "0-1-1-0" }, { "key": "橙色", "value": "0-1-1" }, { "key": "暖色", "value": "0-1" }, { "key": "颜色", "value": "0" }],
                }
            }
        }
</script>
```
:::

#### 更多属性
---

:::tip notice
  支持Tree组件相关的属性与方法
:::

:::demo
```html
<template>
        <p>{{selectedValue}}</p>   
        <div>
            <CSelection :list-data="listData"
                        v-model="selectedValue"
                        multiple
                        mode="tree"

                        checkbox
                        controllers
                        :file-icon-fix-margin-right="20"
                        line
                        :edit-tree-node="editTreeNode"
             >
                 <CIcon
                    slot="file-icon"
                    icon-name="choas-lists"
                 />
            </CSelection>
        </div>   
</template>
<script>
        export default {
            name: 'SomeComponent',
            data(){
                return {
                    listData:[
                        {
                          key: '颜色',
                          value: '0',
                          expand: true,
                          children:[
                            {
                              key: '冷色',
                              value: '0-0',
                              expand: true,
                            },
                            {
                              key: '暖色',
                              value: '0-1',
                              expand: true,
                              children:[
                                {
                                  key: '红色',
                                  value: '0-1-0',
                                },
                                {
                                  key: '橙色',
                                  value: '0-1-1',
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
                    selectedValue: [],
                }
            },
            methods:{
        editTreeNode(item, type){
            return new Promise(resolve => {
                setTimeout(()=>{
                    console.log(item, type, 123);
                    resolve({code: 200})
                },5000)
            }).then(res=>res)
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
