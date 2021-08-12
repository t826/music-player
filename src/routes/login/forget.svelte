<script>
    let phone  =''
</script>
<div id="forget"> 
    <form action="demo-form.php" id="form-forget" >
        <p>密码修改</p>
        <input type="text " class="forget-input" placeholder="手机号或邮箱" bind:value={phone}> <br>
        <input type="text" class="cheke-code" placeholder="请输入验证码" > 
        <input type="button" class="send-code" value="发送验证码"><br>
        <input type="text" class="forget-input" placeholder="新密码" ><br>
        <input type="submit" id="button" value="确认修改">        
    </form>
</div>


<style>
#forget {
  margin: 0 auto;
  margin-top:150px;
  width: 450px;
  height: 500px;

}
#form-forget{
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
#form-forget p  {
   margin-top: 30px;
   font-weight: bolder;
   font-family:'Courier New', Courier, monospace;
   display:flexbox;
   align-items: center;
   color:black;
    
}
.forget-input{
    height: 28px;
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
.cheke-code{
    height: 28px;
    width: 200px;
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
 </style>