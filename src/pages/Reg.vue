<template>
    <div class="longin">
        <div class="container_top"></div>
        <div class="maincontainer">
            <div class="container itemdetail mini-innner">
                <div class="row">
                    <div class="col-md-12 tal mt20">
                        <form  id="theForm"  name="theForm" class="form-signin"  action="/p/j_spring_security_check" method="POST" >
                            <input type="hidden" id="returnUrl" name="returnUrl" value="http://m.legendshop.cn/p/orderDetails"/>
                            
                            <input name="j_username"   id="username" type="text" style="margin-bottom: -2px;-webkit-appearance:none; " class="form-control" placeholder="帐户名/手机号码" message="账号" required="true" autofocus=""  tabindex="1" v-model="user">
                            <br>
                            <input id="pwd" name="j_password" type="password" class="form-control" placeholder="请输入密码" message="密码" required="true" style="-webkit-appearance:none;" autocomplete="off"  tabindex="2" v-model="password">
                            <div class="clear"></div>
                            <div class="btn_box">
                                <div class="col-xs-6 p0"><router-link type="button" class="btn btn-block" 
                                to='/longin'
                                >登  陆</router-link></div>
                                <div class="col-xs-5 p0" style="margin-left:10px;"><button type="button" class="btn btn-info btn-default btn-block" 
                                @click="reg">注 册</button></div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'Longin',
    data(){
        return {
            user: '',
            password: '',
            data: ''
        }
    },
    methods:{
        reg(){
            axios({url:'mumu/reg',
            method: 'post',
            data:{username:this.user,password:this.password,save:true}
            }).then(res=>{
                this.data = res.data
                console.log(this.data)
                if(this.data.err === 0){
                    this.$router.push('/')
                }
                
            })
        }
    },
}
</script>

<style scoped>
.checkbox{width: 100%;}
.btn_box{display: flex;justify-content: center;}
.p0{width: 50%;}
.form-signin {max-width: 330px;padding: 15px;margin: 0 auto;}
.form-signin .form-signin-heading,.form-signin .checkbox {margin-bottom: 10px; font-weight: normal; padding: 0 20px;}
.form-signin .form-control {position: relative;height: auto;-webkit-box-sizing: border-box; -moz-box-sizing: border-box;box-sizing: border-box;padding:10px;font-size: 16px;}
.form-signin .form-control:focus {z-index: 2;}
.form-signin input[type="email"] {margin-bottom: -1px;border-bottom-right-radius: 0;border-bottom-left-radius: 0;}
.form-signin input[type="password"] {margin-bottom: 10px;}

.clear{clear:both;}
.maincontainer {
    height: auto !important;
    margin: 0 auto;
    max-width: 768px;
    padding-bottom: 110px;
    position: relative;
}

</style>
