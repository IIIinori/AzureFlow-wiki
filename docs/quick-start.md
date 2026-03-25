---
sidebar_position: 2
title: 快速开始
---

# 快速开始

## 目录约定

AF 常见配置目录：

- `items/`：普通物品
- `templates/`：模板物品
- `interceptors/`：全局拦截器
- `global/`：全局脚本目录

## 最小可用物品

```yaml
display:
  material: DIAMOND_SWORD
  meta: 0
  name: "&b测试长剑"

internal:
  uuid: "11111111-1111-1111-1111-111111111111"
  alias: ["test_sword"]
```

## 推荐创建流程

1. 先把 `display` 和 `internal` 写完整
2. 再补 `define`、`data`、`computed`
3. 最后写 `action`

如果你要做“玩家交互 / 玩家死亡时的全局动作”，不要写进某个物品的 `action:`，而是单独写到 `interceptors/*.yml`。

## 批量物品文件

一个文件里也可以放多个物品：

```yaml
items:
  test_sword:
    display:
      material: DIAMOND_SWORD
      meta: 0
    internal:
      uuid: "11111111-1111-1111-1111-111111111111"
      alias: ["test_sword"]

  test_staff:
    display:
      material: BLAZE_ROD
      meta: 0
    internal:
      uuid: "22222222-2222-2222-2222-222222222222"
      alias: ["test_staff"]
```

## 命令侧常用行为

已确认 `/af` 常见子命令包括：

- `create`
- `get`
- `give`
- `action`
- `reload`
- `debug`

如果你只是想快速起一个骨架，`/af create <alias>` 是最稳的起点。
