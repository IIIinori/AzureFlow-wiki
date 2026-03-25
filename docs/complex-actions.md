---
title: 复杂动作
---

# 复杂动作

这部分只写“当前推荐怎么用”，不把不稳写法包装成常规模板。

## `require`

```yaml
- "require:true"
```

说明：

- 只认严格布尔文本
- 最稳妥只写 `true` 或 `false`

## `check`

```yaml
- "check:true:{tell:&a通过}"
- "check:false:{tell:&c失败};true:{tell:&a成功}"
```

建议：

- 条件段最稳妥仍写 `true` / `false`
- 花括号内部可以放多个动作

## `chance`

```yaml
- "chance:35:tell:&a触发成功"
```

建议：

- 优先让内层动作保持单层结构
- 如 `tell`、`update:`、`run:...`

注意：

- 当前实现的概率判断方向存在反编译层面的疑点
- 如果你要依赖精确概率语义，先实机测试

## `delay`

```yaml
- "delay:2:tell:&a两秒后执行"
```

建议：

- 优先延迟单层动作
- 多层前缀嵌套不要当作稳定模板

## `sync`

```yaml
- "sync:console:say hello"
```

用来让内层动作在主线程执行。

## `set`

```yaml
- "set:x=1+2"
```

说明：

- 本质是把一个 JS 变量写进当前上下文
- 不要默认拿它去写很复杂、包含多个 `=` 的表达式串

## `attach`

```yaml
- "attach:[0,1,2]:{tell:&a附加触发;update}"
```

注意：

- 花括号里的动作按 `;` 切分
- 不建议在 `attach` 内再嵌特别复杂的动作块
