<template>
    <div>
        <hero></hero>
        <download-section></download-section>
        <examples></examples>
    </div>
</template>
<script>
import Hero from "./components/Hero";
import DownloadSection from "./components/DownloadSection";
import Examples from "./components/Examples";
import Carousel from "./components/Carousel";

export default {
  name: "components",
  components: {
    Hero,
    DownloadSection,
    Examples,
    Carousel
  }
};
</script>
<style>
</style>
