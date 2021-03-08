<template>
  <div class="home">
    <Header />
    <swiper class="swiperHome" :options="swiperOptionTest">
      <swiper-slide>
        <div class="home-background">
          <dynamic-background />
          <div class="circle-groups">
            <div class="circle-outer">
              <div class="circle-inner">
                <div class="logo"></div>
                <span class="subtitle">{{$t('home.title01')}}</span>
                <vue-typed-js 
                  v-if="isEN"
                  :strings="[$t('home.typedString01'), $t('home.typedString02'),$t('home.typedString03'),$t('home.typedString04'),$t('home.typedString05')]"
                  :typeSpeed="150"
                >
                  <span class="title">{{$t('home.title02')}} <span class="typing"></span><span class="title">on Arche</span></span>
                </vue-typed-js>
                <vue-typed-js 
                  v-else
                  :strings="['远期','期权','期货','保险','一切']"
                  :typeSpeed="150"
                >
                  <span class="title">{{$t('home.title02')}}<span class="typing"></span></span>
                </vue-typed-js>
                <Button />
              </div>
            </div>
          </div>
          <!-- FIXME: -->
          <icon-group :style="{'position': 'absolute', 'bottom': '100px', 'right': '10px'}"/>
          <div class="mouse">
            <div class="point">
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page1">
          <!-- <Header /> -->
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
              <!-- <div class="content-text">
                {{$t('page1.content04')}}
              </div> -->
            </div>
          </div>
          <div class="swiper-card">
            <swiper :options="swiperOption">
              <swiper-slide>
                <Card card-color="#1A1A84">
                  <template #card-title>
                    {{$t('page1.card01Title')}}
                  </template>
                  <template>
                    <span>{{$t('page1.card01Content00')}}</span>
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
                    <span>{{$t('page1.card02Content')}}</span>
                  </template>
                </Card>
              </swiper-slide>
              <!-- <div class="swiper-pagination" slot="pagination"></div> -->
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </div>
          <Button  :style="{'position': 'absolute', 'bottom': '140px', 'right': '40px'}"/>
        </div>
      </swiper-slide>
      <swiper-slide>
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
                      <div class="diagram_EN" v-if="isEN"></div>
                      <div class="diagram" v-else></div>
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
          <Button  :style="{'position': 'absolute', 'bottom': '140px', 'right': '40px'}"/>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page3">
          <!-- <Header /> -->
          <div class="content">
            <div class="content-title">{{$t('page3.title')}}</div>
            <!-- <div class="content-text">
              {{$t('page2.content01')}}
            </div> -->
          </div>
          <div class="svgLine" v-if="isEN">
            <TimeLine class="item01">
              <template #title>
                Hydro
              </template>
              <template #content>
                {{$t('page3.roadmapContent01')}}
              </template>
            </TimeLine>
            <TimeLine class="item02">
              <template #title>
                Logos
              </template>
              <template #content>
                {{$t('page3.roadmapContent02')}}
              </template>
            </TimeLine>
            <TimeLine class="item03">
              <template #title>
                Einai
              </template>
              <template #content>
                {{$t('page3.roadmapContent03')}}
              </template>
            </TimeLine>
            <TimeLine class="item04">
              <template #title>
                Atomon
              </template>
              <template #content>
                {{$t('page3.roadmapContent04')}}
              </template>
            </TimeLine>
          </div>
          <div class="svgLine" v-else>
            <TimeLine class="item001">
              <template #title>
                Hydro
              </template>
              <template #content>
                {{$t('page3.roadmapContent01')}}
              </template>
            </TimeLine>
            <TimeLine class="item002">
              <template #title>
                Logos
              </template>
              <template #content>
                {{$t('page3.roadmapContent02')}}
              </template>
            </TimeLine>
            <TimeLine class="item003">
              <template #title>
                Einai
              </template>
              <template #content>
                {{$t('page3.roadmapContent03')}}
              </template>
            </TimeLine>
            <TimeLine class="item004">
              <template #title>
                Atomon
              </template>
              <template #content>
                {{$t('page3.roadmapContent04')}}
              </template>
            </TimeLine>
          </div>
          <Button  :style="{'position': 'absolute', 'bottom': '140px', 'right': '40px'}"/>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page4">
          <!-- <Header /> -->
          <!-- <dynamic-background /> -->
          <div class="text">{{$t('page5.title')}}</div>
          <div class="text-gradient" @click="jump('https://app.arche.network/')">Try it now！</div>
          <div class="circle-groups">
            <div class="circle-outer">
              <div class="circle-inner"></div>
            </div>
          </div>
          <icon-group :style="{'position': 'absolute', 'bottom': '100px', 'right': '10px'}"/>
          <div class="copyright">
            <span>©2021 Arche Group. All rights reserved.</span>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import TimeLine from "@/components/TimeLine.vue";
import Header from "@/components/Header.vue";
import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";
import DynamicBackground from '@/components/DynamicBackground';
import IconGroup from "@/components/IconGroup.vue";
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'
import 'swiper/css/swiper.css'
export default {
  name: "Home",
  components: {
    TimeLine,
    Header,
    Button,
    Card,
    Swiper,
    SwiperSlide,
    DynamicBackground,
    IconGroup
  },
  directives: {
    swiper: directive
  },
  data() {
    const VM = this
    return {
      allowNext: true,
      swiperOptionHome: {
        observer: true,
        mousewheelControl: false,
        slidesPerView: 1,
        freeMode: false,
        freeModeSticky: true,
        direction: 'vertical',
        hashNavigation: {
          watchState: true,
          replaceState: true,
        },
        on: {
          transitionStart() {
            // Update if start 
            VM.allowNext = false
          },
          transitionEnd() {
            // Update when end
            VM.allowNext = true
          },
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      swiperOptionTest: {
        direction: 'vertical',
        slidesPerView: 1,
        keyboard: {
          enabled: true,
        },
        // spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
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
    },
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    GetScrollTop() {
      console.log(window.scrollY)
    },
    isEN() {
      if(!localStorage.getItem('languageName')) {
        return true
      }
      else {
        return localStorage.getItem('languageName') == 'EN';
      }
    }
  },
  // mounted() {
  //   //Bind scroll and content
  //     this.content = document.querySelector('body');
  //     this.content.addEventListener("wheel" , this.watchScrollWheel )
  // },
  // destroyed() {
  //     //Remove when destroyed, to prevent memory leaks
  //     this.content.removeEventListener("wheel" , this.watchScrollWheel )
  // },
  // mounted() {
  //   this.isEN();
  // },
  // watch: {
  //   '$i18n.locale': 'isRelaod'
  // },
  methods: {
    jump(url) {
      window.open(url, '_blank');
    },
    watchScrollWheel(e){
      //Check if we can scroll to new slide
      if(this.allowNext){
        e.deltaY < 0 ? this.swiper.slideNext() : this.swiper.slidePrev();
      }
    },
    isReload() {
      window.location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  .swiperHome {
    height: 100vh;
    .swiper-pagination {
      width: 37px;
      height: 166px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    ::v-deep .swiper-pagination-bullet {
      background: #ffffff;
    }
    // ::v-deep .swiper-pagination-bullet-active {
    //   background: #023AFF;
    // }
  }
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
        width: $home-ellipse-outer-width;
        height: $home-ellipse-outer-height;
        border: 2px solid rgba(255, 255, 255, 0.1);
        box-sizing: border-box;
        filter: drop-shadow(0px 4px 200px rgba(255, 255, 255, 0.15));
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .circle-inner {
          width: $home-ellipse-inner-width;
          height: $home-ellipse-inner-height;
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
            width: $logo-width;
            height: $logo-height;
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
            .typing {
              color: #012fd0;
            }
          }
        }
      }
    }
    .mouse {
      position: absolute;
      width: 26px;
      height: 39px;
      left: 70px;
      bottom: 100px;
      border: 1.5px solid #C4C4C4;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      .point {
        margin-top: 4px;
        width: 3px;
        height: 12px;
        background: #C4C4C4;
        border-radius: 5px;
      }
    }
  }
  .page1 {
    width: 100%;
    height: 100vh;
    background:#05050F;
    overflow: hidden;
    .page1-container {
      margin-top: 90px;
      display: flex;
      .icon {
        margin-left: 10%;
        background-image: url('../assets/imgs/exchange.svg');
        //FIXME:
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
      margin-left: 10%;
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
      margin-top: 60px;
      margin-left: 10%;
      .content {
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: left;
        margin-bottom: 100px;
        //FIXME:
        // margin-left: 40px;
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
        // width: 80%;
        margin: 0 auto;
        .ellipse-outer {
          width: $ellipse-outer-width;
          height: $ellipse-outer-height;
          background: #000000;
          border: 2px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0px 4px 50px rgba(44, 72, 223, 0.25);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          .ellipse-middle {
            width: $ellipse-middle-width;
            height: $ellipse-middle-height;
            background: #121111;
            border: 2px solid rgba(255, 255, 255, 0.15);
            box-shadow: 0px 4px 50px rgba(83, 17, 224, 0.25);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            .ellipse-inner {
              width: $ellipse-inner-width;
              height: $ellipse-inner-height;
              background: #000000;
              border: 2px solid rgba(255, 255, 255, 0.15);
              box-shadow: 0px 4px 50px rgba(22, 2, 255, 0.25);
              border-radius: 50%;
              display: flex;
              justify-content: center;
              .diagram {
                background-image: url('../assets/imgs/FlowChart.svg');
                background-size: cover;
                width: $diagram-width;
                height: $diagram-height;
                margin-top: -80px;
              }
              .diagram_EN {
                background-image: url('../assets/imgs/FlowChart_EN.svg');
                background-size: cover;
                width: $diagram-width;
                height: $diagram-height;
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
        justify-content: flex-start;
        .create, .excute {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
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
        .excute {
          margin-left: 40px;
        }
      }
    }
  }
  .page3 {
    width: 100%;
    height: 100vh;
    background:#05050F;
    .content {
      margin-top: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: left;
      margin-left: 10%;
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
    .svgLine {
      margin-top: -220px;
      background-image: url('../assets/imgs/DecorativeLine.svg');
      // width: $svgLine-width;
      // height: $svgLine-height;
      width: 1920px;
      height: 1080px;
      background-size: cover;
      // background-position: center;
      position: relative;
      // transform: rotate(-15deg);
      .item01 {
        top: 795px;
        left: 160px;
      }
      .item02 {
        top: 620px;
        left: 510px;
      }.item03 {
        top: 515px;
        left: 940px;
      }.item04 {
        top: 345px;
        left: 1210px;
      }
      .item001 {
        top: 795px;
        left: 125px;
      }
      .item002 {
        top: 615px;
        left: 510px;
      }.item003 {
        top: 515px;
        left: 930px;
      }.item004 {
        top: 325px;
        left: 1210px;
      }
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
      margin-bottom: -550px;
      display: flex;
      justify-content: center;
      align-items: center;
      .circle-outer {
        width: $home-ellipse-outer-width;
        height: $home-ellipse-outer-height;
        border: 2px solid rgba(255, 255, 255, 0.1);
        box-sizing: border-box;
        filter: drop-shadow(0px 4px 200px rgba(255, 255, 255, 0.15));
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .circle-inner {
          width: $home-ellipse-inner-width;
          height: $home-ellipse-inner-height;
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
    .copyright {
      position: absolute;
      left: 70px;
      bottom: 100px;
      span {
        font-size: 16px;
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
  .page1, .page2, .page3, .page4 {
    padding: 40px 0 0 0;
  }
}
</style>
