### 输入框
---
  <ul>
    <li>用于用户输入。</li>
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

#### 宽度 width
---

#### 尺寸 size
---

:::demo
```html
    <template>
        <div>
            <div>
                <p/>
                <CInput size="llarge" placeholder="llarge size input" />
            </div>
            <div>
                <p/>
                <CInput size="large" placeholder="large size input" />
            </div>
            <div>
                <p/>
                <CInput placeholder="default size input" />
            </div>
            <div>
                <p/>
                <CInput size="small" placeholder="small size input" />
            </div>
            <div>
                <p/>
                <CInput size="ssmall" placeholder="ssmall size input" />
            </div>
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
            <div>
                <p/>
                <CInput placeholder="default size input" clearable />
            </div>
            <div>
                <p/>
                <CInput placeholder="default size input" size="small" clearable />
            </div>
            <div>
                <p/>
                <CInput placeholder="default size input" size="ssmall" clearable />
            </div>
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
                <p/>
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
                <p/>
                <CInput placeholder="default size input" clearable>
                    <CIcon slot="behind-icon"
                           icon-name="choas-setting"
                           width="20"
                           height="20"
                           color="#aaa"
                    />
                </CInput>
            </div>
            <div>
                <p/>
                <CInput placeholder="default size input">
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

#### type 类型
---
  <ul>
    <li>支持text password number search四种类型。如需其他类型，可以考虑使用其他组件。</li>
    <li>在number模式下支持后缀图标不生效, max min属性生效，提供add-icon min-icon两个插槽，但不能调整大小。</li>
    <li>在search模式下额外出现一个button。</li>
  </ul>
  
  <ul>
    <li>text模式</li>
    <li>maxLength限制输入长度。</li>
  </ul>
  
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
                <CInput v-model="value2" :max-length="10" />
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

  <ul>
    <li>password模式。</li>
    <li>后置图标显示查看密码按钮。</li>
  </ul>

:::demo
```html
    <template>
        <div>
            <div>
                <p>值:{{value1}}</p>
                <CInput v-model="value1" type="password" />
            </div>
            <div>
                <p>值:{{value2}}</p>
                <CInput v-model="value2"
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

  <ul>
    <li>number模式。</li>
    <li>提供max min属性。</li>
  </ul>

:::demo
```html
    <template>
        <div>
            <div>
                <p>值:{{value1}}</p>
                <CInput v-model="value1"
                        type="number"
                        :min="10"
                        :max="100"
                        clearable
                />
            </div>
            <div>
                <p>值:{{value2}}</p>
                <CInput v-model="value2"
                        type="number"
                        size="llarge"
                        :min="10"
                        :max="100"
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

  <ul>
    <li>search模式。</li>
    <li>按钮可以通过noSearBtn取消。</li>
    <li>自定义按钮renderSearchBtn。</li>
    <li>search事件触发默认行为。</li>
  </ul>

:::demo
```html
    <template>
        <div>
            <div>
                <p>值:{{value1}}</p>
                <CInput v-model="value1"
                        type="search"
                         @search="searchHandle(this.value1)"
                />
            </div>
            <div>
                <p>值:{{value2}}</p>
                <CInput v-model="value2"
                        type="search"
                        noSearchBtn
                />
            </div>
            <div>
                <p>值:{{value3}}</p>
                <CInput v-model="value3"
                        type="search"
                        noSearchBtn
                >
                    <CIcon slot="behind-icon"
                        icon-name="choas-search"
                        width="20"
                        height="20"
                        color="#aaa"
                        @click="searchHandle(this.value3)"
                    />
                </CInput>
            </div>
            <div>
                <p>值:{{value4}}</p>
                <CInput v-model="value4"
                        type="search"
                        :render-search-btn="renderSearchBtn"
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
                    value3: '',
                    value4: '',
                }
            },
            methods:{
                searchHandle(value){
                    alert('searchValue: '+ value);
                },
                renderSearchBtn(h){
                    return h('a', {
                                     style:{
                                        lineHeight: '40px',
                                        marginLeft: '10px',
                                        cursor: 'pointer',
                                        color: 'red',
                                     },
                                    on: {
                                        click:(e)=>{
                                            e.preventDefault();
                                            alert('searchValue: '+ this.value4);
                                        }
                                    }
                                },
                             ['search']
                    )
                }
            }
        }
    </script>
```
:::

  <ul>
    <li>textArea模式。</li>
    <li>仅在textArea下提供rows属性,控制行数,默认3。</li>
    <li>仅在textArea下提供lineHeight控制行高,默认与size相关。</li>
  </ul>

:::demo
```html
    <template>
        <div>
            <div>
                <p>值:{{value1}}</p>
                <CInput v-model="value1"
                        type="textArea"
                        rows="5"
                        lineHeight="20"
                />
            </div>
        </div>
    </template>
    <script>
        export default {
            data(){
                return {
                    value1: '',
                }
            },
            methods:{
            }
        }
    </script>
```
:::

#### 补全字符和补全字符函数 autocomplete&autocompleteHandle
---
  <ul>
     <li>单选情况下的补全字符和补全字符函数。</li>
  </ul>

#### 事件 event 
---
  <ul>
    <li>支持input change focus blur keyup 五种事件</li>
  </ul>

#### 属性列表 props
---
  |属性|范围|类型|默认值|说明|
  |:-:|:---:|---|---|:---|
  |width|无|String|100%|控制输入框宽度|
  |size|'ssmall' 'small' 'default' 'large' 'llarge'| String | 'default'|按钮内边距|
  |clearable|truthy falsy| Boolean| false|显示清除按钮|
  |slot|'left' 'right'| String | 无 |插入左/右图标插槽|
  |prefix-icon|无|slot|无|提供前插槽|
  |behind-icon|无|slot|无|提供后插槽|
  |type|'text' 'password' 'number' 'search'|String|text|组件类型|
  |maxLength|无|Number|无|限制收入长度|
  |max|无|Number|无|最大值|
  |min|无|Number|无|最小值|
  |rows|无|String|3|仅在textArea下生效|
  |lineHeight|无|String|与size相关|仅在textArea下生效|
  |correctionTimeSpan|无|Number|1|number类型下，输入结束后自动修正数据的间隔|
  |noSearBtn|truthy falsy|Boolean|false|search模式下自动取消搜索按钮|
  |renderSearchBtn|无|Function|无|search模式下自定义搜索按钮|
  |value|无|String|''|初始值与事件搭配|
  |input|无|Function|无|返回value|
  |focus|无|Function|无|返回value|
  |blur|无|Function|无|返回value|
  |keyup|无|Function|无|返回value|
  |change|无|Function|无|返回value|
  

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
