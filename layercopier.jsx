// Photoshopの画像アセット生成用に、Mac OSXアプリ用のアイコンをレイヤーに自動複製してくれるスクリプト v1.0
// author trpla226 2020/12/7
// Adobe Photoshop 2021で動作確認

(function () {
// 初期化・参照キャッシュ
var document = app.activeDocument
var layer = document.activeLayer

// 設定
var ext = ".png"
var baseResolutions = [16, 32, 128, 256, 512]
var multipliers = [1,2,3]

var baseName = layer.name

alert("現在選択中のレイヤー「" + layer.name + "」を複製して画像アセット用のレイヤーを作成します。");

for(resolutionIndex in baseResolutions) {
    for(multiplierIndex in multipliers) {
        duplicateLayer(baseName, layer, baseResolutions[resolutionIndex], multipliers[multiplierIndex])
    }
}

// 関数定義
function duplicateLayer(baseName, layer, baseResolution, multiplier) {
    var newLayer = layer.duplicate(layer, ElementPlacement.PLACEAFTER);
    var res = baseResolution * multiplier
    var m = multiplier === 1 ? "" : "@"+multiplier
    newLayer.name = res + " x " + res + " " + baseName + baseResolution + m + "x" + ext 
    return newLayer
}

})()
