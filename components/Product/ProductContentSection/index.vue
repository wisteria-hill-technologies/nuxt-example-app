<template>
  <div>
    <div class="flex flex-wrap bg-themeMedium">
      <div class="xm:w-1/2">
        <figure>
          <picture>
            <source
              media="(min-width: 0px)"
              srcset="
                https://www.aesop.com/u1nb1km7t5q7/45cmtY7HqHrzvKLEBFmTa9/c5b1e36efad6f01af887949ddde88906/Aesop-Skin-In-Two-Minds-Facial-Cleanser-Texture-Landing-Page-Hero-50-50-Desktop-1440x1500px.jpg
              "
            />
            <img class="contentImage" loading="lazy" />
          </picture>
        </figure>
      </div>
      <div class="xm:w-1/2">
        <ContentInner />
      </div>
    </div>
  </div>
</template>

<script>
import ContentInner from './ContentInner'

export default {
  components: {
    ContentInner,
  },
}
</script>
