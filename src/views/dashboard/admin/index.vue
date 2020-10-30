<!--
 * @Author: suwanqing
 * @Date: 2020-09-30 16:31:21
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-10-28 14:46:17
 * @Description: file content
-->
<template>
  <div class="pos-rel">

    <div class="p-5-10 bold font-md blue_flag">常用功能</div>

    <el-row v-for="v in rows" :key="v" :gutter="20" class="mt-20">
      <el-col v-for="item in cardArr.slice((v - 1) * 4, 4 * v)" :key="item.title" :span="6">
        <cardList :title="item.title" :detail="item.detail" pic="" />
      </el-col>
    </el-row>

    <div class="p-5-10 bold font-md blue_flag mt-20">未开通功能</div>

    <el-row :gutter="20" class="mt-20">
      <el-col :span="6">
        <cardList title="--" detail="--" pic="" />
      </el-col>
    </el-row>

    <div class="p-5-10 bold font-md blue_flag mt-20">精选推荐</div>

    <el-row :gutter="20" class="mt-20">
      <el-col :span="6">
        <cardList title="彗星来的那一夜" detail="玫瑰玫瑰我爱你" pic="" />
      </el-col>
    </el-row>

  </div>
</template>

<script>
import cardList from './components/cardList'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: { cardList },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      cardArr: [
        {
          pic: '',
          title: '撒网',
          detail: '渔民日常工作：江上自拍'
        },
        {
          pic: '',
          title: '白头鞋老潮鞋店',
          detail: '我可以踩在你的脸上亲球鞋吗'
        },
        {
          pic: '',
          title: '刘传单',
          detail: '游泳健身了解一下？'
        },
        {
          pic: '',
          title: '捕鱼',
          detail: '360°彩虹'
        },
        {
          pic: '',
          title: '白rapper',
          detail: '你有这种渠道为什么不分享给我！'
        },
        {
          pic: '',
          title: '撒龙',
          detail: '寻找棋子，两锅女鹅'
        },
        {
          pic: '',
          title: '林够够',
          detail: '我的故事里没有你'
        },
        {
          pic: '',
          title: '白rap',
          detail: '我一下就推开了！这是另外的价钱'
        },
        {
          pic: '',
          title: '魏公主',
          detail: '我的美令人嫉妒让人羡慕遭人憎恶'
        },
        {
          pic: '',
          title: '国王',
          detail: '我不是够了，我是够够了'
        },
        {
          pic: '',
          title: '张二副',
          detail: '你们好不好不太重要'
        }
      ]
    }
  },
  computed: {
    rows() {
      return Math.floor(this.cardArr.length / 4) + 1
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>
