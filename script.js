var num=Math.floor(Math.random()*3);
var chance=8;
var wordC="●●●●●●●●";
var word='1~256の数あてデス！\nチャンス : '+wordC;
var input;
var message;

while(true)
{
	input=parseInt(window.prompt(word));
	if(input===num)
	{
		message='正解！おめでとう！！';
	//	break;
	}
	else
	{
  		chance-=1;
  		wordC=wordC.substr(0,text.length-1);
  		if(chance===0)
  		{
  			message='ゲームオーバー！\n正解は'+num+'です';
		//	break;
  		}
  		else if(input<num)
  		{
  			message='もっと大きいよ！\nチャンス : '+wordC;
  		}
  		else if(input>num)
  		{
  			message='もっと小さいよ！\nチャンス : '+wordC;
		}	
	}
 document.getElementById('choice').textContent=message;
}
 document.getElementById('choice').textContent=message;
