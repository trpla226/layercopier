# layercopier

Photoshopの画像アセット機能を使ってMacやiSOアプリのアイコンを一括で作る用のスクリプトです。

できること

 - ユーザが用意した高解像度アイコン画像のレイヤーをコピーし、新しいレイヤーを画像アセット書き出し用のフォーマットにリネームします。

使い方

 1. 必要に応じてjsxを編集し、画像解像度を設定します。
 1. Photoshopで元になる画像を開きます。
 1. Photoshopの「生成 -> 画像アセット」を設定します。
 1. 元画像のレイヤーを選択します。
 1. layercopier.jsxファイルを開きます。
 1. 設定に従い、元画像レイヤーが複製・リネームされます。
 1. psdファイルを保存すると、出力先に設定したフォルダに画像が書き出されます。

Adobe Photoshop 2021で動作確認しています。
