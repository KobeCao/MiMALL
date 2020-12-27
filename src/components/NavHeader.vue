<template>
  <div class="header">
    <!-- 顶部条 -->
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-meny">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">loT</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">天星数科</a>
          <a href="javascript:;">有品</a>
          <a href="javascript:;">小爱开放平台</a>
          <a href="javascript:;">企业团购</a>
          <a href="javascript:;">资质证照</a>
          <a href="javascript:;">协议规则</a>
          <a href="javascript:;">下载APP</a>
          <a href="javascript:;">智能生活</a>
          <a href="javascript:;">Select Location</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart">
            <span class="icon-cart"></span>购物车
          </a>
        </div>
      </div>
    </div>
    <!-- 导航条 -->
    <div class="nav-header">
      <div class="container">
        <div class="header-log">
          <a href="/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img"></div>
                    <div class="pro-name"></div>
                    <div class="pro-price"></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi 红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>笔记本</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>家电</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>路由器</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>智能硬件</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>服务</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>社区</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
};
</script>

<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      // 替换相同的代码
      @include flex();
      // display: flex;
      // justify-content: space-between; //水平方居中
      // align-items: center; //垂直居中
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #FF6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-log {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color:#FF6600;
        a{
           display: inline-block;
           width: 110px;
           height: 55px;
          // 通过伪类的形式来展示两张图片
          &:before {
            content: '';
            @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
            transition: margin .2s;
          }
          &:after {
            content: '';
            @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
          }
          &:hover:before {
            margin-left: -55px; 
            // transition第一个元素指定就是那个属性需要过渡，
            transition: margin .2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper{
          height: 50px;
          border: 1px solid #E0E0E0;
          display: flex;
          align-items: center;
          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #E0E0E0;
            width: 264px;
            height: 50px;
          }
          a {
            @include bgImg(18px,18px,'/imgs/icon-search.png');
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>