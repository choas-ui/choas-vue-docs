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
---

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
                    value1: 'helloworld!',
                    value2: 'helloworld!',
                    value3: 'helloworld!', 
                }
            }
        }
    </script>
```
::: 

#### type 类型
---
  <ul>
    <li>仅仅支持text password 两种类型。如需其他类型，可以考虑使用其他组件。</li>
    <li>仅仅在text模式下支持列表 多选。</li>
  </ul>
  
:::demo
```html
    <template>
        <div>
                <div>
                    <p>值:{{value1}}</p>
                    <CInput v-model="value1" size="small" type="password" />
                </div>
                <div>
                    <p>值:{{value2}}</p>
                    <CInput v-model="value2" size="small" type="password" />
                </div>
        </div>
    </template>
    <script>
        export default {
            data(){
                return {
                    value1: '',
                    value2: '',
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
            <div><CInput size="llarge" placeholder="llarge input" /></div>
            <div><CInput size="large" placeholder="large input" /></div>
            <div><CInput placeholder="default input" /></div>
            <div><CInput size="small" placeholder="small input" /></div>
            <div><CInput size="ssmall" placeholder="ssmall input" /></div>
        </div>
    </template>
```
:::


#### 清除 clearable
---
  <ul>
    <li>清除用户输入</li>
  </ul>  

:::demo
```html
    <template>
        <div>
                <div><CInput placeholder="default input" clearable /></div>
                <div><CInput placeholder="default input" size="small" clearable /></div>
                <div><CInput placeholder="default input" size="ssmall" clearable /></div>
        </div>
    </template>
```
:::

#### 前缀图标 prefix-icon
---
  <ul>
    <li>插槽。</li>
  </ul>  

:::demo
```html
    <template>
        <div>
            <CInput placeholder="default input" clearable >
                <CIcon slot="prefix-icon"
                       icon-name="choas-user"
                       width="20"
                       height="20"
                       :style="{
                            width:''     
                       }"
                />
            </CInput>
            <CInput placeholder="default input" size="small" clearable ></CInput>
            <CInput placeholder="default input" size="ssmall" clearable ></CInput>
        </div>
    </template>
```
:::
