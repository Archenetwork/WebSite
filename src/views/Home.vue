<template>
  <div class="home">
    <div class="home-background">
      <div class="circle-groups">
        <div class="circle-outer">
          <div class="circle-inner">
            <div class="logo"></div>
            <span class="subtitle">{{$t('home.title01')}}</span>
            <span class="title">{{$t('home.title02')}}</span>
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
          <div class="content-title">{{$t('page1.title')}}</div>
          <div class="content-text">
            {{$t('page1.content01')}}
          </div>
          <div class="content-text">
            {{$t('page1.content02')}}
          </div>
          <div class="content-text">
            {{$t('page1.content03')}}
          </div>
          <div class="content-text">
            {{$t('page1.content04')}}
          </div>
        </div>
      </div>
      <div class="swiper-card">
         <swiper :options="swiperOption">
          <swiper-slide>
            <Card card-color="#1A1A84">
              <template #card-title>
                {{$t('page1.card01Title')}}
              </template>
              <template #card-content>
                <ul>
                  <li>{{$t('page1.card01Content01')}}</li>
                  <li>{{$t('page1.card01Content02')}}</li>
                  <li>{{$t('page1.card01Content03')}}</li>
                  <li>{{$t('page1.card01Content04')}}</li>
                  <li>{{$t('page1.card01Content05')}}</li>
                </ul>
              </template>
            </Card>
          </swiper-slide>
          <swiper-slide>
            <Card card-color="#621A84">
              <template #card-title>
                {{$t('page1.card02Title')}}
              </template>
              <template #card-content>
                <ul>
                  <li>{{$t('page1.card02Content')}}</li>
                </ul>
              </template>
            </Card>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <div class="page2">
      <!-- <Header /> -->
      <div class="page2-container">
        <div class="content">
          <div class="content-title">{{$t('page2.title')}}</div>
          <div class="content-text">
            {{$t('page2.content01')}}
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
            <div class="title">{{$t('page2.contractCreator')}}</div>
            <div class="content">
              {{$t('page2.contractCreatorContent')}}
            </div>
          </div>
          <div class="excute">
            <div class="title">{{$t('page2.contractExcutor')}}</div>
            <div class="content">
              {{$t('page2.contractExcutorContent')}}
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
            {{$t('page3.roadmapContent01')}}
          </template>
        </TimeLine>
        <TimeLine :style="{top: '460px', left: '510px'}">
          <template #title>
            Logos
          </template>
          <template #content>
            {{$t('page3.roadmapContent02')}}
          </template>
        </TimeLine>
        <TimeLine :style="{top: '220px', left: '810px'}">
          <template #title>
            Einai
          </template>
          <template #content>
            {{$t('page3.roadmapContent03')}}
          </template>
        </TimeLine>
        <TimeLine :style="{top: '330px', left: '1110px'}">
          <template #title>
            Atomon
          </template>
          <template #content>
            {{$t('page3.roadmapContent04')}}
          </template>
        </TimeLine>
      </div>
    </div>
    <div class="page4">
      <div class="text">{{$t('page5.title')}}</div>
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
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

export default {
  name: "Home",
  components: {
    TimeLine,
    Header,
    Button,
    Card,
    Swiper,
    SwiperSlide
  },
   directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        // direction: 'vertical',
        // mousewheel: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slidesPerView: 'auto',
        spaceBetween: 30,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // }
      }
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
      // display: flex;
      margin-top: 60px;
      margin-left: 160px;
      .swiper-slide {
        width: 65%;
      }
      .swiper-slide:nth-child(2n) {
        width: 80%;
      }
      .swiper-button-prev, .swiper-button-next {
        color: #fff;
      }
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
