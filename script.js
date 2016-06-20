var num=Math.floor(Math.random()*256+1);
var chance=8;
var wordC="●●●●●●●●";
var word='1~256の数あてデス！\nチャンス : '+wordC;
var input;

input=parseInt(window.prompt(word));

while(true)
{
	if(input===num)
	{
		word='正解！おめでとう！！';
		document.alert(word);
		break;
	}
	else
	{
  		chance-=1;
  		wordC=wordC.substr(0,text.length-1);
  		if(chance==0)
  		{
  			word='ゲームオーバー！\n正解は'+num+'です';
			document.alert(word);
			break;
  		}
  		else if(input<num)
  		{
  			word='もっと大きいよ！\nチャンス : '+wordC;
  		}
  		else if(input>num)
  		{
  			word='もっと小さいよ！\nチャンス : '+wordC;
		}	
	}
input=parseInt(window.prompt(word));
}
