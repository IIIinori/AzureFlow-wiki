---
title: 触发器
---

# 触发器

`action:` 的键就是触发器名。

如果你要写的是全局 `interceptors/*.yml`，请看“拦截器”章节；那不是物品 `action:` 的同一层结构。

## 常见基础触发器

### 交互类

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

### 玩家状态类

- `onSneak`
- `onUnSneak`
- `onSprint`
- `onUnSprint`
- `onRun`
- `onUnRun`
- `onChangeHand`
- `onHeld`
- `onUnHeld`

### 玩家行为类

- `onChat`
- `onDrop`
- `onConsume`
- `onMove`
- `onLevelChange`
- `onExpChange`

### 战斗与命中

- `onAttack`
- `onKill`
- `onShoot`
- `onHit`

### 方块与拾取

- `onBreak`
- `onPlace`
- `onPickUp`
- `onSpawn`

## 动态触发器

### `onPlaceInSlot(<slot>)`

```yaml
action:
  onPlaceInSlot(0):
    - "tell:&a你把它放进了 0 号槽"
```

### `onPlaceBy(<uuid>)` / `onPlaceBy(<alias>)`

当一个 AF 物品被放到另一个已有物品上时，对目标物品派发。

## Hook 触发器

仅在安装 `MythicMobs` 时：

- `onMythicMobDrop`
- `onMMDrop`

## 不建议依赖

`onPickOutSlot(*)` 当前不要当成稳定触发器写法依赖。
