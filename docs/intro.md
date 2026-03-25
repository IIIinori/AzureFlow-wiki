---
sidebar_position: 1
title: 介绍
slug: /
---

<div className="af-hero">
  <div className="af-hero-grid">
    <div>
      <div className="af-logo-badge">
        <span>AzureFlow 配置参考站</span>
      </div>
      <h1>把 AF 配置写稳，而不是写玄学</h1>
      <p>
        这份 wiki 面向“实际写 AzureFlow 配置的人”，把普通物品、模板、表达式、触发器、动作、复杂动作和稳定写法整理成一套本地可查的中文手册。
      </p>
      <div className="af-hero-actions">
        <a href="/quick-start">从快速开始进入</a>
        <a href="/actions">直接查动作参考</a>
      </div>
    </div>
    <div className="af-hero-panel">
      <div className="af-hero-panel-brand">
        <div>
          <strong>AzureFlow AF Wiki</strong>
          <span>面向实际配置作者的中文参考站</span>
        </div>
      </div>
      <div className="af-hero-panel-copy">
        <p>这不是一份概念文档，而是一套围绕“实际写 AF 配置”整理出来的本地手册，重点放在稳定写法、常用能力和可直接复用的配置模式。</p>
      </div>
      <div className="af-hero-panel-points">
        <div>
          <strong>覆盖重点</strong>
          <span>结构、表达式、模块、触发器、动作、拦截器</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="af-info-strip af-info-strip--compact">
  <div className="af-pill">
    <strong>写给谁</strong>
    普通配置作者、服主、物品策划
  </div>
  <div className="af-pill">
    <strong>覆盖范围</strong>
    顶层结构、表达式、模块、触发器、动作
  </div>
</div>

## 这份 wiki 覆盖什么

- 普通物品与模板物品的基本结构
- `display`、`internal`、`import`、`define`、`data`、`computed`、`extend`、`action`
- 表达式与 `${...}` 文本替换
- 常见上下文变量
- 已确认模块、触发器、动作、复杂动作

## 这份 wiki 不做什么

- 不教你去看反编译源码
- 不把偏底层实现细节当作常规配置写法推荐
- 对当前没有稳定结论的冷门语法，不会硬猜

## 入口导航

<div className="af-section-grid">
  <div className="af-card">
    <h3>先把结构写对</h3>
    <p>从最小骨架、display、internal、模板继承开始，把物品配置写成可读可维护的结构。</p>
    <a href="/item-structure">看配置结构</a>
  </div>
  <div className="af-card">
    <h3>再把动态值写对</h3>
    <p>查 define、data、computed、${'{...}'} 文本替换、列表展开、模块调用和常见上下文变量。</p>
    <a href="/expressions-and-text">看表达式与文本</a>
  </div>
  <div className="af-card">
    <h3>最后把动作写稳</h3>
    <p>按触发器和动作参考来写，并避开 delay、attach、chance、set 等复杂动作的边角坑点。</p>
    <a href="/complex-actions">看复杂动作</a>
  </div>
</div>

## 建议阅读顺序

1. 先看 [快速开始](./quick-start.md)
2. 再看 [命令与工作流](./commands-and-workflow.md)
3. 然后看 [配置结构](./item-structure.md) 和 [Display 与外观](./display-and-options.md)
4. 写动态值时看 [Define、Data、Computed](./values-and-computed.md) 与 [表达式与文本](./expressions-and-text.md)
5. 写动作时看 [触发器](./triggers.md)、[动作参考](./actions.md)、[复杂动作](./complex-actions.md)
6. 收尾时看 [稳定写法与限制](./stability-and-limits.md) 和 [常见坑](./pitfalls.md)

## 最小骨架

```yaml
display:
  material: STONE
  meta: 0

internal:
  uuid: "00000000-0000-0000-0000-000000000000"
  alias: ["example_item"]
```
