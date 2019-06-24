$(document).ready(function(){
    $("a[data-toggle='modal']").click(function(e){
        $('[id|=hint]').html(""); 
    });
});


$(document).ready(function(){
    $("#submit-01").click(function(e){
        e.preventDefault();
        username = $("#username-01").val();
        password = $("#password-01").val();
        $.ajax({
            type: "POST",
            url: "login.php",
            data: {"username":username, "password":password},
            success: function(msg){
                if(msg == 0) {
                    $("#hint-01").html("用户名或密码错误")                            
                } else {
                    $("#hint-01").html("");
                    $("#login").modal('toggle');
                    $("#login-01").empty();
                    $("#login-01").html('<li class="nav-item"><a class="nav-link">欢迎回来！' + username + '</a></li> \
                    <li class="nav-item"><a class="nav-link" onclick="logout()">退出</a></li>');
                }
            },
            error:function(msg){
                console.log("request fail:" + msg);
            }
        });
    });
});

function logout() {
    $.ajax({
        type: "get",
        url: "logout.php",
    });
    $("#login-01").html('<li class="nav-item"><a class="nav-link" data-toggle="modal" data-target="#login" href="">登录</a></li>\
                        <li class="nav-item"><a class="nav-link" data-toggle="modal" data-target="#register" href="">注册</a></li>');
}

$(document).ready(function(){
    $("#submit-02").click(function(e){
        $("#hint-02").html('');
        if(!document.getElementById("form-02").checkValidity()){
            return;
        }
        if($("#password-021").val() != $("#password-022").val()){
            $("#hint-02").html("两次输入的密码不一致");
            return;
        }
        $.ajax({
            type: "POST",
            url: "register.php",
            data: {"username":$("#username-02").val(), "password":$("#password-021").val(), "email":$("#email").val(),
                "age":$("#age").val(), "tel":$("#tel").val()},
            success: function(msg){
                if(msg){
                    alert("注册成功！");
                    $("#hint-02").html("");
                    $("#register").modal("toggle");
                }else{
                    $("#hint-02").html("用户名已被占用");
                    return;
                }
            },
        });
    }); 
});

