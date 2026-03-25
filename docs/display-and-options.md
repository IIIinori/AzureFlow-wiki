---
title: Display 与外观
---

# Display 与外观

## 基本结构

```yaml
display:
  material: DIAMOND_SWORD
  meta: 0
  name: "&b测试长剑"
  lore:
    - "&7伤害: ${damage}"
```

## 常用字段

| 字段 | 说明 |
|---|---|
| `material` | 材质名 |
| `meta` | 旧版数据值 |
| `name` | 显示名 |
| `lore` | lore 列表 |

## `option`

```yaml
display:
  material: DIAMOND_CHESTPLATE
  meta: 0
  option:
    unbreakable: true
    custom_model_data: 1001
    dye: "255,0,0"
    hide:
      enchants: true
      attributes: true
```

## 已确认常用选项

| 字段 | 说明 |
|---|---|
| `option.unbreakable` | 是否不可破坏 |
| `option.custom_model_data` | 自定义模型数据 |
| `option.dye` | 染色值，写字符串 |
| `option.hide.enchants` | 隐藏附魔 |
| `option.hide.attributes` | 隐藏属性 |
| `option.hide.unbreakable` | 隐藏不可破坏标记 |
| `option.hide.destroys` | 隐藏可破坏方块 |
| `option.hide.placed_on` | 隐藏可放置方块 |
| `option.hide.potion_effects` | 隐藏药水效果 |
| `option.hide.dye` | 隐藏染色信息 |

## 默认值建议

虽然部分字段缺省时会回退，但生成配置时仍建议显式写：

- `display.material`
- `display.meta`
- `display.name`

## 动态文本

```yaml
display:
  name: "&a伤害: ${damage}"
  lore:
    - "&7品质: ${rarity}"
```

## lore 的稳定写法

如果表达式会返回列表，让它单独占一行：

```yaml
display:
  lore:
    - "&e奖励"
    - "${reward_lore}"
```
