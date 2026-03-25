---
title: 稳定写法与限制
---

# 稳定写法与限制

这页只整理“当前建议依赖的稳定写法”和“不要默认依赖的边角行为”。

## 推荐优先使用

### 触发器

- `onInteract`
- `onRightClick`
- `onLeftClick`
- `onPlace`
- `onAttack`
- `onKill`
- `onShoot`
- `onHit`
- `onPlaceInSlot(<slot>)`
- `onPlaceBy(<uuid>)`
- `onPlaceBy(<alias>)`

### 动作

- `tell`
- `sound`
- `action-bar`
- `title`
- `command`
- `admin`
- `console`
- `update:`
- `emit`
- `set-data`
- `delay`
- `sync`
- `require`
- `check`

### 表达式

- `when(...)`
- `all(...)`
- `any(...)`
- `roll(...)`
- `intRange(...)`
- `first()` / `last()`
- `choice()` / `sample()`
- `${...}`

## 不建议默认依赖

### 模块

- `color`：当前默认未注册

### 触发器

- `onPickOutSlot(*)`：当前不要当稳定写法依赖

### 动作写法

- `update` 不要省略成裸 `update`，优先写 `update:`
- `attach` 内不要再塞很复杂的嵌套动作块
- `delay` / `chance` 里不要默认嵌很多层前缀动作
- `set` 不要默认塞包含多个 `=` 的复杂表达式

### 条件语义

- `require` 最稳妥只写 `true` / `false`
- `check` 最稳妥也按严格布尔文本理解
- `chance` 当前实现方向有反编译层面的疑点，需要实机测试再依赖精确概率语义

## 用法判断原则

如果一种写法：

- 当前文档没有稳定例子
- 需要依赖复杂嵌套切分
- 需要猜内部实现细节

那就不要把它当成通用模板。
