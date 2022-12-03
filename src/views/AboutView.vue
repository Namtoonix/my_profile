<template>
  <div class="home pl-[200px] w-full min-h-screen bg-[#2c2d2f]">
    <div class="max-w-[1024px] mx-auto">
      <h2
        class="text-left border-b-[1px] border-dashed border-b-[#ffffff33] text-[38px] font-[700] pt-[50px] mb-[50px]"
        :style="{ color: $store.state.color }"
      >
        About Me.
      </h2>
      <div class="flex flex-wrap">
        <div class="w-2/3 pr-[32px]">
          <h3 class="text-left text-[22px] font-[700] text-white mb-[20px]">
            Front-end Developer
          </h3>
          <p class="leading-[1.6] text-[16px] text-white mb-[20px] text-left">
            My name is Nam. I’ve been working as a Front-end Developer for more
            than 1 year. Work as a part of an Agile team to develop breakthrough
            SaaS products to help 50,000+ merchants and top brands transform
            their business. During that time I'm always researching and learning
            more about new framework like
            <span class="font-[700] underline"
              >ReactJS, Typescript, NextJS, VueJS and Shopify Liquid.</span
            >
          </p>
          <p class="leading-[1.6] text-[16px] text-white mb-[20px] text-left">
            I’m known as a detail-oriented and good communicator employee. I
            never miss deadlines and can take multiple tasks at once. My
            supervisor also appreciates my enthusiasm for the job. With my
            experience, I’m looking for an opportunity to take you an open job.
            I hope to work for an organization like yours; and contribute to
            improve the environment, which is something I’m interested in.
          </p>
        </div>
        <div class="w-1/3">
          <h3 class="text-left text-[22px] font-[700] text-white mb-[20px]">
            Personal Information
          </h3>
          <ul class="text-left">
            <li v-for="item in infoList" :key="item.id" class="mb-[15px]">
              <span
                class="font-[700] text-white text-[16px] border-b-[2px]"
                :style="{ borderColor: $store.state.color }"
                >{{ item.title }}</span
              >
              <span class="font-[700] text-white text-[16px]"> : </span>
              <span class="text-white text-[16px]">{{ item.value }}</span>
            </li>
          </ul>
          <a
            :href="cvDownload.url"
            v-text="cvDownload.label"
            @click.prevent="downloadCV(cvDownload)"
            class="flex w-fit border-[2px] px-[20px] py-[10px] hover:!text-white transition ease-in duration-300"
            :style="styleObject"
          />
        </div>
      </div>
      <div class="flex flex-col items-center">
        <h3
          class="w-fit text-center text-white border-b-[2px] text-[22px] font-[600] my-[50px]"
          :style="{ borderColor: $store.state.color }"
        >
          Technologies
        </h3>
        <carousel :settings="settings" :breakpoints="breakpoints">
          <slide v-for="slide in sliderList" :key="slide.id" class="w-1/4">
            <div class="carousel__item w-full">
              <img :src="slide.image" />
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import axios from "axios";
import store from "@/store";
import { Carousel, Slide } from "vue3-carousel";

import ReactLogo from "@/assets/react_logo.png";
import TypescriptLogo from "@/assets/typescript_logo.png";
import NextLogo from "@/assets/next_logo.png";
import VueLogo from "@/assets/vue_logo.png";
import JavascriptLogo from "@/assets/js_logo.png";
import HtmlLogo from "@/assets/html_logo.png";
import CssLogo from "@/assets/css_logo.png";

const infoList = [
  {
    id: "name",
    title: "Name",
    value: "Vu Hoang Nam",
  },
  {
    id: "birthday",
    title: "Birthday",
    value: "16/02/1998",
  },
  {
    id: "residence",
    title: "Residence",
    value: "An Giang, Viet Nam",
  },
  {
    id: "address",
    title: "Address",
    value:
      "315/4A Nguyen Thi Tu Street, Binh Hung Hoa B Ward, Binh Tan District, Ho Chi Minh City",
  },
  {
    id: "email",
    title: "Email",
    value: "vuhoangnamtnh1998@gmail.com",
  },
  {
    id: "phone",
    title: "Phone",
    value: "035 82 81 096",
  },
  {
    id: "freelance",
    title: "Freelance",
    value: "Available",
  },
];

const sliderList = [
  {
    id: "react_logo",
    image: ReactLogo,
  },
  {
    id: "typescript_logo",
    image: TypescriptLogo,
  },
  {
    id: "next_logo",
    image: NextLogo,
  },
  {
    id: "vue_logo",
    image: VueLogo,
  },
  {
    id: "js_logo",
    image: JavascriptLogo,
  },
  {
    id: "html_logo",
    image: HtmlLogo,
  },
  {
    id: "css_logo",
    image: CssLogo,
  },
];

const cvDownload = {
  url: "https://drive.google.com/file/d/1zS7LcijKvzyII4vQ6ejokrmHyTQl1hmM/view?usp=sharing",
  label: "Download Resume",
};

export default {
  components: { Carousel, Slide },
  data() {
    return {
      infoList: infoList,
      cvDownload: cvDownload,
      sliderList: sliderList,
      settings: {
        itemsToShow: 2,
        itemsToScroll: 1,
        snapAlign: "center",
      },
      breakpoints: {
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {
    downloadCV(item) {
      const { url, label } = item;
      axios
        .get(url, { responseType: "blob" })
        .then((response) => {
          const blob = new Blob([response.data], { type: "application/pdf" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = label;
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch(console.error);
    },
  },
  computed: {
    styleObject: function () {
      return {
        "--color": "#0000",
        "--color-hover": store.state.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  background: var(--color);
  border-color: var(--color-hover);
  color: var(--color-hover);
}

a:hover {
  background: var(--color-hover);
}
</style>
