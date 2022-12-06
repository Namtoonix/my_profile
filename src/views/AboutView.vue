<template>
  <div class="home">
    <div class="max-w-[1024px] mx-auto sm:px-0 px-[12px]">
      <h2
        class="text-left border-b-[1px] border-dashed border-b-[#ffffff33] sm:text-[38px] text-[28px] font-[700] pt-[50px] sm:mb-[50px] mb-[20px]"
        :style="{ color: $store.state.color }"
      >
        About Me.
      </h2>
      <div class="flex flex-wrap">
        <div class="sm:w-2/3 w-full pr-[32px]">
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
        <div class="sm:w-1/3 w-full">
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
            class="flex w-fit border-[2px] px-[20px] py-[10px] hover:!text-white transition ease-in duration-300"
            :style="styleObject"
            target="_blank"
          />
        </div>
      </div>
      <div class="flex flex-col items-center">
        <h3
          class="w-fit text-center text-white border-b-[2px] text-[22px] font-[600] mt-[50px] mb-[20px] uppercase"
          :style="{ borderColor: $store.state.color }"
        >
          Technologies
        </h3>
        <agile :options="myOptions">
          <div class="slide">
            <img src="@/assets/react_logo.png" />
          </div>
          <div class="slide">
            <img src="@/assets/typescript_logo.png" />
          </div>
          <div class="slide">
            <img src="@/assets/next_logo.png" />
          </div>
          <div class="slide">
            <img src="@/assets/vue_logo.png" />
          </div>
          <div class="slide">
            <img src="@/assets/js_logo.png" />
          </div>
          <div class="slide">
            <img src="@/assets/html_logo.png" />
          </div>
          <div class="slide">
            <img src="@/assets/css_logo.png" />
          </div>
        </agile>
      </div>
      <div class="flex flex-col items-center">
        <h3
          class="w-fit text-center text-white border-b-[2px] text-[22px] font-[600] mt-[50px] mb-[20px] uppercase"
          :style="{ borderColor: $store.state.color }"
        >
          Company
        </h3>
        <agile :slidesToShow="2" :navButtons="false" :infinite="false">
          <div class="slide">
            <div
              class="flex min-h-full bg-white rounded-[12px] overflow-hidden p-[12px]"
            >
              <img src="@/assets/haravan_logo.jpg" />
            </div>
          </div>
          <div class="slide h-full">
            <div
              class="flex items-center min-h-full bg-white rounded-[12px] overflow-hidden p-[12px]"
            >
              <img class="h-auto" src="@/assets/viking_logo.png" />
            </div>
          </div>
        </agile>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import store from "@/store";
import { VueAgile } from "vue-agile";

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

const cvDownload = {
  url: "https://drive.google.com/file/d/1zS7LcijKvzyII4vQ6ejokrmHyTQl1hmM/view?usp=sharing",
  label: "Download Resume",
};

export default {
  components: { agile: VueAgile },
  data() {
    return {
      infoList: infoList,
      cvDownload: cvDownload,
      myOptions: {
        navButtons: false,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
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

.agile {
  width: 100%;
  .slide {
    padding: 30px;
  }
}

@media (max-width: 640px) {
  .agile {
    .slide {
      padding: 12px;
    }
  }
}
</style>
