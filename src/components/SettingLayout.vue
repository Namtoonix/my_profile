<template>
  <div
    class="settings fixed sm:top-[50px] top-[10%] right-[10px] z-[10]"
    @focusout="showSetting = false"
    tabindex="0"
  >
    <div @click="showSetting = !showSetting" class="bg-white rounded-full">
      <img width="40" src="@/assets/setting-icon.png" />
    </div>
    <transition name="slide-fade" mode="out-in">
      <div v-if="showSetting" class="absolute top-[50px] right-0">
        <v-color-picker
          class="ma-2"
          :swatches="swatches"
          show-swatches
          v-model="$store.state.color"
        ></v-color-picker>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import store from "@/store";
export default {
  watch: {
    color(value: string) {
      store.dispatch("selectColor", value);
    },
  },
  data() {
    return {
      showSetting: false,
      swatches: [
        ["#FF0000", "#AA0000"],
        ["#FFFF00", "#AAAA00"],
        ["#00FF00", "#00AA00"],
        ["#00FFFF", "#00AAAA"],
        ["#0000FF", "#0000AA"],
      ],
    };
  },
};
</script>

<style lang="scss">
.settings img {
  animation-name: rotate;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  border-radius: 50%;
}

@keyframes rotate {
  from {
    transform: rotate(-360deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.v-color-picker-preview__sliders {
  padding-left: 20px !important;
}
.v-color-picker-edit {
  display: flex;
  justify-content: space-between;
  .v-color-picker-edit__input {
    width: 24%;
  }
  button {
    display: none;
  }
}
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
