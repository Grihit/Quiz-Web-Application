var score = 0;
var i=0;
var c=0;
var ques = ["A figure with 3 sides is known as a?","The smallest two-digit number is?","A figure which has no sides and no corners is called?","When any number is multiplied by 0, the answer is always?","A figure with four equal sides is called?"];
var options = [
    ["Circle","Square","Triangle","Rectangle"],
    ["12","9","20","10"],
    ["Circle","Triangle","Hexagon","Square"],
    ["The number itself","Zero","Infinity","Cannot be determined"],
    ["Circle","Square","Rectangle","Triangle"]
  ];
var ans = ["c","d","a","b","b"]
function start(){
    timer();
    document.getElementById("start").style.display = "none";
    document.getElementById("box").style.display = "block";
    i=Math.floor(Math.random()*5);
    document.getElementById("ques").innerHTML = ques[i];
    document.getElementById("la").innerHTML = options[i][0];
    document.getElementById("lb").innerHTML = options[i][1];
    document.getElementById("lc").innerHTML = options[i][2];
    document.getElementById("ld").innerHTML = options[i][3];
    ques[i]=="done";
}
function button_click(){
    timer();
    if(c!=5)
    {
        c++;
        ques[i] = "done";
        if(document.getElementById("a").checked == true)
        {
            document.getElementById("a").checked = false;
            var x = "a";
        }
        else if(document.getElementById("b").checked == true)
        {
            document.getElementById("b").checked = false;
            var x = "b";
        }
        else if(document.getElementById("c").checked == true)
        {
            document.getElementById("c").checked = false;
            var x = "c";
        }
        else if(document.getElementById("d").checked == true)
        {
            document.getElementById("d").checked = false;
            var x = "d";
        }
        else
            var x ="";
        if(x == ans[i])
            score++;
    }
    while(ques[i]=="done" && c!=5)
    {
        i=Math.floor(Math.random()*5);
    }
    if(c==4)
        document.getElementById("next").innerHTML = "End quiz";   
    if(c!=5)
    {
        document.getElementById("ques").innerHTML = ques[i];
        document.getElementById("la").innerHTML = options[i][0];
        document.getElementById("lb").innerHTML = options[i][1];
        document.getElementById("lc").innerHTML = options[i][2];
        document.getElementById("ld").innerHTML = options[i][3];
    }
    else
    {
        var y = document.getElementsByTagName("span");
        console.log(y);
        var z = document.getElementsByTagName("input");
        var t = document.getElementsByTagName("label");
        for(var a=0;a<y.length;a++)
        {
            y[a].style.display="none";
        }
        for(var a=0;a<4;a++)
        {
            z[a].style.display="none";
            t[a].style.display="none";

        }
        document.getElementById("next").style.display="none";
        document.getElementById("ques").style.textAlign = "center";
        document.getElementById("ques").innerHTML = "QUIZ COMPLETE<br><br>Your score is: "+score+"/5";
    }
}
var p=0;
var countdown = 0;
function timer(){
    p=29;
    clearInterval(countdown);
    countdown = setInterval(function()
    {
        document.getElementById("countdown").style.color = "black";
        if(p<=5)
            document.getElementById("countdown").style.color = "red";
        if(p<1)
        {
            button_click();
        }
        document.getElementById("countdown").innerHTML = p;
        p--; 
    },1000)
}