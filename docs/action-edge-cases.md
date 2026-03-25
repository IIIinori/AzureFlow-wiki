---
title: 动作参数边界表
---

# 动作参数边界表

这页专门补“动作能怎么写、边界在哪里、哪些别默认依赖”。

## `title`

### 稳定写法

```yaml
- "title:&6主标题"
- "title:&6主标题;&e副标题;10;20;10"
```

### 边界说明

- 最稳的就是上面这两种
- 分号字段数量不要随意扩展
- 需要复杂标题效果时，优先先在实机试再固化模板

## `teleport`

### 已确认长度

```yaml
- "teleport:100 64 100"
- "teleport:100 64 100 world"
- "teleport:100 64 100 world 0 0"
```

### 边界说明

- 当前最稳的是 3 段、4 段、6 段
- 不要默认生成更长或更奇怪的组合
- 坐标建议直接写空格分隔数字

## `sound`

### 稳定写法

```yaml
- "sound:BLOCK_NOTE_BLOCK_BELL 1 1"
```

### 边界说明

- 格式是 `sound:声音 [pitch] [volume]`
- 缺省参数时，优先只省略尾部参数，不要夹杂额外内容

## `potion`

### 稳定写法

```yaml
- "potion:SPEED 200 1 true true"
```

### 边界说明

- 参数顺序固定：`类型 时长 等级 ambient particles`
- 布尔位最稳妥只写 `true` 或 `false`

## `glow`

```yaml
- "glow:true"
- "glow:false"
```

说明：

- 当前走严格布尔解析
- `TRUE`、`1`、`yes` 不要当稳定写法

## `take`

```yaml
- "take:1"
```

说明：

- 当前 wiki 只把它当简单数量扣减动作使用
- 如果你要依赖更复杂的叠加/边界行为，建议先实机确认

## `give-item`

### 稳定写法

```yaml
- "give-item:test_sword"
- "give-item:test_sword 3"
- "give-item:test_sword 3 true"
```

### 边界说明

- 第一段是工厂名或 alias
- 第二段是数量
- 第三段是是否启用堆叠，最稳妥只写 `true` / `false`

## `set-data`

### 顶层数字字段

```yaml
- "set-data:damage+5"
- "set-data:damage-3"
- "set-data:damage*2"
- "set-data:damage/2"
- "set-data:damage=20"
```

### 顶层字符串字段

```yaml
- "set-data:rarity='rare'"
- "set-data:name=Test"
```

说明：

- 顶层字符串最稳的就是 `=` 和 `+`
- 顶层字段不存在时不会自动创建

### 嵌套路径

```yaml
- "set-data:stats.total+1"
- "set-data:stats.list[0]=3"
```

说明：

- 只推荐 `.` 和 `[]` 两种嵌套路径风格
- 不要自行扩展别的路径语法

## `check`

### 稳定模板

```yaml
- "check:true:{tell:&a通过}"
- "check:false:{tell:&c失败};true:{tell:&a成功}"
```

### 边界说明

- 条件块形态是 `condition:{actions}`
- 当前最稳妥的条件文本仍然是 `true` / `false`
- 花括号内部的 `;` 会做深度保护

## `attach`

### 稳定模板

```yaml
- "attach:[0,1,2]:{tell:&a附加物品触发;update}"
```

### 边界说明

- 第一段必须是 JSON 整数数组
- 花括号内部动作按 `;` 直接切
- 不建议在 `attach` 里再嵌复杂 `check` 块

## `chance`

### 稳定模板

```yaml
- "chance:35:tell:&a触发成功"
- "chance:35:update:"
```

### 边界说明

- 最好让内层动作保持单层结构
- 精确概率语义先实机测试，不要只按名字理解

## `delay`

### 稳定模板

```yaml
- "delay:2:tell:&a两秒后执行"
- "delay:2:update:"
```

### 边界说明

- 最稳的是延迟单层动作
- `delay:2:sync:console:say hello` 这类多层嵌套不要默认依赖

## `set`

### 稳定模板

```yaml
- "set:x=1+2"
- "set:rarity='rare'"
```

### 边界说明

- 只把它当“往当前上下文里塞一个 JS 变量”
- 不要默认写包含多个 `=` 的复杂表达式串
