<template>
  <div class="flex relative mb-[30px]">
    <div class="pl-[100px] py-[20px] text-left">
      <h4 class="uppercase text-[18px] text-white font-[700]">
        {{ data.title }}
      </h4>
      <h5
        class="uppercase text-[12px] font-[600] mt-[8px]"
        :style="{ color: $store.state.color }"
      >
        {{ data.desc }}
      </h5>
      <p class="text-[16px] text-white font-[400] mt-[8px]">
        {{ data.content }}
      </p>
      <div v-if="data.product" class="mt-[8px]">
        <p class="text-[16px] text-white font-[600]">Products:</p>
        <ul class="product-list list-disc pl-[20px]">
          <li v-for="item in data.product" :key="item.id" class="ml-[4px]">
            <div>
              <a
                :href="item.url"
                v-text="item.title"
                target="_blank"
                class="cursor-pointer font-[600] hover:!text-[#ffc107]"
                :style="{ color: $store.state.color }"
              />
            </div>
            <p class="mt-[4px]">
              <span class="text-[16px] text-white font-[600]">
                Technologies:
              </span>
              <span class="text-[16px] text-white font-[400]">
                {{ item.technologies }}
              </span>
            </p>
            <div v-if="item.features" class="flex flex-wrap mt-[4px]">
              <span class="text-[16px] text-white font-[600] mr-[4px]">
                Features:
              </span>
              <ul class="flex flex-wrap flex-1">
                <li v-for="(feature, index) in item.features" :key="feature.id">
                  <a
                    v-if="feature.url"
                    :href="feature.url"
                    v-text="`${feature.title}`"
                    class="cursor-pointer hover:!text-[#ffc107] ml-[4px] capitalize"
                    target="_blank"
                    :style="{ color: $store.state.color }"
                  />
                  <span
                    v-else
                    target="_blank"
                    class="text-white ml-[4px] capitalize"
                    >{{ feature.title }}
                  </span>
                  <span
                    v-if="index !== item.features.length - 1"
                    target="_blank"
                    class="text-white capitalize"
                    >,
                  </span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <p v-if="data.technologies" class="mt-[4px]">
        <span class="text-[16px] text-white font-[600]"> Technologies: </span>
        <span class="text-[16px] text-white font-[400]">
          {{ data.technologies }}
        </span>
      </p>
      <div class="absolute left-0 top-0 bottom-0 flex flex-col justify-between">
        <p class="text-white text-[16px] flex items-center">
          <span class="w-[72px]">{{ data.endPeriod }}</span>
          <span
            class="block ml-[8px] w-[10px] h-[10px] rounded-full"
            :style="{ background: $store.state.color }"
          ></span>
        </p>
        <p class="text-white text-[16px] flex items-center">
          <span class="w-[72px]">{{ data.startPeriod }}</span>
          <span
            class="block ml-[8px] w-[10px] h-[10px] rounded-full"
            :style="{ background: $store.state.color }"
          ></span>
        </p>
        <div
          class="w-[2px] absolute right-1 top-[10px] bottom-[10px]"
          :style="{ background: $store.state.color }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

interface IProps {
  title: string;
  desc: string;
  content: string;
  technologies?: string;
  product?: Array<Record<string, any>>;
  startPeriod: string;
  endPeriod: string;
}
export default {
  props: {
    data: { type: Object as PropType<IProps>, required: true },
  },
};
</script>

<style lang="scss">
ul li::marker {
  color: #fff;
}
</style>
