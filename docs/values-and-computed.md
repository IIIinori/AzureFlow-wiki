---
title: Define、Data、Computed
---

# Define、Data、Computed

## 三者怎么分

### `define`

偏“初始定义”：

```yaml
define:
  base_damage: 10
  title: "'测试物品'"
```

### `data`

偏“物品数据”：

```yaml
data:
  damage: "base_damage + 5"
  tags: "['fire', 'ice']"
```

### `computed`

偏“计算值”：

```yaml
computed:
  final_damage: "damage * 2"
  rarity: "when(level >= 20, 'rare', 'common')"
```

## 核心规则

| 写法 | 结果 |
|---|---|
| `'abc'` 或 `"abc"` | 字符串字面量 |
| `1 + 2` | 表达式 |
| `['a', 'b']` | 数组 |

## 推荐习惯

- 固定文本写成包引号的字面量
- 计算结果写表达式
- 要拿给 `display` 和 `action` 用的动态值，优先统一收进 `computed`

## 常见例子

### 伤害

```yaml
define:
  base_damage: 10

data:
  damage: "base_damage + 5"

computed:
  final_damage: "damage * 2"
```

### 条件品质

```yaml
computed:
  rarity: "when(level >= 30, 'legendary', level >= 15, 'rare', 'common')"
```

### 动态列表

```yaml
computed:
  reward_lore: "when(level >= 20, ['&6高级奖励', '&7已解锁'], ['&7普通奖励'])"
```
