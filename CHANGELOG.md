## 更新日志

### release/0.0.1
2019-02-26

#### 修复
- 修复 Jest 配置问题
- 修复 @babel/runtime 插件未引入问题

#### 优化
- 新增 Button 组件 (@Lindberg)
  - inline => 是否为内联 Button
  - disabled => 是否禁用 Button
  - outline => 是否为空心 Button
  - type => 类型，可选值 primary、danger、warn、dark
  - native-type => 原生 type 属性
- 新增 Switch 组件 (@Mayfly)

### release/0.0.2
2019-02-27

#### 优化
- 新增 Loading 组件 (@Lindberg)
- 新增 Toast 组件 (@Lindberg)
  - mask => 是否使用遮罩层
  - message => 展示文字信息
  - type => 设置Toast类型，可选值 loading、text
  - position => 设置Toast位置，可选值 top、middle、bottom
- 新增 Button 组件 UT (@Lindberg)

### release/0.0.3
2019-03-15

#### 优化
- 新增 Range 组件 (@Lindberg)
  - min => 设定范围最小值
  - max => 设定范围最大值
  - step => 设定每次移动的最小步长
  - disabled => 是否禁用 Range
