<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="header">
      <div class="container">
        <div class="logo"></div>
        <div class="title">
          BaseFi 透明的基础资产合成工具
        </div>
        <div class="subtitle">
          快速生成基于NFT的指数基金产品，支持Polkadot上的映射资产和原生资产
        </div>
        <div class="button">
          <p>基金风控系统</p>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="description">
        <div class="item">
          <div class="item-icon01"></div>
          <div class="item-content">
            基于波卡的映射资产BTC、ETH、EOS、ETC以及原生资产DOT、KSM等合成资产，构建您自己的指数产品。
          </div>
        </div>
        <div class="item">
          <div class="item-icon02"></div>
          <div class="item-content">
            跨链资产协作合成NFT与拆分，让指数产品份额化，人人都能成为基金经理。
          </div>
        </div>
        <div class="item">
          <div class="item-icon03"></div>
          <div class="item-content">
            用户拖拽式生成跨链DeFi产品，规避链上复杂操作。
          </div>
        </div>
      </div>
      <div class="advantage">
        <div class="title">
          Advantage
        </div>
        <div class="subtitle">
          产品优势
        </div>
        <div class="container">
          <div class="left">
            <div class="space">
              <!-- <div class="chainx">
                <span></span>
              </div> -->
              <!-- <div class="bifrost">
              </div> -->
            </div>
            <div class="outEllipse">
              <div class="div">
                <div class="chainx" @click="jump('https://chainx.org/')">
                  <span></span>
                </div>
                <div
                  class="bifrost"
                  @click="jump('https://bifrost.finance/')"
                ></div>
                <div
                  class="polkabtc"
                  @click="jump('https://polkabtc.io/')"
                ></div>
                <div
                  class="plasm"
                  @click="jump('https://www.plasmnet.io/')"
                ></div>
                <div class="akrop" @click="jump('https://akropolis.io/')"></div>
              </div>
              <div class="middleEllipse">
                <div class="innerEllipse">
                  <div class="logo"></div>
                </div>
              </div>
            </div>
            <div class="ellipse-text">
              <p>BaseFi基于桥接跨链资产的枢纽Polkadot快速实现资产合成</p>
            </div>
          </div>
          <div class="right">
            <div class="list">
              <div class="listStyle">
                <p>
                  BaseFi NFT Protocol,
                  最顶层的统一通用NFT合成协议包括资产、游戏道具、链上数据
                </p>
              </div>
              <div class="listStyle">
                <p>
                  基于BaseFi多人协作生成去中心化指数基金产品，风险和收益多元化，基于链上风控体系，向每个人提供同等优质的金融服务
                </p>
              </div>
              <div class="listStyle">
                <p>
                  为BaseFi上的基金产品提供质押借贷、DEX、保险等衍生服务，未来与波卡生态项目紧密合作
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="roadmap">
        <div class="title">
          Roadmap
        </div>
        <div class="suntitle">
          发展历程
        </div>
        <div class="mobile" v-if="isMobile">
          <TimeLine :item-timeline="dataTimeline"></TimeLine>
        </div>
        <div class="pc" v-else>
          <div class="bg"></div>
        </div>
      </div>
      <div class="copyright">
        <div class="social">
          <div class="github" @click = "jump('https://github.com/BaseFI/')"></div>
          <div class="twitter" @click = "jump('https://twitter.com/basefi3')"></div>
          <!-- <div class="telegram"></div> -->
          <div class="medium"></div>
        </div>
        <div class="text">
          Copyright © 2020,BaseFi
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

<style lang="less">
.home {
  .header {
    height: 550px;
    background-size: 100%;
    background-image: url("../assets/banner-bg.jpg");
    display: flex;
    flex-direction: column;
    justify-content: center;

    .container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 300px;

      .logo {
        height: 79.3px;
        width: 185.3px;
        background-size: 100%;
        background-image: url("../assets/logo01.svg");
      }

      .title {
        font-size: 36px;
        color: #fff;
        font-weight: bold;
        overflow: hidden;
        /* Ensures the content is not revealed until the animation */
        border-right: 0.15em solid #ff8d6b;
        /* The typwriter cursor */
        white-space: nowrap;
        /* Keeps the content on a single line */
        margin: 0 auto;
        /* Gives that scrolling effect as the typing happens */
        letter-spacing: 0.1em;
        /* Adjust as needed */
        animation: typing 3.5s steps(40, end),
          blink-caret 0.75s step-end infinite;

        @media only screen and (min-width: 0px) and (max-width: 639px) {
          font-size: 20px;
        }
      }

      /* The typing effect */
      @keyframes typing {
        from {
          width: 0;
        }

        to {
          width: 100%;
        }
      }

      /* The typewriter cursor effect */
      @keyframes blink-caret {
        from,
        to {
          border-color: transparent;
        }

        50% {
          border-color: #ff8d6b;
        }
      }

      .subtitle {
        font-size: 18px;
        font-weight: 400;
        color: #ffffff;

        @media only screen and (min-width: 0px) and (max-width: 639px) {
          width: 273px;
          font-size: 14px;
        }
      }

      .button {
        width: 141px;
        height: 39px;
        background: #ff8d6b;
        border-radius: 20px;

        @media only screen and (min-width: 0px) and (max-width: 639px) {
          width: 130px;
          height: 34px;
        }

        p {
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          line-height: 39px;

          @media only screen and (min-width: 0px) and (max-width: 639px) {
            font-size: 14px;
          }
        }
      }
    }
  }

  .body {
    // background-size: 100%;
    background-image: url("../assets/bg-repeat.png");
    background-repeat: repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .description {
      width: 60%;
      height: 400px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      @media only screen and (min-width: 0px) and (max-width: 639px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 600px;
      }

      .item {
        // height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .item-icon01 {
          height: 100px;
          width: 100px;
          background-size: 100%;
          background-image: url("../assets/banner-img01@2x.png");
        }

        .item-icon02 {
          height: 100px;
          width: 100px;
          background-size: 100%;
          background-image: url("../assets/banner-img02@2x.png");
        }

        .item-icon03 {
          height: 100px;
          width: 100px;
          background-size: 100%;
          background-image: url("../assets/banner-img03@2x.png");
        }

        .item-content {
          font-size: 14px;
          font-weight: 400;
          color: #333333;
        }
      }
    }

    .advantage {
      .title {
        font-size: 48px;
        font-weight: bold;
        color: #000000;
      }

      .subtitle {
        font-size: 18px;
        font-weight: 400;
        color: #333333;
      }

      .container {
        display: flex;
        justify-content: center;
        align-items: center;

        @media only screen and (min-width: 0px) and (max-width: 639px) {
          display: flex;
          flex-direction: column;
          margin-top: 84px;
        }

        .left {
          display: flex;
          flex-direction: column;
          align-items: center;

          .space {
            position: absolute;

            .chainx {
              top: -42px;
              width: 84px;
              height: 84px;
              border-radius: 50%;
              background: #ffffff;
              box-shadow: 0px 0px 10px rgba(96, 78, 255, 0.1);
              position: relative;

              span {
                content: "";
                width: 27px;
                height: 27px;
                position: absolute;
                background-image: url("../assets/ad-fil.png");
                background-size: 100%;
                top: 70%;
                left: 85%;
              }

              &::before {
                content: "";
                width: 64px;
                height: 14px;
                position: absolute;
                background-image: url("../assets/av-chainx.png");
                background-size: 100%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }

              &::after {
                content: "";
                width: 27px;
                height: 27px;
                position: absolute;
                background-image: url("../assets/ad-bth.png");
                background-size: 100%;
                top: 70%;
                left: 70%;
                // transform: translate(-50%, -50%);
              }
            }

            .bifrost {
              // animation: spin infinite 6s linear;
              left: 160px;
              width: 64px;
              height: 64px;
              border-radius: 50%;
              background: #ffffff;
              box-shadow: 0px 0px 10px rgba(96, 78, 255, 0.1);
              position: relative;

              &::before {
                content: "";
                width: 43px;
                height: 15px;
                position: absolute;
                background-image: url("../assets/ad-bifrost.png");
                background-size: 100%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }

              &::after {
                content: "";
                width: 24px;
                height: 24px;
                position: absolute;
                background-image: url("../assets/ad-eos.png");
                background-size: 100%;
                top: 70%;
                left: 70%;
                // transform: translate(-50%, -50%);
              }
            }
          }

          .ellipse-text {
            text-align: center;

            p {
              font-size: 16px;
              font-weight: 400;
              color: #333333;
              margin-top: 24px;

              @media only screen and (min-width: 0px) and (max-width: 639px) {
                width: 237px;
                font-size: 12px;
              }
            }
          }

          .outEllipse {
            animation: spin infinite 6s linear;
            width: 604px;
            height: 604px;
            background: conic-gradient(
              from 36.48deg at 50% 50%,
              rgba(96, 78, 255, 0.8) 0deg,
              rgba(96, 78, 255, 0) 360deg
            );
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            // position: relative;

            @media only screen and (min-width: 0px) and (max-width: 639px) {
              width: 320px;
              height: 320px;
            }

            div {
              animation: spin infinite 6s linear reverse;
              display: grid;
              grid-template-columns: 30px 124px 30px 124px 168px 30px 154px 60px 72px;
              grid-template-rows: 138px 30px 94px 30px 98px 40px 76px 78px 76px;
              @media only screen and (min-width: 0px) and (max-width: 639px) {
                grid-template-columns: 15px 62px 15px 35px 84px 15px 47px 30px 36px;
                grid-template-rows: 69px 15px 47px 15px 49px 20px 38px 39px 38px;
              }
              .chainx {
                animation: none;
                top: -42px;
                grid-column: 5 e("/") 6;
                grid-row: 1 e("/") 2;
                // animation: spin infinite 6s linear;
                width: 84px;
                height: 84px;
                border-radius: 50%;
                background: #ffffff;
                box-shadow: 0px 0px 10px rgba(96, 78, 255, 0.1);
                position: relative;
                @media only screen and (min-width: 640px) {
                  top: -24px;
                  left: 44px;
                }
                span {
                  content: "";
                  width: 27px;
                  height: 27px;
                  position: absolute;
                  background-image: url("../assets/ad-fil.png");
                  background-size: 100%;
                  top: 70%;
                  left: 85%;
                }

                &::before {
                  content: "";
                  width: 64px;
                  height: 14px;
                  position: absolute;
                  background-image: url("../assets/av-chainx.png");
                  background-size: 100%;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }

                &::after {
                  content: "";
                  width: 27px;
                  height: 27px;
                  position: absolute;
                  background-image: url("../assets/ad-bth.png");
                  background-size: 100%;
                  top: 70%;
                  left: 70%;
                  // transform: translate(-50%, -50%);
                }
              }

              .bifrost {
                animation: none;
                grid-column: 8 e("/") 10;
                grid-row: 4 e("/") 6;
                // animation: spin infinite 6s linear;
                width: 64px;
                height: 64px;
                border-radius: 50%;
                background: #ffffff;
                box-shadow: 0px 0px 10px rgba(96, 78, 255, 0.1);
                position: relative;

                &::before {
                  content: "";
                  width: 43px;
                  height: 15px;
                  position: absolute;
                  background-image: url("../assets/ad-bifrost.png");
                  background-size: 100%;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }

                &::after {
                  content: "";
                  width: 24px;
                  height: 24px;
                  position: absolute;
                  background-image: url("../assets/ad-eos.png");
                  background-size: 100%;
                  top: 70%;
                  left: 70%;
                  // transform: translate(-50%, -50%);
                }
              }

              .polkabtc {
                animation: none;
                top: -38px;
                grid-column: 1 e("/") 3;
                grid-row: 2 e("/") 5;
                // animation: spin infinite 6s linear;
                width: 77px;
                height: 77px;
                border-radius: 50%;
                background: #ffffff;
                box-shadow: 0px 0px 10px rgba(96, 78, 255, 0.1);
                position: relative;
                @media only screen and (min-width: 640px) {
                  left: 124px;
                }

                &::before {
                  content: "";
                  width: 45px;
                  height: 26px;
                  position: absolute;
                  background-image: url(../assets/ad-PolkaBTC.png);
                  background-size: 100%;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }

                &::after {
                  content: "";
                  width: 27px;
                  height: 27px;
                  position: absolute;
                  background-image: url("../assets/ad-bth.png");
                  background-size: 100%;
                  top: 70%;
                  left: 70%;
                  // transform: translate(-50%, -50%);
                }
              }

              .plasm {
                animation: none;
                grid-column: 1 e("/") 3;
                grid-row: 7 e("/") 9;
                // animation: spin infinite 6s linear;
                width: 77px;
                height: 77px;
                border-radius: 50%;
                background: #ffffff;
                box-shadow: 0px 0px 10px rgba(96, 78, 255, 0.1);
                position: relative;
                @media only screen and (min-width: 640px) {
                  left: 84px;
                }
                &::before {
                  content: "";
                  width: 66px;
                  height: 17px;
                  position: absolute;
                  background-image: url(../assets/ad-plasm.png);
                  background-size: 100%;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }

                &::after {
                  content: "";
                  width: 27px;
                  height: 27px;
                  position: absolute;
                  background-image: url("../assets/ad-eth.png");
                  background-size: 100%;
                  top: 70%;
                  left: 70%;
                  // transform: translate(-50%, -50%);
                }
              }

              .akrop {
                animation: none;
                grid-column: 7 e("/") 9;
                grid-row: 8 e("/") 10;
                // animation: spin infinite 6s linear;
                width: 77px;
                height: 77px;
                border-radius: 50%;
                background: #ffffff;
                box-shadow: 0px 0px 10px rgba(96, 78, 255, 0.1);
                position: relative;

                &::before {
                  content: "";
                  width: 66px;
                  height: 19px;
                  position: absolute;
                  background-image: url(../assets/ad-akropolis.png);
                  background-size: 100%;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }

                &::after {
                  content: "";
                  width: 28px;
                  height: 28px;
                  position: absolute;
                  background-image: url("../assets/ad-dai.png");
                  background-size: 100%;
                  top: 70%;
                  left: 70%;
                  // transform: translate(-50%, -50%);
                }
              }
            }

            .middleEllipse {
              position: absolute;
              animation: spin infinite 6s linear;
              // top: 50%;
              // left: 50%;
              // transform: translate(-50%, -50%);
              width: 443px;
              height: 443px;
              background: conic-gradient(
                from 16.05deg at 50% 50%,
                #ff8d6b 0deg,
                rgba(255, 141, 107, 0) 360deg
              );
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;

              @media only screen and (min-width: 0px) and (max-width: 639px) {
                width: 254px;
                height: 254px;
              }

              .innerEllipse {
                animation: spin infinite 6s linear reverse;
                transition: unset;
                width: 241px;
                height: 241px;
                background: #604eff;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;

                @media only screen and (min-width: 0px) and (max-width: 639px) {
                  width: 126px;
                  height: 126px;
                }

                .logo {
                  height: 39.65px;
                  width: 92.65px;
                  background-size: 100%;
                  background-image: url("../assets/logo01.svg");
                }
              }
            }
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          @keyframes nudge {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(-360deg);
            }
          }
        }

        .right {
          margin-left: 40px;

          @media only screen and (min-width: 0px) and (max-width: 639px) {
            margin-left: 0;
            margin-top: 24px;
          }

          .list {
            height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .listStyle {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 457px;
              height: 88px;
              background: #ffffff;
              box-shadow: 0px 0px 15px 0px rgba(128, 113, 255, 0.4);
              border-radius: 10px;

              @media only screen and (min-width: 0px) and (max-width: 639px) {
                width: 318px;
                height: 62px;
                padding: 10px 19px 4px 19px;
              }

              p {
                font-size: 16px;
                font-weight: 400;
                color: #333333;

                @media only screen and (min-width: 0px) and (max-width: 639px) {
                  font-size: 12px;
                }
              }
            }
          }
        }
      }
    }

    .roadmap {
      margin-top: 80px;
      .title {
        font-size: 48px;
        font-weight: bold;
        color: #000000;
      }

      .subtitle {
        font-size: 18px;
        font-weight: 400;
        color: #333333;
      }
      .mobile {
        margin-top: 40px;
      }
      .pc {
        .bg {
          margin-top: 100px;
          width: 100vw;
          height: 70vh;
          background-size: 100%;
          background-image: url("../assets/bg01.png");
        }
      }
    }

    .copyright {
      margin-top: 80px;
      .social {
        display: flex;
        justify-content: space-around;

        .github {

        }
        .twitter {
          height: 25px;
          width: 30px;
          background-size: 100%;
          background-image: url("../assets/bottom-icon-twitter.svg");
        }

        .github {
          height: 25px;
          width: 25px;
          background-size: 100%;
          background-image: url("../assets/bottom-icon-github.svg");
        }
        // .telegram {
        //   height: 25px;
        //   width: 30px;
        //   background-size: 100%;
        //   background-image: url("../assets/bottom-icon-telegram.svg");
        // }

        .medium {
          height: 25px;
          width: 30px;
          background-size: 100%;
          background-image: url("../assets/bottom-icon-medium.svg");
        }
      }

      .text {
        font-size: 14px;
        font-weight: 400;
        color: #000000;
        opacity: 0.6;
      }
    }
  }
}
</style>
