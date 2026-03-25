---
title: 拦截器实战案例
---

# 拦截器实战案例

这一页只放“适合直接抄改”的 `interceptors/*.yml` 模板。

原则：

- 优先做全局玩家事件逻辑
- 不默认依赖 `item` / `itemStack`
- 需要当前 AF 物品上下文时，优先改回物品自己的 `action:`

## 1. 全局右键提示

适合做轻量反馈。

```yaml
onRightClick:
  - "sound:BLOCK_NOTE_BLOCK_BELL 1 1"
  - "action-bar:&a你右键了一次"
```

## 2. 潜行右键方块时显示方块类型

这类拦截器可直接使用 `block`。

```yaml
onShiftRightClickBlock:
  - "run:player.sendMessage('&e你点击了: ' + String(block.getType()))"
```

## 3. 左键方块时拦截并提示

`cancel` 只适合写在当前事件本身可取消的场景。

```yaml
onLeftClickBlock:
  - "cancel"
  - "title:&c已拦截;&7这里不允许左键方块;10;30;10"
```

## 4. 右键时按条件分支

适合做权限、状态或环境判断。

```yaml
onRightClick:
  - "check:player.isSneaking():{tell:&a你正在潜行;tell:&7触发潜行分支}"
```

说明：

- `check` 内部仍建议保持简单
- 条件复杂时，优先把判断写进 `run:` 或拆成多个动作

## 5. 右键时按概率执行

```yaml
onRightClick:
  - "chance:0.25:tell:&6触发了 25% 事件"
```

提示：

- `chance` 当前参考已标注过边界问题
- 对关键逻辑先实机测试，再上线正式配置

## 6. 延迟后执行提示

```yaml
onInteract:
  - "tell:&7已记录交互"
  - "delay:2:tell:&a两秒后再次提醒"
```

这里建议只延迟简单动作。

## 7. 玩家死亡公告

```yaml
onPlayerDeath:
  - "console:say [AF] player death captured"
  - "logger:&c检测到一次玩家死亡事件"
```

如果你要拼玩家名，优先先确认自己环境里对应对象的可用方法。

## 8. 死亡后执行命令

```yaml
onDeath:
  - "admin:spawn"
```

这种写法表示让触发玩家以临时 OP 权限执行命令。

## 9. 右键方块时做多步反馈

```yaml
onRightClickBlock:
  - "sound:BLOCK_NOTE_BLOCK_PLING 1 1"
  - "action-bar:&e已记录方块交互"
  - "run:player.sendMessage('&7方块: ' + String(block.getType()))"
```

这类组合最适合拦截器。

## 10. 多文件拆分思路

你可以把不同用途拆到多个文件，例如：

- `interceptors/interaction.yml`
- `interceptors/death.yml`
- `interceptors/restrict.yml`

如果多个文件都写了同一个拦截器名，当前实现会继续追加动作。

## 11. 不推荐的写法

下面这些虽然不一定完全不能写，但不建议当作拦截器常规模板：

```yaml
onRightClick:
  - "update:"
  - "set-data:damage=10"
  - "emit:onAttack"
```

原因：

- 这些动作通常更依赖当前 AF 物品上下文
- 默认拦截器不是围绕单个 AF 物品执行

## 12. 什么时候该改回物品 action

如果你的需求更接近下面这些情况，就不要优先写拦截器：

- “某个 AF 武器右键时触发”
- “修改当前 AF 物品的数据”
- “更新当前手里这件 AF 物品”
- “给当前 AF 物品再次派发触发器”

这类需求更适合写在物品配置自己的 `action:` 下。
