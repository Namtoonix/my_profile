<template>
  <div class="max-w-[1024px] mx-auto sm:px-0 px-[12px]">
    <h2
      class="text-left border-b-[1px] border-dashed border-b-[#ffffff33] sm:text-[38px] text-[28px] font-[700] pt-[50px] sm:mb-[50px] mb-[20px]"
      :style="{ color: $store.state.color }"
    >
      Contact Me.
    </h2>
    <div class="flex flex-wrap">
      <div class="sm:w-1/2 w-full text-center">
        <a
          href="mailto:vuhoangnamtnh1998@gmail.com"
          class="flex items-center cursor-pointer font-[600] hover:!text-[#ffc107]"
          :style="{ color: $store.state.color }"
        >
          <img
            class="w-[80px] mr-[8px] p-[10px]"
            src="@/assets/mail-color-icon.png"
          />
          vuhoangnamtnh1998@gmail.com
        </a>
      </div>
      <div class="sm:w-1/2 w-full text-center">
        <a
          href="tel:+84358281096"
          class="flex items-center cursor-pointer font-[600] hover:!text-[#ffc107]"
          :style="{ color: $store.state.color }"
        >
          <img class="w-[80px] mr-[8px]" src="@/assets/phone-icon.png" />
          035 82 81 096
        </a>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.952755214164!2d106.58792821469173!3d10.814927561439383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b98faafa847%3A0x6fb8551e640c3dc!2zMzE1LzRhIMSQLiBOZ3V54buFbiBUaOG7iyBUw7osIELDrG5oIEjGsG5nIEhvw6AgQiwgQsOsbmggVMOibiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1670230025130!5m2!1svi!2s"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="sm:mt-[50px] mt-[30px]"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped></style>
