<template>
  <div class="relative min-h-screen flex justify-center items-center">
    <div class="absolute inset-0 bg-[#151515] opacity-50">
      <img class="min-h-full aspect-[16/9]" src="@/assets/home-bg.jpg" />
    </div>
    <div class="z-[2]">
      <h1 class="text-[62px] text-[#fff] font-[600] font-dancing">
        Vu Hoang Nam
      </h1>
      <h3 class="text-[28px] text-white">
        I'm a
        <span class="font-[600]" :style="{ color: $store.state.color }"
          >Front-end Developer</span
        >
        with
        <span class="font-[600]" :style="{ color: $store.state.color }">{{
          typeValue
        }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h3>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "typeWiriter",
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: [
        "ReactJS",
        "NextJS",
        "VueJS",
        "Typescript",
        "Shopify Liquid",
      ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-weight: normal;
}

// Cursor blinking CSS Starts...
.blinking-cursor {
  font-size: 32px;
  color: #fff;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #fff;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #fff;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #fff;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #fff;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #fff;
  }
}
// Cursor blinking CSS Ends...
</style>
