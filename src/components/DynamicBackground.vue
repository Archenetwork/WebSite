<template>
   <div class="background">
      <div class="red"></div>
      <div class="lightenRed"></div>
      <div class="darkenRed"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
$colors: (
   'red': $triangle-color,
   'lightenRed': lighten($triangle-color, 10%),
   'darkenRed': darken($triangle-color, 10%)
);
.background > div,
.background > div::before,
.background > div::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.7;
  transform-origin: top;
  transition: all 5s linear 0s;
//   box-shadow: 0px 0px 20px #571EFA;
}

@function random-num($min, $max) {
  @return floor(random() * ($max - $min) + $min);
}

@function random-calc($number) {
  $max: 100 - $number;
  $min: $number * -1;
  @return random-num($min, $max);
}

@each $color-name, $color-hex in $colors {
  // Initial top and left positions
  $random1: random(50);
  $random2: random(100);

  // Animated top and left positions
  $random3: random(100);
  $random4: random(50);
  
  // Animated top and left end positions
  $random5: random(50);
  $random6: random(100);

  .#{$color-name} {
    $size: random-num(5,10) + px;
    // $height: random-num(10,20) + px;
    animation: #{$color-name} linear 30s alternate infinite;
    border: 1px solid #{$color-hex};
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% ;
    // border-radius: 50%;
    // background: #{$color-hex};
    width: $size;
    height: $size;
    transform: translate3d(
      $random1 + vw,
      $random2 + vh,
      0);
    z-index: random(12);
  }

  .#{$color-name}::before {
    animation: #{$color-name}-pseudo linear 15s alternate infinite;
    // background: #{$color-hex};
    // border: 2px solid #{$color-hex};
    // width: random-num(5,50) + px;
    // height: random-num(5,50) + px;
    width: 0;
    height: 0;
    border-top: random-num(5,10) + px solid transparent;
    border-right: random-num(10,20) + px solid #{$color-hex};
    border-bottom: random-num(5,10) + px solid transparent;
    transform:
      translate3d(
        random-calc($random1) + vw,
        random-calc($random2) + vh,
        0)
      rotate((random(360)) + deg);
  }

  .#{$color-name}::after{
    animation: #{$color-name}-pseudo linear 20s alternate infinite;
    // border: 2px solid #{$color-hex};
    // width: random-num(5,50) + px;
    // height: random-num(5,50) + px;
    width: 0;
    height: 0;
    border-top: random-num(5,10) + px solid transparent;
    border-left: random-num(10,20) + px solid #{$color-hex};
    border-bottom: random-num(5,10) + px solid transparent;
    transform:
      translate3d(
        random-calc($random1) + vw,
        random-calc($random2) + vh,
        0)
      rotate((random(360)) + deg);
  }

  @keyframes #{$color-name} {
    50% {
      transform: translate3d(
        $random3 + vw,
        $random4 + vh,
        0);
    }
    100% {
      transform: translate3d(
        $random5 + vw,
        $random6 + vh,
        0);
    }
  }

  @keyframes #{$color-name}-pseudo {
    33% {
      transform:
        translate3d(
          random-calc($random3) + vw,
          random-calc($random4) + vh,
          0)
        rotate((random(360)) + deg);
    }
    100% {
      transform:
        translate3d(
          random-calc($random5) + vw,
          random-calc($random6) + vh,
          0)
        rotate((random(360)) + deg);
    }
  }
}
</style>