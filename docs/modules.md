---
title: 模块
---

# 模块

## `import.module`

写法：

```yaml
import:
  module:
    random: rnd
    math: math
    time: time
    format: fmt
```

规则：

- key 是模块名
- value 是你在表达式里使用的别名

## 已确认默认模块

### `random`

```yaml
define:
  lucky_slot: "rnd.int(0, 9)"
  damage_factor: "rnd.normal(1.0, 0.15)"
  rarity: "rnd.weight(70, 'common', 25, 'rare', 5, 'legendary')"
```

常用方法：

- `int(from, until)`
- `double(from, until)`
- `normal()`
- `normal(mean, stdDev)`
- `weight(...)`

### `math`

```yaml
define:
  final_damage: "math.round(math.pow(level, 1.2), 2)"
```

常用方法：

- `max(a, b)`
- `min(a, b)`
- `abs(a)`
- `sqrt(a)`
- `ceil(a)`
- `floor(a)`
- `round(a, digits)`
- `log10(a)`
- `log(a, b)`
- `log2(a)`
- `ln(a)`
- `exp(a)`
- `pow(a, b)`

说明：

- `math.sign(num)` 当前不建议作为常规写法依赖
- 需要符号判断时优先用全局 `sign(num)`

### `time`

```yaml
define:
  now_ms: "time.timestamp()"
  today: "time.simple()"
```

方法：

- `timestamp()`
- `current()`
- `complex()`
- `simple()`

### `format`

```yaml
define:
  text: "fmt.format('伤害 {0} / 等级 {1}', damage, level)"
```

说明：

- 占位符写法是 `{0}`、`{1}`
- 不是 `%s`

## 不建议依赖的模块

`color` 当前有类，但默认未注册，不应当当成常规模块使用。
