<template>
  <div class="fixed top-0 bottom-0 left-0 w-[200px] bg-[#17181B] z-[9]">
    <div class="relative">
      <img src="@/assets/avatar.jpg" />
      <h3
        class="bg-[#00A3E180] text-[#fff] font-[700] uppercase text-[20px] py-[10px] absolute bottom-0 left-0 right-0"
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
          class="flex items-center pl-[50px] py-[8px] border-b-[#202226] border-b-[1px]"
        >
          <img
            v-if="isActive"
            :src="menu.iconActive"
            class="w-[20px] h-[20px]"
          />
          <img v-else :src="menu.icon" class="w-[20px] h-[20px]" />
          <p
            v-if="isActive"
            class="uppercase pl-[8px] text-[#fff] text-[12px] leading-[20px] font-[700]"
          >
            {{ menu.title }}
          </p>
          <p
            v-else
            class="uppercase pl-[8px] text-[#777] text-[12px] leading-[20px] font-[700]"
          >
            {{ menu.title }}
          </p>
        </div>
      </router-link>
    </nav>
    <p
      class="flex w-full absolute bottom-0 text-[#777] text-[12px] mb-[16px] justify-center"
    >
      2022 © Nam Vu by VueJS. <br />
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
