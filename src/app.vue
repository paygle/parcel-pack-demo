<template>
  <div class="vue-app"> 
    	<div id="content-wrapper">
        <div id="example-wrapper">
          <div class="scrollContent">
            <section id="titlechart">
              <div id="description">
                <h1 class="badge gsap">视差滚动</h1>
                <h2>The most common parallax application</h2>
                <p>
                  To create a classic parallax page effect simply add elements that contain the parallax background.<br>
                  Then use scenes to animate the child element's position.
                </p>
                <p>
                  The DOM is very straight forward and consists of consecutive containers.
                </p>
                <a href="#" class="viewsource">view source</a>
              </div>
            </section>
            <section class="demo">
              <div class="spacer s0"></div>
              <div id="parallax1" class="parallaxParent">
                <div></div>
              </div>
              <div class="spacer s1">
                <div class="box2 blue">
                  <p>Content 1</p>
                  <a href="#" class="viewsource">view source</a>
                </div>
              </div>
              <div class="spacer s0"></div>
              <div id="parallax2" class="parallaxParent">
                <div></div>
              </div>
              <div class="spacer s1">
                <div class="box2 blue">
                  <p>Content 2</p>
                  <a href="#" class="viewsource">view source</a>
                </div>
              </div>
              <div class="spacer s0"></div>
              <div id="parallax3" class="parallaxParent">
                <div></div>
              </div>
              <div class="spacer s2"></div>
            </section>
            <div class="spacer s_viewport"></div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import 'gsap/src/uncompressed/TweenMax'
window.ScrollMagic = require('scrollmagic')  // 正确的引入方式，需要赋给全局
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

export default {
  name: 'App',
  data() {
    return {
      controller: null
    }
  },
  methods: {
    createScene() {
      new ScrollMagic.Scene({triggerElement: "#parallax1"})
        .setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
        .addIndicators()
        .addTo(this.controller);

      new ScrollMagic.Scene({triggerElement: "#parallax2"})
        .setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
        .addIndicators()
        .addTo(this.controller);

      new ScrollMagic.Scene({triggerElement: "#parallax3"})
        .setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
        .addIndicators()
        .addTo(this.controller);
    }
  },
  mounted() {
    this.controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}})
    this.createScene()
    console.log('controller', this.controller)
  }
}
</script>
