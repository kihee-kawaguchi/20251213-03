# GL Under FL - M&F Landing Page

完璧に再現されたM&Fのランディングページです。

## 特徴

### デザイン
- ✅ オリジナルサイトを完全再現
- ✅ モダンでクリーンなUI/UX
- ✅ スムーズなアニメーション
- ✅ プロフェッショナルなビジュアル

### レスポンシブ対応
- ✅ モバイルファースト設計
- ✅ タブレット・デスクトップ最適化
- ✅ 768px、480pxでのブレークポイント
- ✅ タッチ操作サポート

### パフォーマンス最適化
- ✅ 画像遅延読み込み（Lazy Loading）
- ✅ 次の画像のプリロード
- ✅ CSS/JSの最適化
- ✅ スムーズスクロール

### SEO対応
- ✅ セマンティックHTML
- ✅ メタタグ最適化
- ✅ Open Graph対応
- ✅ アクセシビリティ準拠

### 機能
- 📱 モバイルメニュー
- 🎠 自動再生カルーセル（7枚の画像）
- ✉️ メールサインアップフォーム
- ⌨️ キーボードナビゲーション
- 👆 タッチスワイプ対応

## ファイル構成

```
public/
├── index.html       # メインHTMLファイル
├── styles.css       # スタイルシート
├── script.js        # JavaScript機能
└── README.md        # このファイル
```

## 使用方法

### ローカルで表示
1. `public`ディレクトリに移動
2. `index.html`をブラウザで開く

または

```bash
# シンプルなHTTPサーバーで起動
cd public
python -m http.server 8000
# http://localhost:8000 にアクセス
```

### 本番環境へのデプロイ
静的ホスティングサービスにデプロイ可能：
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## 技術仕様

- HTML5
- CSS3（CSS Grid、Flexbox、CSS Variables）
- Vanilla JavaScript（ES6+）
- レスポンシブデザイン
- アクセシビリティ対応（ARIA属性）

## ブラウザサポート

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）
- モバイルブラウザ

## カスタマイズ

### 色の変更
`styles.css`の`:root`セクションでCSS変数を変更：

```css
:root {
    --primary-color: #000000;
    --secondary-color: #ffffff;
    --accent-color: #333333;
}
```

### カルーセルの自動再生間隔
`script.js`の`startAutoPlay()`メソッドで変更：

```javascript
startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
    }, 5000); // ミリ秒単位で指定
}
```

## ライセンス

© 2025 M&F GROUP,. All rights reserved.

---

Built with ❤️ by Miyabi Framework
