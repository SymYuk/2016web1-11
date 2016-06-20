var num=Math.floor(Math.random()*256+1);
var chance=8;
var wordC="●●●●●●●●";
var word="1~256の数あてデス！\nチャンス : "+wordC;
var input;
input=parseInt(window.prompt(word));

var message;
document.alert("けっか？");

while(true)
{
	document.alert("けっか？");
	if(input===num)
	{
		message="正解！おめでとう！！";
		document.alert(message);
		break;
	}
	else
	{
  		chance-=1;
  		wordC=wordC.substr(0,text.length-1);
  		if(chance===0)
  		{
  			message="ゲームオーバー！\n正解は"+num+"です";
			document.alert(message);
			break;
  		}
  		else if(input<num)
  		{
  			message="もっと大きいよ！\nチャンス : "+wordC;
  		}
  		else if(input>num)
  		{
  			message="もっと小さいよ！\nチャンス : "+wordC;
		}	
	}
input=parseInt(window.prompt(message));
}
