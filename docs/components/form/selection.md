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
                    listData: [
                        {key: '苹果', value: 'app'},
                        {key: '橘子', value: 'org'},
                        {key: '香蕉', value: 'ban'},
                    ],
                    selectedValue: [{key: '苹果', value: 'app'}],
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
                    listData: [
                        {key: 'A', value: 'A'},
                        {key: 'B', value: 'B'},
                        {key: 'C', value: 'C'},
                        {key: 'D', value: 'D'},
                        {key: 'E', value: 'E'},
                        {key: 'F', value: 'F'},
                        {key: 'G', value: 'G'},
                        {key: 'H', value: 'H'},
                        {key: 'I', value: 'I'},
                        {key: 'J', value: 'J'},
                        {key: 'K', value: 'K'},
                        {key: 'L', value: 'L'},
                        {key: 'M', value: 'M'},
                        {key: 'N', value: 'N'},
                        {key: 'O', value: 'O'},
                        {key: 'P', value: 'P'},
                        {key: 'Q', value: 'Q'},
                        {key: 'R', value: 'R'},
                        {key: 'S', value: 'S'},
                        {key: 'T', value: 'T'},
                    ],
                    selectedValue: [{key: 'A', value: 'A'}],
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
                    listData: [
                        {key: 'A', value: 'A'},
                        {key: 'B', value: 'B'},
                        {key: 'C', value: 'C'},
                        {key: 'D', value: 'D'},
                        {key: 'E', value: 'E'},
                        {key: 'F', value: 'F'},
                        {key: 'G', value: 'G'},
                        {key: 'H', value: 'H'},
                        {key: 'I', value: 'I'},
                        {key: 'J', value: 'J'},
                        {key: 'K', value: 'K'},
                        {key: 'L', value: 'L'},
                        {key: 'M', value: 'M'},
                        {key: 'N', value: 'N'},
                        {key: 'O', value: 'O'},
                        {key: 'P', value: 'P'},
                        {key: 'Q', value: 'Q'},
                        {key: 'R', value: 'R'},
                        {key: 'S', value: 'S'},
                        {key: 'T', value: 'T'},
                    ],
                    selectedValue: [{key: 'A', value: 'A'}],
                }
            }
        }
    </script>
```
:::

#### 分词和分词函数 splitText&splitHandle
---
  <ul>
     <li>多选生效</li>
  </ul>

