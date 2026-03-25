---
title: 动作参考
---

# 动作参考

## 基本写法

```yaml
action:
  onInteract:
    - "tell:&aHello"
    - "sound:BLOCK_NOTE_BLOCK_BELL 1 1"
```

## 常用动作

### 文本与命令

```yaml
- "tell:&a提示文本"
- "action-bar:&e已触发"
- "title:&6主标题;&e副标题;10;20;10"
- "command:spawn"
- "admin:gamemode creative"
- "console:say hello"
```

### 玩家效果

```yaml
- "sound:BLOCK_NOTE_BLOCK_BELL 1 1"
- "teleport:100 64 100"
- "velocity:0 0.5 0"
- "sprint:1.2"
- "glow:true"
- "heal:4"
- "hunger:6"
- "potion:SPEED 200 1 true true"
- "remove-potion:SPEED"
```

### 物品相关

```yaml
- "update:"
- "emit:onInteract"
- "durability:12"
- "take:1"
- "set-data:damage+5"
```

### 服务器相关

```yaml
- "logger:&e调试输出"
- "delay:2:tell:&a两秒后执行"
- "sync:console:say hello"
- "give-item:test_sword 3 true"
```

## `attach`

```yaml
- "attach:[0,1,2]:{tell:&a附加物品触发;update}"
```

说明：

- 第一段必须是 JSON 整数数组
- 花括号里是动作列表

## `set-data`

支持操作符：

- `=`
- `+`
- `-`
- `*`
- `/`

示例：

```yaml
- "set-data:damage+5"
- "set-data:damage=20"
- "set-data:stats.total+1"
```

## `give-item`

```yaml
- "give-item:test_sword"
- "give-item:test_sword 3"
- "give-item:test_sword 3 true"
```

格式：

- `give-item:<factoryOrAlias> [amount] [enable-stacking]`
