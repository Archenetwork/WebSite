<template>
  <div class="home">
    <div class="home-background">
      <div class="circle-groups">
        <div class="circle-outer">
          <div class="circle-inner">
            <div class="logo"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TimeLine from "@/components/TimeLine.vue";

export default {
  name: "Home",
  components: {
    TimeLine
  },
  data() {
    return {
      dataTimeline: [
        {
          date: "2020--Q4",
          content:
            "为BaseFi上的基金产品提供质押借贷、DEX、保险等衍生服务，未来与波卡生态项目紧密合作"
        },
        {
          date: "2021--Q1",
          content:
            "在ETH网络部署BTC、ETH及ERC20的波卡生态代币资产合成合约，发起跨链指数基金、波卡生态指数基金、DeFi指数基金三个基金，与社区一起构建"
        },
        {
          date: "2021--Q2",
          content: "部署BaseFi NFT Protocol到Kusama网络，并且发布合约提供测试"
        },
        {
          date: "2021--Q3",
          content: "在Kusama网络构建DEX，用波卡上的跨链映射资产完成测试"
        }
      ]
    };
  },
  computed: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    jump(url) {
      window.location.href = url;
    }
  }
};
</script>

<style lang="scss">
.home {
  .home-background {
    position: absolute;
    // width: 1920px;
    // height: 1024px;
    // left: calc(50% - 1920px/2);
    // top: calc(50% - 1024px/2);
    width: 100%;
    height: 100vh;
    background: radial-gradient(53.22% 53.22% at 51.51% 47.95%, #14085C 0%, #06030D 82.06%);
    display: flex;
    justify-content: center;
    align-items: center;
    .circle-groups {
      display: flex;
      justify-content: center;
      align-items: center;
      .circle-outer {
        width: 704px;
        height: 604px;
        border: 2px solid rgba(255, 255, 255, 0.1);
        box-sizing: border-box;
        filter: drop-shadow(0px 4px 200px rgba(255, 255, 255, 0.15));
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .circle-inner {
          width: 604px;
          height: 604px;
          background: $test-color;
          box-shadow: 0px 0px 100px rgba(186, 38, 255, 0.1), 0px 4px 200px rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          .logo {
            background-image: url('../assets/imgs/home-logo.svg');
            background-size: cover;
            width: $logo-width / 2;
            height: $logo-height / 2;
          }
        }
      }
    }
  }
}
</style>
