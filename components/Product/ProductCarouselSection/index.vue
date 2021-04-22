<template>
  <section class="ProductCarouselSection sm:py-37 py-20">
    <div>
      <div>
        <CarouselDescription v-if="isMobile" class="pb-20" :title="accompaniments.title" :description="accompaniments.description" />
        <div class="relative">
          <button
            v-if="showScrollButtons && scrollWidthPos"
            class="slideLeftButton"
            @click="scrollHorizontally(scrollWidthPos)"
          >
            <div style="transform: rotate(90deg)">
              <ArrowIcon />
            </div>
          </button>
          <div ref="slider" class="slider overflow-auto">
            <div class="flex">
              <CarouselDescription v-if="!isMobile" :title="accompaniments.title" :description="accompaniments.description" />
              <template v-for="product in accompaniments.products">
                <div
                  class="outline-none flex items-end"
                  style="flex-basis: 0"
                  aria-hidden="false"
                >
                  <a class="relative" :href="product.aTag.href" target="_self">
                    <picture class="productPicture">
                      <source
                        media="(min-width: 1025px)"
                        :srcset="product.picture.srcsets[0]"
                      />
                      <source
                        media="(min-width: 640px)"
                        :srcset="product.picture.srcsets[1]"
                      />
                      <source
                        media="(min-width: 0px)"
                        :srcset="product.picture.srcsets[1]"
                      />
                      <img
                        class="productImage m-auto"
                        :alt="product.img.alt"
                        loading="lazy"
                      />
                    </picture>
                    <div class="productDescription text-center">
                      <h5 class="text-sm font-semibold my-2.5">
                        {{product.heading}}
                      </h5>
                      <div class="text-sm">
                        {{product.description}}
                      </div>
                    </div>
                  </a>
                </div>
              </template>
            </div>
          </div>
          <button
            v-if="showScrollButtons && !scrollWidthPos"
            class="slideRightButton"
            @click="scrollHorizontally(scrollWidthPos)"
          >
            <div style="transform: rotate(-90deg)">
              <ArrowIcon />
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArrowIcon from './ArrowIcon'
import CarouselDescription from './CarouselDescription'

export default {
  components: {
    ArrowIcon,
    CarouselDescription
  },
  data() {
    return {
      isMobile: false,
      scrollWidthPos: 0,
      showScrollButtons: false,
      scrollLeft: 0,
      accompaniments: {
        title: 'Accompany with',
        description:
          'Supplement once or twice weekly with deep-cleansing Tea Tree Leaf Facial Exfoliant. Balance the skin and prepare it for hydration with mildly astringent In Two Minds Facial Toner; follow with lightweight In Two Minds Facial Hydrator.',
        products: [
          {
            aTag: {
              href:
                'https://www.aesop.com/uk/p/skin/exfoliate/tea-tree-leaf-facial-exfoliant/',
              title: 'Link to Tea Tree Leaf Facial Exfoliant',
            },
            picture: {
              srcsets: [
                'https://www.aesop.com/u1nb1km7t5q7/7rWjWZnKfnTQiigy4se1NI/6541c1860b389fb0b6d2f3723923723a/Aesop-Skin-Tea-Tree-Leaf-Facial-Exfoliant-30g-large.png',
                'https://www.aesop.com/u1nb1km7t5q7/5C4Q50ZJVLOd5nIzbrxOBt/0ee06dcf63dad97491389c87b651a413/Aesop-Skin-Tea-Tree-Leaf-Facial-Exfoliant-30g-medium.png',
                'https://www.aesop.com/u1nb1km7t5q7/5oSGB9vTdcU6EENatN5ALs/139e8dfc6599675f79a3193dc01bfaf0/Aesop-Skin-Tea-Tree-Leaf-Facial-Exfoliant-30g-small.png',
              ],
            },
            img: {
              alt: 'Tea Tree Leaf Facial Exfoliant in amber bottle',
            },
            heading: 'Tea Tree Leaf Facial Exfoliant',
            description: 'A dry blend to mix with facial cleanser',
          },
          {
            aTag: {
              href:
                'https://www.aesop.com/uk/p/skin/tone/in-two-minds-facial-toner/',
              title: 'Link to In Two Minds Facial Toner',
            },
            picture: {
              srcsets: [
                'https://www.aesop.com/u1nb1km7t5q7/7Im8Uf6UtUEATS9jJbLFwA/ad03f31889192337d119e29a52184b42/Aesop-Skin-In-Two-Minds-Facial-Toner-100mL-Large-782x796px.png',
                'https://www.aesop.com/u1nb1km7t5q7/5reJeNwIaWyF2Y7EoxgPkV/c7c3a3237f281cb8de61caa57cefb41f/Aesop-Skin-In-Two-Minds-Facial-Toner-100mL-Medium-611x622px.png',
                'https://www.aesop.com/u1nb1km7t5q7/WgtxXHsvfBE3eCCQitZ4P/7f884c1b0f02dc77daa0d1d23c798f57/Aesop-Skin-In-Two-Minds-Facial-Toner-100mL-Small-426x434px.png',
              ],
            },
            img: {
              alt: 'In Two Minds Facial Toner in amber glass bottle',
            },
            heading: 'In Two Minds Facial Toner',
            description: 'Refreshes and balances combination skin',
          },
          {
            aTag: {
              href:
                'https://www.aesop.com/uk/p/skin/hydrate/in-two-minds-facial-hydrator/',
              title: 'Link to In Two Minds Facial Hydrator',
            },
            picture: {
              srcsets: [
                'https://www.aesop.com/u1nb1km7t5q7/2yaCvgZP4dvD6TToJZCPFq/09a9e7ea87ca0c969de55008056f9950/Large-PNG-Aesop-Skin-In-Two-Minds-Facial-Hydrator-60mL-large.png',
                'https://www.aesop.com/u1nb1km7t5q7/77qQVUEHWYcuI13E2xbZ2n/8e457927d15d1d9931460f58e90c99a1/Large-PNG-Aesop-Skin-In-Two-Minds-Facial-Hydrator-60mL-medium.png',
                'https://www.aesop.com/u1nb1km7t5q7/6zI49Ty7WAF7WzYZidWx7T/285684ded866085fa07bc0e42df676ed/Large-PNG-Aesop-Skin-In-Two-Minds-Facial-Hydrator-60mL-small.png',
              ],
            },
            img: {
              alt: 'In Two Minds Facial Hydrator with pump',
            },
            heading: 'In Two Minds Facial Hydrator',
            description: 'Lightweight hydration for combination skin',
          },
        ],
      },
    }
  },
  mounted() {
    this.showScrollButtons =
      window.innerWidth + 50 < this.$refs.slider.scrollWidth
    window.addEventListener('resize', this.handleResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  updated() {
    this.$refs.slider.scroll({
      left: this.scrollWidthPos,
      behavior: 'smooth',
    })
  },
  methods: {
    handleResize() {
      if (window.innerWidth <= 570) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
      this.showScrollButtons =
        this.scrollWidthPos > 0 ||
        window.innerWidth < this.$refs.slider.scrollWidth
    },
    scrollHorizontally(pos) {
      if (pos) {
        this.scrollWidthPos = 0
      } else {
        this.scrollWidthPos = this.$refs.slider.scrollWidth - window.innerWidth
      }
    },
  },
}
</script>

<style scoped>
.slider::-webkit-scrollbar {
  display: none;
}
.productImage {
  min-width: 23rem;
}
.slideRightButton {
  position: absolute;
  z-index: 60;
  top: calc(50% - 80px);
  right: 0;
  display: -ms-flexbox;
  display: flex;
  width: 60px;
  height: 60px;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: #333;
  pointer-events: auto;
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.slideLeftButton {
  position: absolute;
  z-index: 60;
  top: calc(50% - 80px);
  left: 0;
  display: -ms-flexbox;
  display: flex;
  width: 60px;
  height: 60px;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: #333;
  pointer-events: auto;
  transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>
