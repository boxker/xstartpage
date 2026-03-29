# xstartpage

简约现代风格的起始页，支持选择搜索引擎（ChatGPT / Bing / Google / Perplexity）并根据关键词跳转。

## 本地运行

这是一个纯静态站点，直接打开 `index.html` 即可预览，或使用任意静态文件服务器启动。

## 使用 Docker Compose 部署

### 1) 前置条件

- 已安装 Docker
- 已安装 Docker Compose（`docker compose` 命令可用）

### 2) 启动服务

在项目根目录执行：

```bash
docker compose up -d --build
```

启动后默认监听本机 `8080` 端口：

- 访问地址：`http://localhost:8080`

### 3) 查看运行状态与日志

```bash
docker compose ps
docker compose logs -f
```

### 4) 停止并移除容器

```bash
docker compose down
```

## 目录说明

- `index.html`：页面结构
- `styles.css`：页面样式
- `script.js`：搜索逻辑与键盘交互
- `Dockerfile`：静态站点镜像构建配置
- `docker-compose.yml`：Compose 编排配置
