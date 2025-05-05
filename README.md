# ppl26-web

PPL2026のWebページの試運転サイトです．

ナビゲーションメニュー部の自動生成のため，
静的サイトジェネレーター [Eleventy](https://www.11ty.dev/) を使用している．

## 編集作業の流れ

1. `src` ディレクトリ以下のHTMLファイルを編集
2. ビルドを実行して，生成されたファイルを確認
   ```
   npx eleventy
   ```
   `docs/` ディレクトリに公開Webページ一式が生成される．docs/にあるhtmlファイルを開いて確認する．
   
   ローカルにテストWEBサーバを起動させる場合は，
   ```
   npx eleventy --serve
   ```
   とすれば，http://localhost:8080/ にアクセスしてページをブラウザで確認できる．

## 環境準備手順

### 1. Node.jsのインストール

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

### 2. GitHubからリポジトリをクローン

```bash
git clone https://github.com/khasimt/ppl26-web.git
cd ppl26-web
```

### 3. 必要なパッケージのインストール

```bash
npm install
```

これにより、package.jsonに記載されているすべての依存関係（Eleventyを含む）がインストールされます。

## GitHubでの設定（ただの作業メモ）

1. `ppl26-web` という名前でpublicリポジトリを作成
2. リポジトリの Settings → Pages で、gh-pagesブランチの `/` を公開ソースとして指定
   * `deploy.yml` で指定した Github Actions により，push時にビルドが行われて，
    `docs` に生成されたファイルは gh-pages ブランチの root (`/`) に移される．
