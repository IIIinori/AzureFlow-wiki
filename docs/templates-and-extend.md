---
title: 模板与继承
---

# 模板与继承

## 模板物品

模板通常放在 `templates/`。

```yaml
display:
  material: STICK
  meta: 0
  option:
    unbreakable: true

internal:
  uuid: "33333333-3333-3333-3333-333333333333"
  alias: ["base_template"]

data:
  quality: "'normal'"
```

## `extend`

普通物品可以继承模板：

```yaml
extend:
  base_template: {}

display:
  material: BLAZE_ROD
  meta: 0
  name: "&6模板衍生物品"

internal:
  uuid: "44444444-4444-4444-4444-444444444444"
  alias: ["derived_item"]
```

## 继承时附带参数

```yaml
extend:
  base_template:
    bonus_damage: 5
```

这些键值会作为扩展阶段的数据注入。

## 推荐用法

- 可复用外观、基础动作时，用模板
- 普通物品只覆盖差异部分
- 不要在每个物品里重复粘贴同样的大段配置
