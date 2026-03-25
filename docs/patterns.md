---
title: 常见模板
---

# 常见模板

## 动态 lore

```yaml
computed:
  dynamic_lore: "when(level >= 20, ['&6高级奖励', '&7已解锁'], ['&7普通奖励'])"

display:
  lore:
    - "&e奖励信息"
    - "${dynamic_lore}"
```

## 加权随机品质

```yaml
import:
  module:
    random: rnd

computed:
  rarity: "rnd.weight(70, 'common', 25, 'rare', 5, 'legendary')"
```

## 模板继承

```yaml
extend:
  base_weapon: {}

display:
  material: DIAMOND_SWORD
  meta: 0
  name: "&b模板武器"

internal:
  uuid: "55555555-5555-5555-5555-555555555555"
  alias: ["template_weapon"]
```

## 条件文本

```yaml
computed:
  state_text: "when(damage > 20, '&c高伤', damage > 10, '&e中伤', '&a低伤')"
```

## 槽位物品读取

```yaml
computed:
  helmet_stack: "getItemStack(HELMET)"
```
