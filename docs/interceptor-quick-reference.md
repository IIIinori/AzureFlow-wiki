---
title: 拦截器速查
---

# 拦截器速查

## 默认拦截器总表

| 分组 | 拦截器名 | 常见上下文 |
|---|---|---|
| 交互 | `onInteract` | `player` `event` |
| 交互 | `onLeftClick` | `player` `event` |
| 交互 | `onLeftClickAir` | `player` `event` |
| 交互 | `onLeftClickBlock` | `player` `event` `block` |
| 交互 | `onShiftLeftClick` | `player` `event` |
| 交互 | `onShiftLeftClickAir` | `player` `event` |
| 交互 | `onShiftLeftClickBlock` | `player` `event` `block` |
| 交互 | `onRightClick` | `player` `event` |
| 交互 | `onRightClickAir` | `player` `event` |
| 交互 | `onRightClickBlock` | `player` `event` `block` |
| 交互 | `onShiftRightClick` | `player` `event` |
| 交互 | `onShiftRightClickAir` | `player` `event` |
| 交互 | `onShiftRightClickBlock` | `player` `event` `block` |
| 死亡 | `onDeath` | `player` `event` |
| 死亡 | `onPlayerDeath` | `player` `event` |

## 当前不要默认依赖

| 名称 | 状态 | 说明 |
|---|---|---|
| `onChat` | 不作为默认可用 | 当前参考没有确认它在默认注册列表中 |

## 最稳的动作类型

| 类型 | 示例 |
|---|---|
| 消息 | `tell:&aHello` |
| 声音 | `sound:BLOCK_NOTE_BLOCK_BELL 1 1` |
| 命令 | `command:spawn` |
| 控制台 | `console:say hello` |
| 条件 | `check:true:{tell:&aok}` |
| 延迟 | `delay:2:tell:&aLater` |
| JS | `run:player.sendMessage('test')` |

## 不建议直接套进拦截器

| 动作 | 原因 |
|---|---|
| `update` | 更依赖当前 AF 物品 |
| `set-data` | 更依赖当前 AF 物品 |
| `take` | 更依赖当前物品栈 |
| `emit` | 更常用于当前物品动作流 |
| `attach` | 更偏向物品/背包目标链路 |
