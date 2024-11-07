# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 開発環境のセットアップ

## 前提条件

- **Node.js**: バージョン 18.x が必要です。インストールされていない場合は、[Node.js の公式サイト](https://nodejs.org/)からインストールしてください。
- **npm**: Node.js インストール時に自動的に含まれます。

## 開発サーバーの起動

1. **依存関係のインストール**
   リポジトリをクローンしたら、最初に依存関係をインストールします。

   ```bash
   npm install
   ```

2. **開発サーバーを起動するには、以下のコマンドを実行します。**

    ```bash
    npm run dev
    ```

3. **ローカルホストへのアクセス**
    コマンドを実行すると、以下のようなメッセージが表示されます。
    <img width="332" alt="スクリーンショット 2024-11-07 10 16 56" src="https://github.com/user-attachments/assets/bc25ac30-421e-4c25-b285-7ca0004dd784">

    表示されたURL（例: http://localhost:5173/) をクリックするか、ブラウザにコピー＆ペーストしてアクセスすることで、開発サーバーに接続できます。

