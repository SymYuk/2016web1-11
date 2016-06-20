var num=Math.floor(Math.random()*256+1);
var chance=8;
var wordC="●●●●●●●●"
var word="1~256の数あてデス！\nチャンス : "+wordC;
var input;
input=parseInt(window.prompt(word));

var message;

while(true)
{
	if(input===num)
	{
		message="正解！おめでとう！！";
		ddocument.alert(message);
		break;
	}
	else
	{
  		chance--;
  		wordC.replace("●","");
  		if(chance==0)
  		{
  			message="ゲームオーバー！\n正解は"+num+"です";
			document.alert(message);
			break;
  		}
  		else if(input<num)
  		message="もっと大きいよ！チャンス : "+wordC
  		else if(input>num)
  		message="もっと小さいよ！チャンス : "+wordC
	}
input=parseInt(window.prompt(message));
}
