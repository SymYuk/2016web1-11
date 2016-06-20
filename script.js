var num=Math.floor(Math.random()*256+1);
var chance=8;
var wordC="●●●●●●●●"
var word="1~256の数あてデス！\nチャンス : "+wordC
var input=parseInt(window.prompt(word));

var message;

while(true)
{
if(answer===number)
message="正解！！";
else
{
  chance--;
  wordC.replace("●","");
  if(chance==0)
  {
  message="ゲームオーバー！\n正解は"+num+"です";
document.getElementById('choice').textContent=message;
break;
  }
  else if(input<num)
  message="もっと大きいよ！チャンス : "+wordC
  else if(input>num)
  message="もっと小さいよ！チャンス : "+wordC
}
document.getElementById('choice').textContent=message;
}
