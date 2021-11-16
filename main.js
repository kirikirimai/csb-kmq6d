$(function () {
  var bar = new ProgressBar.Line(js_loading, {
    strokeWidth: 0.2, //進捗ゲージの太さ
    easing: "easeInOut",
    duration: 1400,
    color: "#FF0000",
    trailColor: "#fff",
    trailWidth: 1,
    svgStyle: { width: "100%", height: "100%" },
    text: {
      //テキストの形状を直接指定
      style: {
        //天地中央に配置
        position: "absolute",
        left: "50%",
        top: "50%",
        padding: "0",
        margin: "-30px 0 0 0", //バーより上に配置
        transform: "translate(-50%,-50%)",
        "font-size": "1rem",
        color: "#fff"
      },
      autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function (state, bar) {
      bar.setText(Math.round(bar.value() * 100) + " %"); //テキストの数値
    }
  });
  //アニメーションスタート
  bar.animate(1.0, function () {
    //バーを描画する割合を指定します 1.0 なら100%まで描画します
    $("#loading_wrap").delay(500).fadeOut(800); //アニメーションが終わったら#splashエリアをフェードアウト
  });
});
