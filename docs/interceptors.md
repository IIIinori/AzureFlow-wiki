---
title: 拦截器
---

# 拦截器

`interceptors/*.yml` 用来写“全局事件 -> AF 动作流”。

它和物品里的 `action:` 不是一回事：

| 类型 | 写在哪里 | 作用对象 |
|---|---|---|
| 物品触发器 | `items/*.yml` / `templates/*.yml` 的 `action:` | 当前 AF 物品 |
| 拦截器 | `interceptors/*.yml` | 全局 Bukkit 事件入口 |

## 基础结构

```yaml
onInteract:
  - "tell:&a你进行了交互"

onPlayerDeath:
  - "console:say player death captured"
```

规则很简单：

- 根键就是拦截器名
- 值是动作字符串列表
- 仍然使用和普通 `action:` 一样的 resolver 体系

## 默认已确认可用的拦截器

当前参考已确认，默认注册到 AF 的只有两组：

### 玩家交互

- `onInteract`
- `onLeftClick`
- `onLeftClickAir`
- `onLeftClickBlock`
- `onShiftLeftClick`
- `onShiftLeftClickAir`
- `onShiftLeftClickBlock`
- `onRightClick`
- `onRightClickAir`
- `onRightClickBlock`
- `onShiftRightClick`
- `onShiftRightClickAir`
- `onShiftRightClickBlock`

### 玩家死亡

- `onDeath`
- `onPlayerDeath`

## 当前不要当默认可用

`onChat` 对应的类虽然存在，但当前参考没有确认它在默认注册列表里。

结论：

- 常规配置不要把 `onChat` 当成默认拦截器依赖
- 只有你自己环境已确认额外注册后，才建议使用

## 上下文变量

默认拦截器里最稳的变量是：

| 变量 | 说明 |
|---|---|
| `event` | 当前 Bukkit 事件 |
| `player` | 当前玩家 |

### 方块交互附加变量

这些拦截器会额外提供 `block`：

- `onLeftClickBlock`
- `onShiftLeftClickBlock`
- `onRightClickBlock`
- `onShiftRightClickBlock`

示例：

```yaml
onRightClickBlock:
  - "run:player.sendMessage(String(block.getType()))"
```

### 不要默认假设存在

按当前默认拦截器调用方式，普通拦截器里不要默认假设这些变量可用：

| 变量 | 原因 |
|---|---|
| `itemStack` | 默认拦截器没有传入当前物品栈 |
| `item` | 默认拦截器没有传入当前 AF 物品 |

这意味着：

- 拦截器更适合做全局玩家事件逻辑
- 真正依赖“当前 AF 物品”的处理，优先写在物品自己的 `action:` 里

## 适合写什么动作

更稳的类型：

- `tell`
- `action-bar`
- `title`
- `sound`
- `command`
- `admin`
- `console`
- `logger`
- `check`
- `require`
- `chance`
- `delay`
- `sync`
- `run`
- `cancel`

不建议直接拿来当拦截器模板的类型：

- `update`
- `set-data`
- `take`
- `durability`
- `shine`
- `emit`
- `attach`

原因是它们通常更依赖当前 AF 物品上下文。

## 多文件合并规则

如果多个 `interceptors/*.yml` 文件里都写了同一个拦截器名，当前实现会继续追加动作，而不是覆盖前面的动作。

这适合把不同功能拆成多个文件。

## 推荐示例

更完整的模板集合见“拦截器实战案例”。

### 全局右键提示

```yaml
onRightClick:
  - "sound:BLOCK_NOTE_BLOCK_BELL 1 1"
  - "action-bar:&a你右键了"
```

### 潜行右键方块

```yaml
onShiftRightClickBlock:
  - "run:player.sendMessage('&e方块类型: ' + String(block.getType()))"
```

### 玩家死亡公告

```yaml
onPlayerDeath:
  - "console:say [AF] player death captured"
```
