<template>
  <div class="max-w-[1024px] mx-auto lg:px-0 px-[12px]">
    <h2
      class="text-left border-b-[1px] border-dashed border-b-[#ffffff33] lg:text-[38px] text-[28px] font-[700] pt-[50px] lg:mb-[50px] mb-[20px]"
      :style="{ color: $store.state.color }"
    >
      My Resume.
    </h2>
    <div class="flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-[16px]">
        <h3
          class="mx-auto w-fit text-white border-b-[2px] text-[22px] font-[600] mb-[20px] uppercase"
          :style="{ borderColor: $store.state.color }"
        >
          Experience
        </h3>
        <div v-for="lineItem in experienceData" :key="lineItem.id">
          <ResumeLine :data="lineItem" />
        </div>
      </div>
      <div class="lg:w-1/2 w-full lg:pl-[16px]">
        <h3
          class="mx-auto w-fit text-white border-b-[2px] text-[22px] font-[600] mb-[20px] uppercase"
          :style="{ borderColor: $store.state.color }"
        >
          Education
        </h3>
        <div v-for="lineItem in educationData" :key="lineItem.id">
          <ResumeLine :data="lineItem" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ResumeLine from "@/components/ResumeLine.vue";

const haravanProduct = [
  {
    id: "haravan-marketing",
    title: "Haravan Marketing",
    url: "https://www.haravan.com/pages/phan-mem-quan-ly-khach-hang-haraloyalty?ref=internal",
    technologies: "ReactJS, Typescript, Redux saga, HTML/CSS.",
    features: [
      {
        id: "loyalty-program",
        title: "Loyalty Program",
      },
      {
        id: "coupon",
        title: "Coupon",
      },
      {
        id: "segment",
        title: "Segment",
      },
      {
        id: "customer-profile",
        title: "Customer Profile",
      },
      {
        id: "import-portal",
        title: "Import portal",
      },
      {
        id: "qr-code-campaign",
        title: "QR code campaign",
      },
      {
        id: "birthday-campaign",
        title: "Birthday campaign",
      },
      {
        id: "rating-campaign",
        title: "Rating campaign",
      },
      {
        id: "shipping-status-campaign",
        title: "Shipping status campaign",
      },
      {
        id: "abandoned-cart-campaign",
        title: "Abandoned cart campaign",
      },
    ],
  },
  {
    id: "haravan-ads",
    title: "Haravan Ads",
    url: "https://www.haravan.com/pages/giai-phap-haravan-marketing",
    technologies: "ReactJS, Typescript, HTML/CSS.",
    features: [
      {
        id: "google-ads",
        title: "Google ads",
        url: "https://www.haravan.com/pages/google-ads?ref=internal",
      },
      {
        id: "facebook-ads",
        title: "Facebook ads",
        url: "https://www.haravan.com/pages/ctm?ref=internal",
      },
      {
        id: "tiktok-ads",
        title: "Tiktok ads",
        url: "https://support.haravan.com/support/solutions/articles/42000097183--tiktok-ads-h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-l%C3%AAn-chi%E1%BA%BFn-d%E1%BB%8Bch-qu%E1%BA%A3ng-c%C3%A1o-tiktok-tr%C3%AAn-n%E1%BB%81n-t%E1%BA%A3ng-haravan",
      },
    ],
  },
];

const experienceData = [
  {
    id: "software-engineer",
    title: "Software Engineer - Loyalty team",
    desc: "Haravan - The most effective omnichannel sales management solution",
    content:
      "Work as a part of an Agile team to develop breakthrough SaaS products to help 50,000+ merchants and top brands transform their business.",
    product: haravanProduct,
    startPeriod: "06/2022",
    endPeriod: "12/2022",
  },
  {
    id: "front-end-engineer",
    title: "Front-end Engineer - VAS team",
    desc: "Haravan - The most effective omnichannel sales management solution",
    technologies: "Javascript/CSS/HTML, Shopify liquid, JQuery",
    content:
      "Utilize Javascript/CSS/HTML to setup, customize and troubleshoot technical issues and provides possible resolutions for customer's store.",
    startPeriod: "10/2021",
    endPeriod: "06/2022",
  },
  {
    id: "civil-engineer",
    title: "Civil Engineer",
    desc: "Viking - Company specializing in steel structure in Vietnam",
    content:
      "Participating in the design and direct supervision of steel structure works in compliance with TCVN.",
    startPeriod: "06/2019",
    endPeriod: "06/2021",
  },
];

const educationData = [
  {
    id: "front-end",
    title: "Front-end Engineer",
    desc: "Javascript/CSS/HTML, ReactJS, Typescript, NextJS, VueJS, Shopify Liquid, Jquery.",
    content:
      "Learn programming from basic to advanced, step by step increase your knowledge from the power of the internet. Help me gradually realize my dream of becoming a professional programmer.",
    startPeriod: "06/2021",
    endPeriod: "Now",
  },
  {
    id: "hcmut",
    title: "Civil Engineer",
    desc: "Ho Chi Minh City University of Technology",
    content:
      "Participate in learning and scientific research to develop yourself in best major technical university in Vietnam",
    startPeriod: "06/2020",
    endPeriod: "06/2016",
  },
];

export default {
  data() {
    return {
      experienceData: experienceData,
      educationData: educationData,
    };
  },
  components: {
    ResumeLine,
  },
};
</script>

<style lang="scss" scoped></style>
