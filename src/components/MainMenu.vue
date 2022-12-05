<template>
  <div
    class="fixed top-0 bottom-0 left-0 w-[200px] bg-[#17181B] z-[9] min-h-[600px]"
  >
    <div class="relative">
      <img src="@/assets/avatar.png" />
      <h3
        class="text-[#fff] font-[700] uppercase text-[20px] py-[10px] absolute bottom-0 left-0 right-0"
        :style="{ backgroundColor: $store.getters.backgroundColor }"
      >
        {{ name }}
      </h3>
    </div>
    <nav>
      <router-link
        v-for="menu in menuList"
        :key="menu.id"
        :to="menu.path"
        v-slot="{ isActive }"
      >
        <div
          class="group flex items-center pl-[50px] h-[50px] border-b-[#202226] border-b-[1px]"
        >
          <img
            v-if="isActive"
            :src="menu.iconActive"
            class="w-[20px] h-[20px] group-hover:w-[24px] group-hover:h-[24px]"
          />
          <img
            v-else
            :src="menu.icon"
            class="w-[20px] h-[20px] group-hover:w-[24px] group-hover:h-[24px]"
          />
          <p
            v-if="isActive"
            class="uppercase pl-[8px] text-[#fff] text-[12px] leading-[20px] font-[700]"
          >
            {{ menu.title }}
          </p>
          <p
            v-else
            class="uppercase pl-[8px] text-[#777] text-[12px] group-hover:text-[14px] group-hover:text-[#fff] leading-[20px] font-[700]"
          >
            {{ menu.title }}
          </p>
        </div>
      </router-link>
    </nav>
    <p
      class="flex w-full absolute bottom-0 text-[#777] text-[12px] mb-[16px] justify-center"
    >
      2022 © NamToonix by VueJS. <br />
      All Right Reserved.
    </p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
    menuList: Array,
  },
};
</script>
