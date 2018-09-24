<template>
  <div class="date">
    <ul class="month">
      <li @click="pickToday">今天</li>
      <li>
        <span @click="weekPre"><i class="jzui icon-sanjiaoleft"></i></span>
        {{showDate}} {{currentWeek | week}}
        <span @click="weekNext"><i class="jzui icon-sanjiaoright"></i></span>
      </li>
      <li>
        <i @click="openPicker" class="jzui icon-rili"></i>
      </li>
    </ul>
    <v-touch v-on:panleft="onPanleft" v-on:panright="onPanright" tag="div">
    <div class="weekdays-wrap">
      <ul class="weekdays">
        <li>日</li>
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
        <li>五</li>
        <li>六</li>
      </ul>

      <ul class="days">
        <li @click="pick(day)" v-for="(day, index) in days" :key="index">
        <span>
          <span
            :class="{'active':active(day),'todayActive':todayActive(day)}">{{ day.getDate() }}</span>
          </span>
        </li>
      </ul>
    </div>
    </v-touch>
    <jz-datetime-picker
      ref="picker"
      type="date"
      v-model="value"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange">
    </jz-datetime-picker>
  </div>
</template>
<script>

  export default {
    name: 'jz-week',
    data() {
      return {
        currentYear: 1970,   // 年份
        currentMonth: 1,  // 月份
        currentDay: 1,    // 日期
        currentWeek: 1,    // 星期
        days: [],
        value: new Date(),
        position: 0
      }
    },
    computed: {
      active() {
        return function (day) {
          if (day.getFullYear() == this.currentYear && day.getMonth() == this.currentMonth - 1 && day.getDate() == this.currentDay) {
            return true;
          }
        }
      },
      todayActive() {
        return function (day) {
          var date = new Date();
          if (!this.active(day) && day.getFullYear() == date.getFullYear() && day.getMonth() == date.getMonth() && day.getDate() == date.getDate()) {
            return true;
          }
        }
      },
      showDate() {
        let y = this.currentYear;
        let m = this.currentMonth;
        let d = this.currentDay;
        if (m < 10) m = `0${m}`
        if (d < 10) d = `0${d}`
        return `${y}年${m}月${d}日`
      }
    },
    mounted() {

    },

    created() {
      this.initData(null)
    },
    filters: {
      'week': function (value) {
        const days = ['日', '一', '二', '三', '四', '五', '六'];
        return `星期${days[value]}`;
      }
    },
    methods: {
      formatDate(year, month, day) {
        const y = year
        let m = month
        if (m < 10) m = `0${m}`
        let d = day
        if (d < 10) d = `0${d}`
        return `${y}-${m}-${d}`
      },
      /**
       * 初始化日期
       */
      initData(cur) {
        let date = '';
        if (cur) {
          date = new Date(cur);
        } else {
          date = new Date();
        }
        this.currentDay = date.getDate();         // 今日日期 几号
        this.currentYear = date.getFullYear();      // 当前年份
        this.currentMonth = date.getMonth() + 1    // 当前月份
        this.currentWeek = date.getDay(); // 1...6,0   // 星期几
        const str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay);// 今日日期 年-月-日
        this.days.length = 0
        for (let i = this.currentWeek; i >= 0; i -= 1) {
          const d = new Date(str);
          d.setDate(d.getDate() - i);
          this.days.push(d);
        }
        for (let i = 1; i <= 6 - this.currentWeek; i += 1) {
          const d = new Date(str);
          d.setDate(d.getDate() + i);
          this.days.push(d);
        }
      },
      /**
       * 上周
       */
      weekPre() {
        const d = this.days[1]
        d.setDate(d.getDate() - 7)
        this.initData(d)
      },

      /**
       * 下周
       */
      weekNext() {
        const d = this.days[1];
        d.setDate(d.getDate() + 7);
        this.initData(d)
      },

      /**
       * 选择日期
       * @param date
       */
      pick(date) {
        // alert(this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate()))
        this.initData(date)
      },

      /**
       * 今天
       */
      pickToday() {
        this.initData()
      },
      openPicker() {
        this.$refs['picker'].open()
      },
      handleChange(value) {
        //  console.log(value)
        this.initData(value)
      },
      onPanleft() {
        const d = this.days[1]
        d.setDate(d.getDate() - 7)
        this.initData(d)
      },
      onPanright() {

        const d = this.days[1];
        d.setDate(d.getDate() + 7);
        this.initData(d)
      }
    }
  }
</script>
<style lang="less">

  .date {
    background: #ffffff;
    padding: 14px 10px;
    color: #4A4A4A;
    .month {
      font-size: 13px;
      color: #8996B6;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      li {
        font-size: 12px;
        &:first-child, &:last-child {
          -webkit-box-flex: 0.5;
          -ms-flex: 0.5;
          flex: 0.5;
          color: #407DF6;
        }
        &:last-child {
          text-align: right;
        }
        span {
          vertical-align: middle;
        }
      }
    }

    .weekdays {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      font-size: 14px;
      margin-top: 16px;
      color: #9B9B9B;
      li {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: center;
      }
    }

    .days {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin-top: 10px;
      li {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        font-size: 14px;
        text-align: center;
        margin-top: 0.1rem;
        line-height: 0.44rem;
        .active {
          display: inline-block;
          width: 0.44rem;
          height: 0.44rem;
          color: #fff;
          border-radius: 4px;
          background-color: #407DF6;
        }

        .todayActive {
          color: red;
        }
        .other-month {
          color: #e4393c;
        }
      }
    }
  }

  .weekdays-wrap {
    -webkit-transition: -webkit-transform .15s ease-in-out;
    transition: -webkit-transform .15s ease-in-out;
    transition: transform .15s ease-in-out;
    transition: transform .15s ease-in-out, -webkit-transform .15s ease-in-out;
  }
</style>
