<template>
  <div class="home">
    <div class="home-background">
      <div class="circle-groups">
        <div class="circle-outer">
          <div class="circle-inner">
            <div class="logo"></div>
            <span class="subtitle">下一代去中心化金融协议构建方式</span>
            <span class="title">让我们在Arche上构建【期权】</span>
            <Button />
          </div>
        </div>
      </div>
    </div>
    <Header />
    <div class="page1">
      <div class="page1-container">
        <div class="icon"></div>
        <div class="content">
          <div class="content-title">Arche是什么</div>
          <div class="content-text">
            Arche是一个合约工厂和一套智能合约协议标准。
          </div>
          <div class="content-text">
            它实现了交易中最为简单的一套逻辑，既用A交换B。
          </div>
          <div class="content-text">
            但不简单的是，我们为每一笔交易都生成了一个智能合约来约束它且给交易双方生成了一套可以证明自己会履行交易的ERC20凭证。
          </div>
          <div class="content-text">
            因而，在这套协议上，我们可以像在现实生活中签合同一样，来约定双方的交易在何时发生、用什么标的物交易、保证金如何执行、惩罚如何执行等一些列操作。并且通过生成的ERC20凭证，做进一步的衍生品交易。
          </div>
        </div>
      </div>
      <div class="swiper-card">
        <Card card-color="#1A1A84">
          <template #card-title>
            金融衍生品的基础设施
          </template>
          <template #card-content>
            <ul>
              <li>将交易时间延后，你可以得到一个远期交换的合约产品。</li>
              <li>将得到的凭证二次流转，你就可以得到一个期权类产品。</li>
              <li>引入预言机，你可以在凭证基础上做出一个有爆仓效果的杠杆类产品。</li>
            </ul>
          </template>
        </Card>
        <Card card-color="#621A84" :style="{'margin-left': '20px'}"/>
      </div>
    </div>
    <div class="page2">
      <!-- <Header /> -->
      <div class="page2-container">
        <div class="content">
          <div class="content-title">Arche如何工作</div>
          <div class="content-text">
            Arche有多个角色，其中最主要的就是合约创建人、合约执行人与合约。
          </div>
          <div class="content-text">
            通过参数化的方式，你可以生成任何一种想要的金融衍生品合约。并且这些智能合约全部都是去中心化自主运行和生成的，无需担心被篡改等问题。
          </div>
        </div>

        <div class="ellipse-groups">
          <div class="ellipse-outer">
             <div class="ellipse-middle">
                <div class="ellipse-inner">
                  <div class="diagram"></div>
                </div>
             </div>
          </div>
        </div>
        <div class="info">
          <div class="create">
            <div class="title">合约创建人</div>
            <div class="content">
              仅需填写参数就可以定制化你所想要的任何基于交换逻辑的智能合约。并且可以设置你所想要的惩罚措施或者其他措施。
            </div>
          </div>
          <div class="excute">
            <div class="title">合约执行人</div>
            <div class="content">
              无需复杂操作，就可以依照合约来创建和交易衍生品产品，并进行交易。只要按时履约，就不会被合约惩罚。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page3">
      <div class="svgLine">
        <TimeLine :style="{top: '540px', left: '110px'}">
          <template #title>
            Hydro
          </template>
          <template #content>
            “Arche 协议”同时首发HECO、BSC、ETH；该阶段基于“Arche 协议”推出二层产品--aDEX，ETH的aDEX将部署在zk Sync。
          </template>
        </TimeLine>
        <TimeLine :style="{top: '460px', left: '510px'}">
          <template #title>
            Logos
          </template>
          <template #content>
            上线标准化池子衍生品，基于远期协议的aInsurance和aOpiton，推出空投和挖矿活动。
          </template>
        </TimeLine>
        <TimeLine :style="{top: '220px', left: '810px'}">
          <template #title>
            Einai
          </template>
          <template #content>
            上线更多品类的金融衍生品，支持Polkadot网络
          </template>
        </TimeLine>
        <TimeLine :style="{top: '330px', left: '1110px'}">
          <template #title>
            Atomon
          </template>
          <template #content>
            实物资产上链，定制化链上交割协议和衍生品（与已经完成宝玉石资产鉴定、溯源、上链的JALA Fintech智能仓达成初步合作意向）
          </template>
        </TimeLine>
      </div>
    </div>
    <div class="page4">
      <div class="text">快来加入下一代金融基础协议的革命吧！</div>
      <div class="text-gradient">Try it now！</div>
      <div class="circle-groups">
        <div class="circle-outer">
          <div class="circle-inner"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TimeLine from "@/components/TimeLine.vue";
import Header from "@/components/Header.vue";
import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";
export default {
  name: "Home",
  components: {
    TimeLine,
    Header,
    Button,
    Card
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

<style lang="scss" scoped>
.home {
  .home-background {
    // position: absolute;
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
          background: $circle-color;
          box-shadow: 0px 0px 100px rgba(186, 38, 255, 0.1), 0px 4px 200px rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          .logo {
            margin-top: 124px;
            background-image: url('../assets/imgs/home-logo.svg');
            background-size: cover;
            width: $logo-width / 2;
            height: $logo-height / 2;
          }
          span.subtitle {
            margin-top: 47px;
            font-size: 24px;
            color: #ffffff;
          }
          span.title {
            margin-bottom: 37px;
            font-size: 36px;
            font-weight: bold;
            color: #ffffff;
          }
        }
      }
    }
  }
  .page1 {
    width: 100%;
    height: 100vh;
    background:#05050F;
    .page1-container {
      margin-top: 60px;
      display: flex;
      .icon {
        margin-left: 160px;
        background-image: url('../assets/imgs/exchange.svg');
        width: 133px;
        height: 128px;
        background-size: cover;
      }
      .content {
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: left;
        margin-left: 40px;
        .content-title {
          font-weight: bold;
          font-size: 30px;
          color: #ffffff;
        }
        .content-text {
          width: 819px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }
    .swiper-card {
      display: flex;
      margin-top: 60px;
      margin-left: 160px;
    }
  }
  .page2 {
    width: 100%;
    height: 100vh;
    background:#05050F;
    .page2-container {
      // margin-top: 60px;
      margin-left: 160px;
      .content {
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: left;
        margin-left: 40px;
        .content-title {
          font-weight: bold;
          font-size: 30px;
          color: #ffffff;
        }
        .content-text {
          width: 819px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }
      }
      .ellipse-groups {
        margin-top: 100px;
        .ellipse-outer {
          width: $ellipse-outer;
          height: 338px;
          background: #000000;
          border: 2px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0px 4px 50px rgba(44, 72, 223, 0.25);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          .ellipse-middle {
            width: $ellipse-middle;
            height: 286px;
            background: #121111;
            border: 2px solid rgba(255, 255, 255, 0.15);
            box-shadow: 0px 4px 50px rgba(83, 17, 224, 0.25);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            .ellipse-inner {
              width: $ellipse-inner;
              height: 242px;
              background: #000000;
              border: 2px solid rgba(255, 255, 255, 0.15);
              box-shadow: 0px 4px 50px rgba(22, 2, 255, 0.25);
              border-radius: 50%;
              .diagram {
                background-image: url('../assets/imgs/FlowChart.svg');
                background-size: cover;
                width: $diagram-width / 1.2;
                height: $diagram-height / 1.2;
                margin-top: -80px;
              }
            }
          }
        }
      }
      .info {
        margin-top: 40px;
        height: 80px;
        display: flex;
        text-align: left;
        .create, .excute {
          display: flex;
          flex-direction: column;
          .title {
            font-weight: bold;
            font-size: 16px;
            color: #ffffff;
          }
          .content {
            width: 387px;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
    }
  }
  .page3 {
    width: 100%;
    height: 100vh;
    background:#05050F;
    .svgLine {
      background-image: url('../assets/imgs/DecorativeLine.svg');
      width: 100%;
      height: 100%;
      position: relative;
    }
  }
  .page4 {
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background:#05050F;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .text {
      margin-top: 240px;
      font-size: 36px;
      color: #ffffff;
    }
    .text-gradient {
      font-weight: bold;
      font-size: 60px;
      background: linear-gradient(to right, #790FE5 0%, #EB4B87 100%);
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color:transparent;
      position: relative;
      &::before {
        position: absolute;
        bottom: -4px;
        content: '';
        width: 310px;
        height: 4px;
        background: linear-gradient(90deg, #790FE5 0%, #EB4B87 129.05%);
        box-shadow: inset 0px 10px 6px rgba(0, 0, 0, 0.25);
      }
    }
    .circle-groups {
      margin-bottom: -500px;
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
          background: $circle-color;
          box-shadow: 0px 0px 100px rgba(186, 38, 255, 0.1), 0px 4px 200px rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }
      }
    }
  }
}
</style>
