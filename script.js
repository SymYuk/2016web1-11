var num=Math.floor(Math.random()*256+1);
var chance=8;
var word='1~256の数あてデス！\nチャンス : '+chance+'回';
var input;
var message;

while(true)
{
	input=parseInt(window.prompt(word));
	if(input<1 || input>256 || input===null || input==="")
	{
		message='1～256で入力してね';
		document.getElementById('choice').textContent=message;
		continue;
	}
	if(input===num)
	{
		message='正解！おめでとう！！';
		break;
	}
	else
	{
  		chance-=1;
  		if(chance===0)
  		{
  			message='ゲームオーバー！\n正解は'+num+'です';
  			break;
  		}
  		else if(input<num)
  		{
  			message='もっと大きいよ！';
  		}
  		else if(input>num)
  		{
  			message='もっと小さいよ！';
		}	
	}
word='1~256の数あてデス！\nチャンス : '+chance+'回';
 document.getElementById('choice').textContent=message;
}
 document.getElementById('choice').textContent=message;
