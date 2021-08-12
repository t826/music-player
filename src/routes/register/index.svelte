
<div id="register">
    <form id="app"> 
      <p >加入我们</p>
      <input  class="register-input" type="text " name="userName" placeholder="手机号或邮箱" ><br>
      <input  class="cheke-code"  type="text" name="cheke-code" placeholder="验证码">
        <input  type="button" class="send-code" value="发送验证码"><br>
      <input type="text" class="register-input" placeholder="请输入密码" > <br>
      <input type="text" class="register-input" placeholder="再次确认密码"><br>
      <input id= "button" type="submit" value="确认提交"><br>
    </form>
  </div>



<style>

 #register {
  /* 伸缩布局中的左右居中 */
  margin: 0 auto;
  margin-top:150px;
  width: 450px;
  height: 500px;
}

#app {
  width: 450px;
  height: 400px;
  background-color: rgba(211, 211, 211, 0.3);
  box-shadow: 0px 0px 10px #000;
  border-radius: 1em;
  position: absolute;
  text-align: center;
  margin: auto auto;
  font-size: 25px;
  margin-top: 20px;
  /* 毛玻璃选项 */
  backdrop-filter:blur(2px);
  /* 兼容低版本浏览器毛玻璃 */
  -webkit-backdrop-filter: blur(2px);
    
}
 #app p  {
    /* border: 2px solid red; */
    margin-bottom: 5px;
   margin-top: 20px;
   font-weight: bolder;
   font-family:'Courier New', Courier, monospace;
    display:flexbox;
    align-items: center;
    color:black;

}
.cheke-code {
    width: 200px;
    height: 20px ;
    text-align: center;
    font-size: 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border-radius: 20px;
    margin-top: 35px;
    align-items: center; 
    border: none;
    padding: 5px;
    border-style: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid greenyellow;
    margin-bottom: 0px;
}
.send-code{
    height: 30px ;
    width: 100px;
    text-align: center;
    font-size: 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border-radius:20px;
    margin-top: 30px;
    align-items: center; 
    border: none;
    padding: 5px;
    border-style: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.2);
   
    margin-bottom: 0px;

}
.register-input  {
 height: 20px;
 width: 300px;
 text-align: center;
 font-size: 15px;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 border-radius: 20px;
 margin-top: 30px;
 align-items: center; 
 border: none;
 padding: 5px;
 border-style: none;
 outline: none;
 background-color: rgba(255, 255, 255, 0.2);
 border-bottom: 1px solid greenyellow;
 margin-bottom: 0px;
 
}

#button { 
  width: 200px;
  height: 38px;
  border: none;
 
  background-color: rgba(240, 236, 236, 0.5);
  margin-top: 25px;
  font-size: 20px;
  border-radius: 20px;
}
#button:hover {
  background-color:rgb(124, 119, 121)
} 
#button:active{
  border: 2px solid yellowgreen;
  outline: none;
}
#app .regist{
  /* border: 2px solid red; */
  margin-top: 10px;
  margin-bottom: 5px;
}
a{
  text-decoration: none;
  font-size: 12px;
  color: rgb(80, 75, 75);
  margin-top: 0px;


}

  </style>