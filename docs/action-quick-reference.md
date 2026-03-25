---
title: 动作参数速查表
---

# 动作参数速查表

这页按“动作名 / 格式 / 示例 / 备注”整理。

## 文本与命令

| 动作 | 格式 | 示例 | 备注 |
|---|---|---|---|
| `tell` | `tell:文本` | `tell:&a提示文本` | 给玩家发消息 |
| `action-bar` | `action-bar:文本` | `action-bar:&e已触发` | action bar |
| `title` | `title:主标题` 或 `title:主标题;副标题;fadeIn;stay;fadeOut` | `title:&6主标题;&e副标题;10;20;10` | 分号字段敏感 |
| `talk` | `talk:文本` | `talk:hello world` | 让玩家 chat |
| `command` | `command:玩家命令` | `command:spawn` | 玩家执行命令 |
| `admin` | `admin:玩家命令` | `admin:gamemode creative` | 临时 OP 执行 |
| `console` | `console:控制台命令` | `console:say hello` | 控制台执行 |
| `logger` | `logger:文本` | `logger:&e调试输出` | 控制台日志 |

## 玩家效果

| 动作 | 格式 | 示例 | 备注 |
|---|---|---|---|
| `sound` | `sound:声音 [pitch] [volume]` | `sound:BLOCK_NOTE_BLOCK_BELL 1 1` | 播放声音 |
| `teleport` | `teleport:x y z [world] [yaw pitch]` | `teleport:100 64 100 world 0 0` | 支持 3、4、6 段 |
| `velocity` | `velocity:x y z` | `velocity:0 0.5 0` | 加到当前速度上 |
| `sprint` | `sprint:倍率` | `sprint:1.2` | 实际是朝向推进，不是布尔开关 |
| `glow` | `glow:true|false` | `glow:true` | 严格布尔解析 |
| `heal` | `heal:数值` | `heal:4` | 不超过最大生命值 |
| `hunger` | `hunger:增量` | `hunger:6` | 是增减，不是绝对值 |
| `potion` | `potion:类型 时长 等级 ambient particles` | `potion:SPEED 200 1 true true` | 参数较严格 |
| `remove-potion` | `remove-potion:类型` | `remove-potion:SPEED` | 按药水类型名移除 |

## 物品与物品栈

| 动作 | 格式 | 示例 | 备注 |
|---|---|---|---|
| `update` | `update:` | `update:` | 建议保留冒号 |
| `emit` | `emit:触发器名` | `emit:onInteract` | 再次派发触发器 |
| `set-data` | `set-data:字段 操作 值` | `set-data:damage+5` | 支持 `= + - * /` |
| `attach` | `attach:JSON整数数组:{动作1;动作2}` | `attach:[0,1,2]:{update;tell:&a已附加}` | 第一段必须是 JSON 整数数组 |
| `take` | `take:数量` | `take:1` | 扣减物品 |
| `durability` | `durability:数值` | `durability:12` | 设耐久/伤害值 |
| `shine` | 见具体页面 |  | 当前 wiki 暂未展开细参数 |

## 流程控制

| 动作 | 格式 | 示例 | 备注 |
|---|---|---|---|
| `break` | `break` | `break` | 中断当前动作流 |
| `require` | `require:true|false` | `require:true` | 最稳妥只写严格布尔文本 |
| `check` | `check:条件:{动作块}` | `check:true:{tell:&a通过}` | 多分支可最外层 `;` 串联 |
| `chance` | `chance:百分比:内层动作` | `chance:35:tell:&a成功` | 精确概率语义建议先实机测试 |
| `delay` | `delay:秒数:内层动作` | `delay:2:tell:&a两秒后执行` | 优先延迟单层动作 |
| `sync` | `sync:内层动作` | `sync:console:say hello` | 在主线程执行内层动作 |
| `set` | `set:变量=表达式` | `set:x=1+2` | 不要默认塞复杂多 `=` 表达式 |
| `run` | `run:javascript` | `run:player.setFoodLevel(20)` | 直接执行 JS |
| `cancel` | `cancel` | `cancel` | 当前事件可取消时生效 |

## 服务器与发放

| 动作 | 格式 | 示例 | 备注 |
|---|---|---|---|
| `give-item` | `give-item:工厂或别名 [amount] [enable-stacking]` | `give-item:test_sword 3 true` | 发 AF 物品 |

## Hook 动作

| 动作 | 条件 | 格式 | 示例 |
|---|---|---|---|
| `cast` | 安装 `MythicMobs` | `cast:技能名` | `cast:SkillName` |

## `set-data` 细节

### 顶层字段

```yaml
- "set-data:damage+5"
- "set-data:damage=20"
```

当前已确认：

- 顶层数字字段支持 `+ - * / =`
- 顶层字符串字段稳定支持 `=` 和 `+`
- 顶层字段不存在时会直接跳过，不会自动新建

### 嵌套路径

```yaml
- "set-data:stats.total+1"
- "set-data:stats.list[0]=3"
```

当前已确认：

- 带 `.` / `[]` 的路径会先走 JS 引擎取值
- 再按原值类型做运算或赋值

## `check` 细节

### 单分支

```yaml
- "check:true:{tell:&a通过}"
```

### 多分支

```yaml
- "check:false:{tell:&c失败};true:{tell:&a成功}"
```

规则：

- 条件块形态是 `condition:{actions}`
- 最外层分支用 `;` 切
- 花括号内部的 `;` 会做深度保护
- 最稳妥的条件文本仍然是 `true` / `false`

## `attach` 细节

```yaml
- "attach:[0,1,2]:{tell:&a附加物品触发;update}"
```

限制：

- 花括号里动作按 `;` 直接切
- 不建议在 `attach` 内再嵌特别复杂的动作块

## 稳定写法建议

- 文本消息优先用 `tell`、`action-bar`、`title`
- 物品更新优先用 `update:`
- 条件优先用 `require:true/false` 或简单 `check`
- 复杂串联优先拆成多个动作，而不是把一个动作写成超长嵌套串
