---
title: 表达式与文本
---

# 表达式与文本

## 字符串字面量 vs 表达式

在 `define`、`data`、`computed` 里：

| 写法 | 结果 |
|---|---|
| `'abc'` 或 `"abc"` | 字符串字面量 |
| `1 + 2` | JavaScript 表达式 |
| `['a', 'b']` | 数组表达式 |

示例：

```yaml
define:
  title: "'测试物品'"

data:
  damage: "10 + 5"
  tags: "['fire', 'ice']"
```

## `${...}`

常规动态文本最推荐用 `${...}`：

```yaml
display:
  name: "&a伤害: ${damage}"
```

AF 会求值后再替换进文本。

## 列表展开

`${...}` 的结果如果是数组或列表，会展开成多行。

推荐写法：

```yaml
computed:
  reward_lore: "['&7奖励一', '&7奖励二']"

display:
  lore:
    - "&e奖励"
    - "${reward_lore}"
```

不推荐把固定文本和列表展开混在一行里。

## 常用函数

### `when(...)`

```yaml
computed:
  rarity: "when(level >= 30, 'legendary', level >= 15, 'rare', 'common')"
```

### `all(...)` / `any(...)`

```yaml
computed:
  state: "all([hp > 10, mana > 5], 'ready', 'blocked')"
```

### `roll(prob)`

```yaml
computed:
  lucky: "roll(25)"
```

### `intRange(...)`

```yaml
data:
  slots: "intRange(0, 9)"
```

### `emptyList(size)`

```yaml
data:
  lines: "emptyList(3)"
```

### `where(id)`

```yaml
computed:
  matched_slots: "where('test_sword')"
```

### `getItemStack(slot)` / `getItem(slot)`

```yaml
computed:
  helmet_stack: "getItemStack(HELMET)"
```

## 数组方法

### `first()` / `last()`

```yaml
computed:
  first_tag: "tags.first()"
  last_tag: "tags.last()"
```

### `choice()` / `sample()`

```yaml
computed:
  reward: "reward_pool.choice(1).first()"
  rewards: "reward_pool.sample(2)"
```

### `fill()`

```yaml
computed:
  marks: "emptyList(3).fill('&7-')"
```

## PlaceholderAPI

如果服务端安装了 `PlaceholderAPI`，可以用：

```yaml
computed:
  player_name: "papi('player_name')"
```

注意：

- 没装对应插件时不要依赖它
- 参数里不要再自己写 `%`
