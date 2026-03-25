---
title: 完整 YAML 示例
---

# 完整 YAML 示例

这页给的是“能直接照着改”的整段配置。

## 1. 最小普通物品

```yaml
display:
  material: DIAMOND_SWORD
  meta: 0
  name: "&b测试长剑"

internal:
  uuid: "11111111-1111-1111-1111-111111111111"
  alias: ["test_sword"]
```

## 2. 带动态文本的武器

```yaml
display:
  material: DIAMOND_SWORD
  meta: 0
  name: "&b测试长剑"
  lore:
    - "&7基础伤害: ${damage}"
    - "&7最终伤害: ${final_damage}"
    - "&7品质: ${rarity}"

internal:
  uuid: "22222222-2222-2222-2222-222222222222"
  alias: ["dynamic_sword"]

define:
  base_damage: 10

data:
  damage: "base_damage + 5"
  level: 12

computed:
  final_damage: "damage * 2"
  rarity: "when(level >= 20, 'legendary', level >= 10, 'rare', 'common')"
```

## 3. 带模块的随机奖励物品

```yaml
display:
  material: CHEST
  meta: 0
  name: "&6随机奖励箱"
  lore:
    - "&7奖励品质: ${rarity}"

internal:
  uuid: "33333333-3333-3333-3333-333333333333"
  alias: ["reward_box"]

import:
  module:
    random: rnd

computed:
  rarity: "rnd.weight(70, 'common', 25, 'rare', 5, 'legendary')"
```

## 4. 带动作的交互物品

```yaml
display:
  material: BLAZE_ROD
  meta: 0
  name: "&6交互法杖"
  lore:
    - "&7右键后会播放声音并发送提示"

internal:
  uuid: "44444444-4444-4444-4444-444444444444"
  alias: ["action_staff"]

action:
  onRightClick:
    - "tell:&a你触发了法杖"
    - "sound:BLOCK_NOTE_BLOCK_BELL 1 1"
    - "action-bar:&e法杖已触发"
```

## 5. 带条件动作的物品

```yaml
display:
  material: IRON_SWORD
  meta: 0
  name: "&f条件长剑"

internal:
  uuid: "55555555-5555-5555-5555-555555555555"
  alias: ["condition_sword"]

action:
  onInteract:
    - "require:true"
    - "check:true:{tell:&a条件通过;sound:BLOCK_NOTE_BLOCK_BELL 1 1}"
```

## 6. 模板物品

```yaml
display:
  material: STICK
  meta: 0
  option:
    unbreakable: true

internal:
  uuid: "66666666-6666-6666-6666-666666666666"
  alias: ["base_weapon"]

data:
  quality: "'normal'"
```

## 7. 继承模板的普通物品

```yaml
extend:
  base_weapon:
    bonus_damage: 5

display:
  material: DIAMOND_SWORD
  meta: 0
  name: "&b模板长剑"
  lore:
    - "&7额外伤害: ${bonus_damage}"

internal:
  uuid: "77777777-7777-7777-7777-777777777777"
  alias: ["templated_sword"]
```

## 8. 背包联动物品

```yaml
display:
  material: COMPASS
  meta: 0
  name: "&a背包联动器"

internal:
  uuid: "88888888-8888-8888-8888-888888888888"
  alias: ["inventory_linker"]

action:
  onInteract:
    - "attach:[0,1,2]:{tell:&a附加物品被触发;update}"
```

## 9. 带动态 lore 列表的物品

```yaml
display:
  material: BOOK
  meta: 0
  name: "&e任务手册"
  lore:
    - "&7当前任务"
    - "${task_lore}"

internal:
  uuid: "99999999-9999-9999-9999-999999999999"
  alias: ["task_book"]

computed:
  task_lore: "when(level >= 20, ['&6高级任务', '&7奖励已提升'], ['&7普通任务'])"
```

## 10. 批量物品文件

```yaml
items:
  test_sword:
    display:
      material: DIAMOND_SWORD
      meta: 0
      name: "&b测试长剑"
    internal:
      uuid: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa"
      alias: ["test_sword"]

  test_staff:
    display:
      material: BLAZE_ROD
      meta: 0
      name: "&6测试法杖"
    internal:
      uuid: "bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb"
      alias: ["test_staff"]
```

## 改模板时的建议

- 先改 `internal.uuid`
- 再改 `internal.alias`
- 再按用途调整 `display`
- 动态值统一先收进 `computed`
- 复杂动作优先拆成多条，不要挤成一长串
