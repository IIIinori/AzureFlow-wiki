---
title: 配置结构
---

# 配置结构

## 常见顶层段

| 段 | 用途 |
|---|---|
| `display` | 外观、名字、lore、材质 |
| `internal` | 物品 UUID 与 alias |
| `import.module` | 导入模块别名 |
| `define` | 初始表达式 |
| `data` | 数据值 |
| `computed` | 计算值 |
| `extend` | 继承模板 |
| `action` | 触发器到动作列表 |
| `items` | 批量物品文件根节点 |

## `internal`

必填核心段。

```yaml
internal:
  uuid: "11111111-1111-1111-1111-111111111111"
  alias: ["test_sword", "sword_demo"]
```

规则：

- `uuid` 必填
- `alias` 应写成列表

## `display`

```yaml
display:
  material: DIAMOND_SWORD
  meta: 0
  name: "&b测试长剑"
  lore:
    - "&7伤害: ${damage}"
  option:
    unbreakable: true
```

常用字段：

- `material`
- `meta`
- `name`
- `lore`
- `option.unbreakable`
- `option.custom_model_data`
- `option.hide.*`
- `option.dye`

## `define`、`data`、`computed`

```yaml
define:
  base_damage: 10

data:
  damage: "base_damage + 5"

computed:
  final_damage: "damage * 2"
```

用法区别：

- `define`：偏“初始定义”
- `data`：偏“物品数据”
- `computed`：偏“依赖上下文重新计算的值”

## `action`

```yaml
action:
  onInteract:
    - "tell:&a你使用了测试长剑"
    - "sound:BLOCK_NOTE_BLOCK_BELL 1 1"
```

规则：

- `action.<trigger>` 的值应写成列表
- 列表项最稳的写法是字符串动作

## 处理顺序

AF 当前已确认处理顺序：

1. `internal`
2. `import.module`
3. `define`
4. `data`
5. `computed`
6. `extend`
7. `display`
8. `action`
