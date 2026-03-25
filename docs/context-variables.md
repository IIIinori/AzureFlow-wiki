---
title: 上下文变量
---

# 上下文变量

## 基础变量

动作流里最常用的变量：

| 变量 | 含义 |
|---|---|
| `event` | 当前事件 |
| `player` | 当前玩家 |
| `itemStack` | 当前原始物品栈 |
| `item` | 当前 AF 物品对象 |
| `data` | 当前物品 values 映射 |
| `values` | `data` 的别名 |

## 自动注入字段

如果物品 values 里有某个字段，表达式里通常可以直接写字段名。

```yaml
data:
  damage: 10
  rarity: "'rare'"

display:
  lore:
    - "&7伤害: ${damage}"
    - "&7稀有度: ${rarity}"
```

## 常见触发器附带变量

### 方块类

| 触发器 | 变量 |
|---|---|
| `onLeftClickBlock` | `block` |
| `onShiftLeftClickBlock` | `block` |
| `onRightClickBlock` | `block` |
| `onShiftRightClickBlock` | `block` |
| `onPlace` | `block` |

### 背包类

| 触发器 | 变量 |
|---|---|
| `onPlaceBy(<uuid>)` | `otherItemStack` `otherItem` |
| `onPlaceBy(<alias>)` | `otherItemStack` `otherItem` |

### 战斗类

| 触发器 | 变量 |
|---|---|
| `onAttack` | `attacker` `victim` |
| `onAttack` | `projectile`，仅投射物路径可用 |
| `onShoot` | `projectile` |
| `onHit` | `projectile` |
| `onKill` | `killer` `attacker` `victim` |

## 使用建议

- 需要当前玩家就用 `player`
- 需要当前数值就直接用字段名，例如 `damage`
- 需要整张数据映射就用 `data` 或 `values`
- 某个触发器有没有附带变量，不要猜，按表查
