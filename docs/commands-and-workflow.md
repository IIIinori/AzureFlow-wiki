---
title: 命令与工作流
---

# 命令与工作流

## `/af` 常见命令

当前已确认常用子命令包括：

| 命令 | 用途 |
|---|---|
| `/af create <alias>` | 生成最小物品骨架 |
| `/af get <alias>` | 给自己获取 AF 物品 |
| `/af give <player> <alias>` | 给指定玩家 AF 物品 |
| `/af action ...` | 对手中物品执行动作 |
| `/af reload` | 重载配置 |
| `/af debug` | 开关调试 |

## 推荐工作流

### 新建一个普通物品

1. 用 `/af create <alias>` 起骨架
2. 补 `display` 和 `internal`
3. 写 `define`、`data`、`computed`
4. 最后写 `action`

### 做一套可复用模板

1. 在 `templates/` 写模板
2. 把复用的外观、动作、初始数据放模板里
3. 普通物品用 `extend` 继承

### 做全局事件动作流

1. 在 `interceptors/` 新建 yml
2. 直接写 `onInteract:`、`onPlayerDeath:` 这类根键
3. 优先使用玩家类、消息类、流程类动作
4. 不要默认把它当成“当前 AF 物品 action”来写

### 调动态文本

1. 先把值写进 `data` 或 `computed`
2. 再用 `${...}` 放到 `display.name` 或 `display.lore`

## 建议的目录组织

### 小项目

- `items/weapon.yml`
- `items/armor.yml`
- `templates/base.yml`

### 大项目

- `items/weapons/*.yml`
- `items/armors/*.yml`
- `items/accessories/*.yml`
- `templates/common/*.yml`

## 推荐写法顺序

一个物品建议按这个顺序写：

1. `display`
2. `internal`
3. `import`
4. `define`
5. `data`
6. `computed`
7. `extend`
8. `action`
