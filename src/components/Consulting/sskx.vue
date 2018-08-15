<template>
  <div>
    <h3 class="date f12">2018-7-19 星期四</h3>
    <ul class="article-wrap">
      <li>
        <div class="tag-wrap">
          <span class="circle-wrap">
            <span class="circle"></span>
          </span>
          <span class="time">15:24</span>
        </div>
        <div class="list-item">
          <p>
            7月19日讯，美元指数DXY短线上扬，刷新日高，现
            报95.21；欧元兑美元EUR/USD、英镑兑美元EUR/
            USD、美榜兑美元GBP/USD均刷新日低。
          </p>
          <div class="expand"><span>展开</span> <img width="9" src="../../assets/img/arrow-btm.png" alt=""></div>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <div class="tag-wrap">
          <span class="circle-wrap">
          <span class="circle"></span>
        </span>
          <span class="time">15:24</span>
        </div>
        <div class="list-item">
          <p>
            7月19日讯，美元指数DXY短线上扬，刷新日高，现
            报95.21；欧元兑美元EUR/USD、英镑兑美元EUR/
            USD、美榜兑美元GBP/USD均刷新日低。
          </p>
          <div class="expand"><span>展开</span> <img width="9" src="../../assets/img/arrow-btm.png" alt=""></div>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <div class="tag-wrap">
          <span class="circle-wrap">
          <span class="circle"></span>
        </span>
          <span class="time">15:24</span>
        </div>
        <div class="list-item">
          <p>
            7月19日讯，美元指数DXY短线上扬，刷新日高，现
            报95.21；欧元兑美元EUR/USD、英镑兑美元EUR/
            USD、美榜兑美元GBP/USD均刷新日低。
          </p>
          <div class="expand"><span>展开</span> <img width="9" src="../../assets/img/arrow-btm.png" alt=""></div>
        </div>
        <div class="line"></div>
      </li>
    </ul>
  </div>
</template>
<script>

</script>
<style scoped>
 .date {
     padding: 6px 10px;
     color: #4A4A4A;
     text-align: left;
 }
 .f12 {
     font-size: 12px;
 }
 .article-wrap {
     background-color: #fff;
     border-top: 1px solid #000;
     overflow: hidden;
 }
 .article-wrap li {
    position: relative;
    padding: 10px 10px 0px;
 }
 .article-wrap .circle-wrap {
    display: inline-block;
    width: 12px;
    height: 12px;
    background: #EBEEF7;
    border-radius: 50px;
    position: relative;
    vertical-align: middle;
    z-index: 9;
 }
 .tag-wrap {
     text-align: left;
 }
 .article-wrap .tag-wrap .circle-wrap .circle {
    position: absolute;
    width: 6px;
    height: 6px;
    left: 3px;
    top: 3px;
    background: #CBD4EB;
    border-radius: 50px;
 }
 .article-wrap .tag-wrap .time {
     display: inline-block;
    padding: 2px 4px;
    background: #A5B3D6;
    border-radius: 2px;
    color: #fff;
    font-size: 12px;
    vertical-align: middle;
    margin-left: 2px;
 }
 .article-wrap .list-item {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #F1F1F1;
    margin-left: 20px;
 }
 .article-wrap p {
    color: #4A4A4A;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
}
.expand {
    text-align: left;
    color: #407DF6;
    font-size: 12px;
    margin-top: 6px;
}
.article-wrap .expand span {
    vertical-align: middle;
}
.article-wrap li:first-child .line {
    top: 24px;
    position: absolute;
    width: 1px;
    left: 15px;
    bottom: 0px;
    background: #F1F1F1;
}
.article-wrap .line {
    position: absolute;
    width: 1px;
    left: 15px;
    top: 0px;
    bottom: 0px;
    background: #F1F1F1;
}
</style>
