# PPL2026-web

PPL2026のWebページの試運転サイトです。
ここで確認した後に本番環境にコピーします。

ナビゲーションメニューを自動生成したかったので、そのためだけに静的サイトジェネレータeleventyを使っています。
docs/以下に最終的な生成物が置かれるようになっており、 それを以下で公開しています。
https://khasimt.github.io/ppl26-web/

以下は、PPL2026のWebページを編集される方向けのガイドです。（自分用の備忘録も兼ねる。）

## 編集作業の流れ

このガイドでは、PPL2026のWebページをforkして編集し、pull requestを送るまでの流れを説明します。（Claudeで自動生成した説明文．実行テストはしてません...）

## 1. リポジトリのforkとローカル環境へのセットアップ

### 1.1 リポジトリのfork
1. [https://github.com/khasimt/ppl26-web](https://github.com/khasimt/ppl26-web) にアクセス
2. 右上の「Fork」ボタンをクリックして、自分のGitHubアカウントにリポジトリをfork

### 1.2 ローカルにクローン
```bash
git clone https://github.com/[あなたのユーザー名]/ppl26-web.git
cd ppl26-web
```

### 1.3 オリジナルリポジトリを upstream として追加
```bash
git remote add upstream https://github.com/khasimt/ppl26-web.git
```

## 2. 開発環境の準備

### 2.1 Node.jsのインストール

Eleventyを使用するため、Node.jsが必要です。

#### Ubuntu/Debian系の場合:
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

#### macOSの場合:
Homebrewを使用:
```bash
brew install node
```

#### Windowsの場合:
[Node.js公式サイト](https://nodejs.org/)からインストーラーをダウンロードして実行

### 2.2 依存パッケージのインストール
```bash
npm install
```

これにより、`package.json`に記載されているEleventyを含むすべての依存関係がインストールされます。

## 3. 編集作業

### 3.1 編集前の準備

編集を始める前に、元のリポジトリの最新状態を取り込むことをおすすめします：

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

### 3.2 編集するファイル

- **HTMLファイル**: `src/` ディレクトリ以下のHTMLファイルを編集します
- **スタイルやスクリプト**: 必要に応じて、関連するCSSやJavaScriptファイルも編集します

### 3.3 ローカルでの確認方法

#### 方法1: ビルドして静的ファイルを確認
```bash
npx eleventy
```
- `src/` にあるファイルを元に `docs/` ディレクトリに公開用のWebページ一式が生成されます
- 生成されたHTMLファイルをブラウザで開いて確認できます

#### 方法2: 開発サーバーを起動（推奨）
```bash
npx eleventy --serve
```
- ローカルサーバーが起動します
- ブラウザで [http://localhost:8080/](http://localhost:8080/) にアクセスして確認
- ファイルを編集すると自動的にリロードされます

## 4. 変更をコミット

編集が完了したら、変更をコミットします。

```bash
git add .
git commit -m "説明的なコミットメッセージ"
```

## 5. GitHubにプッシュとPull Request

### 5.1 GitHubにプッシュ
編集が完了し、テストも問題なければ、forkした自分のリポジトリにプッシュします。

```bash
git push origin main
```

### 5.2 Pull Request作成前の最終確認
Pull Requestを作成する前に、もう一度元のリポジトリの最新状態を取り込むことをおすすめします：

```bash
git fetch upstream
git merge upstream/main
git push origin main
```

### 5.3 Pull Requestの作成
1. GitHubで自分のforkしたリポジトリにアクセス
2. 「Pull Request」タブをクリック
3. 「New Pull Request」ボタンをクリック
4. 変更内容を確認し、説明を記入
5. 「Create Pull Request」をクリック
