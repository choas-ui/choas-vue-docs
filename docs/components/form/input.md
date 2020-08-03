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
                <CInput v-model="value1" placeholder="v-model module" />
            </div>
            <div>
                <p>值:{{value2}}</p>
                <CInput v-model="value2" size="small" placeholder="v-model module" />
            </div>
            <div>
                <p>值:{{value3}}</p>
                <CInput v-model="value3" size="ssmall" placeholder="v-model module" />
            </div>
        </div>
    </template>
    <script>
        export default {
            data(){
                return {
                    value1: 'helloWorld!',
                    value2: 'helloWorld!',
                    value3: 'helloWorld!', 
                }
            }
        }
    </script>
```
::: 

#### type 类型
---
  <ul>
    <li>支持text search password 三种类型。如需其他类型，可以考虑使用其他组件。</li>
    <li>在text模式下支持列表多选。</li>
    <li>仅在password模式下支持passwordReplacer,用于掩盖密码。</li>
  </ul>
  
:::demo
```html
    <template>
        <div>
            <div>
                <p>值:{{value1}}</p>
                <CInput v-model="value1" size="small" />
            </div>
            <div>
                <p>值:{{value2}}</p>
                <CInput v-model="value2" size="small" type="password" />
            </div>
            <div>
                <p>值:{{value2}}</p>
                <CInput v-model="value2"
                        size="small"
                        type="password"
                        password-replacer="&hearts;"
                />
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

#### 宽度 width
---

#### 尺寸 size
---

:::demo
```html
    <template>
        <div>
            <div><CInput size="llarge" placeholder="llarge size input" /></div>
            <div><CInput size="large" placeholder="large size input" /></div>
            <div><CInput placeholder="default size input " /></div>
            <div><CInput size="small" placeholder="small size input" /></div>
            <div><CInput size="ssmall" placeholder="ssmall size input" /></div>
        </div>
    </template>
```
:::


#### 清除 clearable
---

:::demo
```html
    <template>
        <div>
            <div><CInput placeholder="default size input" clearable /></div>
            <div><CInput placeholder="default size input" size="small" clearable /></div>
            <div><CInput placeholder="default size input" size="ssmall" clearable /></div>
        </div>
    </template>
```
:::

#### 内前缀图标插槽和内后缀图标插槽 prefix-icon&behind-icon
---
  <ul>
    <li>内前缀图标插槽位置会出现在Input内部前方。</li>
    <li>内后缀图标插槽位置会出现在Input内部后方，如果和clearable同时出现，会取消显示clearable。</li>
  </ul>  

:::demo
```html
    <template>
        <div>
            <div>
                <CInput placeholder="default size input" clearable >
                    <CIcon slot="prefix-icon"
                           icon-name="choas-user"
                           width="20"
                           height="20"
                           color="#aaa"
                    />
                </CInput>
            </div>
            <div>
                <CInput placeholder="default size input" >
                    <CIcon slot="behind-icon"
                           icon-name="choas-setting"
                           width="20"
                           height="20"
                           color="#aaa"
                    />
                </CInput>
            </div>
            <div>
                <CInput placeholder="default size input" clearable>
                    <CIcon slot="behind-icon"
                           icon-name="choas-scanner"
                           width="20"
                           height="20"
                           color="#aaa"
                    />
                </CInput>
            </div>
        </div>
    </template>
```
:::

#### 长度限制 maxLength
---

#### 下拉列表 listData
---

#### 映射 reflectKey
---
