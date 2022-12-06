<template>
  <div class="max-w-[1024px] mx-auto sm:px-0 px-[12px]">
    <h2
      class="text-left border-b-[1px] border-dashed border-b-[#ffffff33] sm:text-[38px] text-[28px] font-[700] pt-[50px] sm:mb-[50px] mb-[20px]"
      :style="{ color: $store.state.color }"
    >
      Contact Me.
    </h2>
    <div class="flex flex-wrap">
      <div class="sm:w-1/3 w-full flex sm:justify-center">
        <a
          href="mailto:vuhoangnamtnh1998@gmail.com"
          class="flex items-center cursor-pointer font-[600] hover:!text-[#ffc107]"
          :style="{ color: $store.state.color }"
        >
          <img class="w-[80px] mr-[8px]" src="@/assets/mail-color-icon.png" />
          vuhoangnamtnh1998@gmail.com
        </a>
      </div>
      <div class="sm:w-1/3 w-full flex sm:justify-center">
        <a
          href="tel:+84358281096"
          class="flex items-center cursor-pointer font-[600] hover:!text-[#ffc107]"
          :style="{ color: $store.state.color }"
        >
          <img class="w-[80px] mr-[8px]" src="@/assets/phone-icon.png" />
          035 82 81 096
        </a>
      </div>
      <div class="sm:w-1/3 w-full flex sm:justify-center">
        <a
          href="https://github.com/Namtoonix"
          class="flex items-center cursor-pointer font-[600] hover:!text-[#ffc107]"
          :style="{ color: $store.state.color }"
        >
          <img class="w-[80px] mr-[8px]" src="@/assets/git-icon.png" />
          <span>NamToonix</span>
        </a>
      </div>
      <div class="mx-auto sm:mt-[50px] mt-[20px]">
        <h3
          class="mx-auto w-fit text-white border-b-[2px] text-[22px] font-[600] mb-[20px] uppercase"
          :style="{ borderColor: $store.state.color }"
        >
          LET'S TALK
        </h3>
        <p class="text-[#42ff42]">{{ status }}</p>
        <form
          ref="form"
          action="https://formspree.io/f/xeqdyayw"
          method="POST"
          class="flex flex-wrap sm:w-[600px] w-full sm:mt-[50px] mt-[20px]"
        >
          <div class="sm:w-1/2 w-full sm:pr-[16px]">
            <div class="border-b-[2px] border-b-[#999]">
              <input
                type="text"
                name="name"
                placeholder="Name"
                class="w-full py-[5px] outline-none text-white !bg-transparent"
              />
            </div>
          </div>
          <div class="sm:w-1/2 w-full sm:pl-[16px] sm:mt-0 mt-[20px]">
            <div class="border-b-[2px] border-b-[#999]">
              <input
                type="email"
                name="email"
                placeholder="Email"
                class="w-full py-[5px] outline-none text-white !bg-transparent"
              />
            </div>
          </div>
          <div class="w-full mt-[20px]">
            <div class="border-b-[2px] border-b-[#999]">
              <textarea
                type="text"
                name="message"
                placeholder="
How can we help you?"
                class="w-full py-[5px] outline-none text-white !bg-transparent"
              ></textarea>
            </div>
          </div>
          <div
            class="cursor-pointer button border-[2px] px-[20px] py-[10px] sm:mt-[50px] mt-[20px] hover:!text-white transition ease-in duration-300"
            :style="styleObject"
          >
            <button @click="submitForm">Send</button>
          </div>
        </form>
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

<script lang="js">
import store from "@/store";
export default {
  data() {
    return {
      status: "",
    };
  },
  methods: {
    async submitForm(event) {
      event.preventDefault();
      const form = this.$refs.form;
      const data = new FormData(form)
      fetch("https://formspree.io/f/xeqdyayw", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            this.status = "Thanks for your submission! I will contact you as soon as possible.";
            form.reset()
          } else {
            response.json().then((data) => {
              this.status = "Oops! There was a problem submitting your form";
            });
          }
        })
        .catch((error) => {
          this.status = "Oops! There was a problem submitting your form";
        });
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
.button {
  background: var(--color);
  border-color: var(--color-hover);
  color: var(--color-hover);
}

.button:hover {
  background: var(--color-hover);
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0px 1000px #2c2d2f inset;
}
input:-webkit-autofill {
  -webkit-text-fill-color: #fff !important;
}
</style>
