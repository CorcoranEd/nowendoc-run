<template>
  <div class="w-screen relative overflow-clip">
    <div class="container mx-auto relative p-4">
      <div class="flex flex-row py-4">
        <div class="w-3/4">
          <div class="flex flex-col">
            <div class="flex flex-col mb-2">
              <h1>Nowendoc Run</h1>
              <a href="https://goo.gl/maps/a2jwDaBbZGRWrZw87" target="_blank"
                >6138 Brackendale Road<br />
                Nowendoc, NSW, 2354<br />
                Australia
              </a>
            </div>
            <div class="flex flex-col mb-2">
              <p>General Contact</p>
              <a href="mailto:contact@nowendoc.run?subject=Website Enquiry"
                >contact@nowendoc.run</a
              >
            </div>
            <div class="flex flex-col mb-2">
              <p>Ross Henderson, Farm Manager</p>
              <a href="mailto:ross@nowendoc.run">ross@nowendoc.run</a>
              <a href="tel:0447 335 364">0447 335 364</a>
            </div>
          </div>
        </div>
        <div class="w-1/4">
          <img src="../assets/logo-outline.svg" />
        </div>
      </div>

      <div>
        <img
          class="relative -z-10"
          src="../assets/photos/nowendoc-run-00001.jpg"
        />
      </div>
    </div>

    <div class="absolute w-full top-1/2 left-1/4">
      <img
        class="z-10 relative opacity-20 w-full"
        src="../assets/logo-outline.svg"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "@/stores/store";

export default {
  name: "HomePage",
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
};
</script>
