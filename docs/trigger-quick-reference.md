---
title: 触发器速查表
---

# 触发器速查表

这页按“你写 `action:` 时最常查的方式”整理触发器。

## 交互类

| 触发器 | 说明 | 常见附带变量 |
|---|---|---|
| `onInteract` | 总交互入口 | 无固定附加变量 |
| `onLeftClick` | 左键总入口 | 无固定附加变量 |
| `onLeftClickAir` | 左键空气 | 无 |
| `onLeftClickBlock` | 左键方块 | `block` |
| `onShiftLeftClick` | 潜行左键总入口 | 无 |
| `onShiftLeftClickAir` | 潜行左键空气 | 无 |
| `onShiftLeftClickBlock` | 潜行左键方块 | `block` |
| `onRightClick` | 右键总入口 | 无 |
| `onRightClickAir` | 右键空气 | 无 |
| `onRightClickBlock` | 右键方块 | `block` |
| `onShiftRightClick` | 潜行右键总入口 | 无 |
| `onShiftRightClickAir` | 潜行右键空气 | 无 |
| `onShiftRightClickBlock` | 潜行右键方块 | `block` |

## 玩家状态类

| 触发器 | 说明 |
|---|---|
| `onSneak` | 开始潜行 |
| `onUnSneak` | 取消潜行 |
| `onSprint` | 开始冲刺 |
| `onUnSprint` | 取消冲刺 |
| `onRun` | 开始跑动 |
| `onUnRun` | 结束跑动 |
| `onChangeHand` | 切换主副手 |
| `onHeld` | 持有时 |
| `onUnHeld` | 取消持有 |

## 玩家行为类

| 触发器 | 说明 |
|---|---|
| `onChat` | 聊天 |
| `onDrop` | 丢弃物品 |
| `onConsume` | 消耗物品 |
| `onMove` | 移动 |
| `onLevelChange` | 等级变化 |
| `onExpChange` | 经验变化 |

## 战斗与命中

| 触发器 | 说明 | 常见附带变量 |
|---|---|---|
| `onAttack` | 攻击实体 | `attacker` `victim`，投射物路径可有 `projectile` |
| `onKill` | 击杀实体 | `killer` `attacker` `victim` |
| `onShoot` | 射出投射物 | `projectile` |
| `onHit` | 投射物命中 | `projectile` |

## 方块与物品

| 触发器 | 说明 | 常见附带变量 |
|---|---|---|
| `onBreak` | 破坏方块 | 当前参考未整理稳定附加变量 |
| `onPlace` | 放置方块 | `block` |
| `onPickUp` | 拾取物品 | 当前参考未整理稳定附加变量 |
| `onSpawn` | 生成时 | 当前参考未整理稳定附加变量 |

## 背包动态触发器

### `onPlaceInSlot(槽位)`

```yaml
action:
  onPlaceInSlot(0):
    - "tell:&a放进了 0 号槽"
```

说明：

- 会按具体槽位号动态派发
- 当前确认会在这些背包动作里出现：
  - `PLACE_ALL`
  - `PLACE_SOME`
  - `MOVE_TO_OTHER_INVENTORY`
  - `HOTBAR_SWAP`

### `onPlaceBy(UUID)`

```yaml
action:
  onPlaceBy(11111111-1111-1111-1111-111111111111):
    - "tell:&a有指定物品压到了我"
```

附带变量：

- `otherItemStack`
- `otherItem`

### `onPlaceBy(alias)`

```yaml
action:
  onPlaceBy(test_sword):
    - "tell:&a被 test_sword 压到了"
```

附带变量：

- `otherItemStack`
- `otherItem`

## Hook 触发器

仅在安装 `MythicMobs` 时：

| 触发器 | 说明 |
|---|---|
| `onMythicMobDrop` | MythicMob 掉落 AF 物品后触发 |
| `onMMDrop` | `onMythicMobDrop` 的短别名 |

## 当前不要依赖

| 触发器 | 原因 |
|---|---|
| `onPickOutSlot(*)` | 当前没有整理到稳定实际派发路径 |
