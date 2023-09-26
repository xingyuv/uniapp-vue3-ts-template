# 🌈 uniapp-vue3-ts-template 基础框架

<p align="center">
    <img src="https://img.shields.io/badge/-Vue3.2-34495e?logo=vue.j" />
    <img src="https://img.shields.io/badge/-Vite4-646cff?logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/-TypeScript4.9-blue?logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/-Pinia2-yellow?logo=picpay&logoColor=white" />
    <img src="https://img.shields.io/badge/-ESLint-4b32c3?logo=eslint&logoColor=white" />
    <img src="https://img.shields.io/badge/-pnpm7-F69220?logo=pnpm&logoColor=white" />
</p>

## 介绍

- 基于 vue3.3+ ，TypeScript ，Vite3 ，Pinia 等开发的 uniapp 基础框架
- [开源地址](https://gitee.com/xingyu4j/uniapp-vue3-ts-template)

## 注意事项

- 项目路径请不要使用中文命名！！！会造成解析乱码！！！请使用全英文路径！！！
- node >=16(建议使用 18 版本) ,pnpm >=7

### 前端依赖

| 框架 | 说明 | 版本 |
| --- | --- | --- |
| [Vue](https://staging-cn.vuejs.org/) | vue 框架 | 3.3.4 |
| [Vite](https://cn.vitejs.dev//) | 开发与构建工具 | 4.4.9 |
| [TypeScript](https://www.typescriptlang.org/docs/) | JavaScript 的超集 | 5.2.2 |
| [pinia](https://pinia.vuejs.org/) | Vue 存储库 替代 vuex5 | 2.0.33 |
| [vue-i18n](https://kazupon.github.io/vue-i18n/zh/introduction.html/) | 国际化 | 9.4.1 |
| [uniapp](https://uniapp.dcloud.net.cn//) | uniapp | 3.0.0 |

## 安装使用

- 查看当前 npm 源

```bash
npm config ls
```

- 如果执行上面命令您并未看到 registry = "<https://registry.npmjs.org/"，说明使用的非npm官方源，请执行下面命令>

```bash
npm config set registry https://registry.npmjs.org
```

- 如果您还没安装 pnpm，请执行下面命令

```bash
npm install -g pnpm
```

- mac 用户遇到安装报错请在命令前加上 sudo

- 安装依赖

```bash
pnpm install
```

- 运行项目

```bash
pnpm run dev:h5
```

- 打包

```bash
pnpm run build:h5
```

- 安装一个包

```bash
pnpm add 包名
```

- 卸载一个包

```bash
pnpm remove 包名
```

- 其他命令请看 package.json

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中
