<template>
  <div v-if="showLoading"><LoadingScreen /></div>
  <div v-else>
    <MainMenu :name="'Vu Hoang Nam'" :menuList="menuList" />
    <div
      class="sm:pl-[200px] w-full min-h-screen bg-[#2c2d2f] sm:px-0 px-[12px]"
    >
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <SettingLayout />
  </div>
</template>

<script lang="js">
import MainMenu from "@/components/MainMenu.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
import SettingLayout from "@/components/SettingLayout.vue";
import HomeIcon from "@/assets/home-icon.png";
import HomeIconActive from "@/assets/home-icon-active.png";
import AccountIcon from "@/assets/account-icon.png";
import AccountIconActive from "@/assets/account-icon-active.png";
import ResumeIcon from "@/assets/resume-icon.png";
import ResumeIconActive from "@/assets/resume-icon-active.png";
import MailIcon from "@/assets/mail-icon.png";
import MailIconActive from "@/assets/mail-icon-active.png";

const menuList = [
  {
    id: "home",
    title: "Home",
    path: "/",
    icon: HomeIcon,
    iconActive: HomeIconActive,
  },
  {
    id: "about-me",
    title: "About me",
    path: "/about-me",
    icon: AccountIcon,
    iconActive: AccountIconActive,
  },
  {
    id: "resume",
    title: "Resume",
    path: "/resume",
    icon: ResumeIcon,
    iconActive: ResumeIconActive,
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
    icon: MailIcon,
    iconActive: MailIconActive,
  },
];

export default {
  components: {
    MainMenu,
    LoadingScreen,
    SettingLayout,
  },
  data() {
    return {
      menuList: menuList,
      showLoading: true,
    };
  },
  created() {
    setTimeout(() => (this.showLoading = false), 2000);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
