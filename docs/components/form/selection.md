### 选择器
---
  <ul>
    <li>选择列表内容。</li>
    <li>提供分词功能。</li>
  </ul>

#### 基础 basic
---

:::demo
```html
    <template>
        <p>{{selectedValue}}</p>   
        <div>
            <CSelection :list-data="listData" v-model="selectedValue" />
        </div>   
    </template>
    <script>
        export default {
            name: 'SomeComponent',
            data(){
                return {
                    listData: [],
                    selectedValue: [],
                }
            },
            created(){
                this.$set(this, 'listData', this.createData());
                this.$set(this, 'selectedValue', [this.listData[0]]);
            },       
            methods:{
                createData(){
                    const str ='0123456789';
                    return Array.from(str).map(item=>({key: item, value: item}))
                }
            }
        }
    </script>
```
:::

#### 多选 multiple
---
  <ul>
     <li>多选模式。</li>
  </ul>
  
:::demo
```html
    <template>
        <p>{{selectedValue}}</p>   
        <div>
            <CSelection :list-data="listData"
                        v-model="selectedValue"
                        multiple
             />
        </div>   
    </template>
    <script>
        export default {
            name: 'SomeComponent',
            data(){
                return {
                    listData: [],
                    selectedValue: [],
                }
            },
            created(){
                this.$set(this, 'listData', this.createData());
                this.$set(this, 'selectedValue', [this.listData[0]]);
            },       
            methods:{
                createData(){
                    const str ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    return Array.from(str).map(item=>({key: item, value: item}))
                }
            }
        }
    </script>
```
:::

:::demo
```html
    <template>
        <p>{{selectedValue}}</p>   
        <div>
            <CSelection :list-data="listData"
                        v-model="selectedValue"
                        placeholder="请选择"
                        size="small"
                        multiple
             />
        </div>   
    </template>
    <script>
        export default {
            name: 'SomeComponent',
            data(){
                return {
                    listData: [],
                    selectedValue: [],
                }
            },
            created(){
                this.$set(this, 'listData', this.createData());
                this.$set(this, 'selectedValue', [this.listData[0]]);
            },       
            methods:{
                createData(){
                    const str ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    return Array.from(str).map(item=>({key: item, value: item}))
                }
            }
        }
    </script>
```
:::

#### 分词和分词函数 splitText&splitHandle
---
  <ul>
     <li>多选生效时生效。</li>
     <li>按下回车键自动向选中内容添加该选项，key和value相同。</li>
  </ul>
  
:::demo
```html
    <template>
        <p>{{selectedValue}}</p>   
        <div>
            <CSelection :list-data="listData"
                        v-model="selectedValue"
                        placeholder="请选择"
                        size="small"
                        multiple
             />
        </div>   
    </template>
    <script>
        export default {
            name: 'SomeComponent',
            data(){
                return {
                    listData: [],         
                    selectedValue: [],
                }
            },
            created(){
                this.$set(this, 'listData', this.createData());
                this.$set(this, 'selectedValue', [this.listData[0]]);
            },       
            methods:{
                createData(){
                    const str ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    return Array.from(str).map(item=>({key: item, value: item}))
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
  |size|'ssmall' 'small' 'default' 'large' 'llarge'| String | 'default'|按钮内边距|
  |placeholder|无|String|无|提供一个悬停时的说明文字|
  |class-name|无|String|无|组件最外层添加一个新的类名|
  |prefix|无|String|无|是否在该组件所有类前加前缀|

#### 问答 QAQ
---
  <ul>
    <li><b>Q:</b></li>
    <li><b>A:</b></li>
  </ul>

#### 归类 Answer
---
  <ul>
    <li><b>Q:</b></li>
  </ul>
