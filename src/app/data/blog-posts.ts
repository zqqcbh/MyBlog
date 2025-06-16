export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Spring Boot 微服务架构实践",
    description: "深入探讨 Spring Boot 在微服务架构中的应用，包括服务注册、配置中心、负载均衡等核心概念。",
    date: "2024-03-20",
    tags: ["Java", "Spring Boot", "微服务"],
    content: `
# Spring Boot 微服务架构实践

## 引言
微服务架构已经成为现代应用开发的主流趋势。本文将详细介绍如何使用 Spring Boot 构建微服务应用。

## 核心概念
1. 服务注册与发现
   - Eureka 服务注册中心
   - 服务健康检查
   - 服务自动发现

2. 配置中心
   - Spring Cloud Config
   - 配置动态刷新
   - 环境隔离

3. 负载均衡
   - Ribbon 客户端负载均衡
   - 负载均衡策略
   - 服务熔断与降级

## 实践步骤
1. 搭建基础框架
2. 实现服务注册
3. 配置服务发现
4. 实现负载均衡
5. 添加熔断机制

## 最佳实践
- 合理划分服务边界
- 实现优雅降级
- 监控服务健康状态
- 日志追踪

## 总结
微服务架构虽然复杂，但通过 Spring Boot 的生态，我们可以快速构建可靠的微服务应用。
    `
  },
  {
    id: 2,
    title: "Django REST Framework 开发指南",
    description: "全面介绍 Django REST Framework 的使用方法，从基础概念到高级特性，助你快速构建 RESTful API。",
    date: "2024-03-18",
    tags: ["Python", "Django", "REST API"],
    content: `
# Django REST Framework 开发指南

## 简介
Django REST Framework (DRF) 是一个功能强大且灵活的工具包，用于构建 Web API。

## 核心组件
1. 序列化器 (Serializers)
   - 数据验证
   - 数据转换
   - 嵌套关系处理

2. 视图集 (ViewSets)
   - ModelViewSet
   - ReadOnlyModelViewSet
   - 自定义视图集

3. 权限控制
   - 认证方式
   - 权限类
   - 自定义权限

## 实践案例
1. 用户认证系统
2. 数据模型设计
3. API 端点实现
4. 权限控制
5. 数据过滤和搜索

## 高级特性
- 分页
- 过滤
- 排序
- 缓存
- 文档生成

## 性能优化
- 查询优化
- 缓存策略
- 异步处理

## 总结
DRF 提供了构建 RESTful API 所需的所有工具，合理使用这些工具可以大大提高开发效率。
    `
  },
  {
    id: 3,
    title: "MySQL 性能优化实战",
    description: "分享 MySQL 数据库性能优化的实践经验，包括索引优化、查询优化、配置调优等关键内容。",
    date: "2024-03-15",
    tags: ["MySQL", "数据库", "性能优化"],
    content: `
# MySQL 性能优化实战

## 性能优化概述
数据库性能优化是一个系统工程，需要从多个维度进行考虑和优化。

## 索引优化
1. 索引类型
   - 主键索引
   - 唯一索引
   - 普通索引
   - 复合索引

2. 索引设计原则
   - 最左前缀原则
   - 覆盖索引
   - 索引选择性

## 查询优化
1. 执行计划分析
   - EXPLAIN 使用
   - 性能瓶颈识别
   - 优化建议

2. 常见优化技巧
   - 避免全表扫描
   - 合理使用索引
   - 优化 JOIN 操作
   - 子查询优化

## 配置优化
1. 内存配置
   - 缓冲池大小
   - 排序缓冲区
   - 连接池设置

2. 磁盘 I/O 优化
   - 文件系统选择
   - RAID 配置
   - 日志文件优化

## 监控与维护
- 性能监控
- 慢查询分析
- 定期维护
- 备份策略

## 总结
MySQL 性能优化需要持续关注和调整，通过合理的优化策略，可以显著提升数据库性能。
    `
  },
  {
    id: 4,
    title: "Vue3 组合式 API 最佳实践",
    description: "深入探讨 Vue3 组合式 API 的使用方法和最佳实践，帮助你更好地组织和管理组件逻辑。",
    date: "2024-03-22",
    tags: ["Vue3", "前端", "组合式API"],
    content: `
# Vue3 组合式 API 最佳实践

## 组合式 API 简介
Vue3 的组合式 API 为我们提供了更灵活、更强大的组件逻辑组织方式。

## 核心概念
1. 响应式系统
   - ref 和 reactive
   - computed 属性
   - watch 和 watchEffect

2. 生命周期钩子
   - onMounted
   - onUnmounted
   - onUpdated

3. 依赖注入
   - provide/inject
   - 响应式注入

## 最佳实践
1. 逻辑复用
   - 组合式函数
   - 自定义 hooks
   - 状态管理

2. 性能优化
   - 响应式优化
   - 组件拆分
   - 懒加载

3. 代码组织
   - 关注点分离
   - 命名规范
   - 类型推导

## 实战案例
- 表单处理
- 数据获取
- 状态管理
- 路由集成

## 总结
组合式 API 让我们的代码更加模块化和可维护，是 Vue3 中最重要的特性之一。
    `
  },
  {
    id: 5,
    title: "TypeScript 高级类型实战",
    description: "探索 TypeScript 高级类型系统的使用技巧，提升代码的类型安全性和开发效率。",
    date: "2024-03-21",
    tags: ["TypeScript", "前端", "类型系统"],
    content: `
# TypeScript 高级类型实战

## 类型系统概述
TypeScript 的类型系统提供了强大的类型推导和类型安全保证。

## 高级类型
1. 泛型
   - 泛型约束
   - 泛型接口
   - 泛型类

2. 工具类型
   - Partial
   - Required
   - Pick
   - Omit
   - Record

3. 条件类型
   - 类型推断
   - 分布式条件类型
   - 映射类型

## 实战应用
1. 类型守卫
   - 类型谓词
   - 类型断言
   - 类型收窄

2. 类型推导
   - 上下文类型
   - 类型参数推导
   - 类型兼容性

3. 类型体操
   - 类型递归
   - 类型映射
   - 类型组合

## 最佳实践
- 类型定义规范
- 类型复用策略
- 类型测试方法

## 总结
掌握 TypeScript 高级类型系统，可以显著提升代码质量和开发效率。
    `
  },
  {
    id: 6,
    title: "现代前端工程化实践",
    description: "分享现代前端工程化的实践经验，包括构建工具、模块化、自动化测试等关键内容。",
    date: "2024-03-19",
    tags: ["前端工程化", "构建工具", "自动化"],
    content: `
# 现代前端工程化实践

## 工程化概述
前端工程化是提升开发效率和项目质量的重要手段。

## 核心工具
1. 构建工具
   - Vite
   - Webpack
   - Rollup
   - esbuild

2. 包管理
   - npm/yarn/pnpm
   - 依赖管理
   - 版本控制

3. 开发工具
   - ESLint
   - Prettier
   - Husky
   - lint-staged

## 自动化流程
1. 持续集成
   - GitHub Actions
   - Jenkins
   - 自动化部署

2. 测试自动化
   - 单元测试
   - 集成测试
   - E2E测试

3. 质量保证
   - 代码规范
   - 性能监控
   - 错误追踪

## 最佳实践
- 项目结构规范
- 构建优化策略
- 部署流程优化
- 监控告警机制

## 总结
良好的工程化实践能够显著提升团队协作效率和项目质量。
    `
  }
]; 