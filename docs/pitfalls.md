---
title: 常见坑
---

# 常见坑

## `internal.uuid` 不能省

没有 `internal.uuid` 时不要指望配置能正常当成标准物品使用。

## `internal.alias` 要写列表

推荐：

```yaml
internal:
  alias: ["test_item"]
```

## `action.<trigger>` 的值要写列表

推荐：

```yaml
action:
  onInteract:
    - "tell:&aHello"
```

不要把它直接写成单个字符串。

## `update` 建议写成 `update:`

不要省略末尾冒号。

## `attach` 第一段必须是 JSON 数组

推荐：

```yaml
- "attach:[0,1,2]:{update}"
```

不要写普通 YAML 列表。

## `require` / `check` 最稳妥只写严格布尔文本

例如：

- `true`
- `false`

不要默认依赖 `1`、`yes`、`TRUE`

## `set-data` 不会帮你自动补不存在的顶层字段

先保证目标字段已经存在，再去做增减乘除。

## `color` 不是默认模块

虽然有相关类，但当前不应把它当成常规模块写法。

## `onPickOutSlot(*)` 暂时不要依赖

当前不建议把它当作稳定触发器模板。
