#### 树形下拉框 SelectTree
---
树形下拉框


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
                    selectedValue: [],
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
                        mode="tree"
                        multiple

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
                    console.log(item, type, 123)
                    resolve({code: 200})
                },5000)
            }).then(res=>res)
        }
    }
        }
    </script>
```
:::
