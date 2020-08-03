### 输入框
---
  <ul>
    <li>用于用户输入。</li>
    <li>一般显示的Input。</li>
    <li>带有listData的 渲染下拉框。</li>
    <li>带有search 提供搜索功能。</li>
    <li>带有multiple 提供多选功能。</li>
  </ul>

#### 双向绑定 v-model
----
    
:::demo
```html
    <template>
        <div>
                <div>
                    <p>值:{{value1}}</p>
                    <CInput v-model="value1" />
                </div>
                <div>
                    <p>值:{{value2}}</p>
                    <CInput v-model="value2" size="small" />
                </div>
                <div>
                    <p>值:{{value3}}</p>
                    <CInput v-model="value3" size="ssmall" />
                </div>
        </div>
    </template>
    <script>
        export default {
            data(){
                return {
                    value1: '',
                    value2: '',
                    value3: '', 
                }
            }
        }
    </script>
```
:::  

#### 尺寸 size
---

:::demo
```html
    <template>
        <div>
            <CInput size="llarge" placeholder="llarge input" />
            <CInput size="large" placeholder="large input" />
            <CInput placeholder="default input" />
            <CInput size="small" placeholder="small input" />
            <CInput size="ssmall" placeholder="ssmall input" />
        </div>
    </template>
```
:::

#### 清除 clearable
----
  <ul>
    <li>清除用户输入</li>
  </ul>  

:::demo
```html
    <template>
        <div>
                <div><CInput clearable /></div>
                <div><CInput size="small" clearable /></div>
                <div><CInput size="ssmall" clearable /></div>
        </div>
    </template>
```
:::
