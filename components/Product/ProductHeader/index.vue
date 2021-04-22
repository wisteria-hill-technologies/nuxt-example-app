<template>
  <form class="ProductHeader flex flex-wrap justify-center" @submit.prevent="handleSubmit">
    <ProductImage
      :selected-sku="selectedSku"
      :products="products"
      @selectedSkuChanged="handleSelectedSkuChange"
    />
    <ProductInfo
      :title="title"
      :description="description"
      :selected-sku="selectedSku"
      :products="products"
      :details-list="detailsList"
      @openSidePanel="openSidePanel"
    />
  </form>
</template>

<script>
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'

export default {
  components: { ProductImage, ProductInfo },
  data() {
    return {
      selectedSku: {
        sku: 'abc100ml',
        size: '100mL',
        price: '23',
        title: 'In Two Minds Facial Cleanser',
        picture: {
          srcsets: [
            'https://www.aesop.com/medias/Aesop-Skin-In-Two-Minds-Facial-Cleanser-100mL-Large-835x962px.png?context=bWFzdGVyfGltYWdlc3wxMDM3Mjh8aW1hZ2UvcG5nfGltYWdlcy9oYzAvaGE4LzkxNDczNDMwMTE4NzAucG5nfDVmMGI4ZjNjZmIxN2EyOTAyNDg1NzgwNWFlNTI0ZjUxNmIwOWVlYTE4ZTcwZTM4ZTIwOTU3NGEzMWIyYThkMmY 2x',
            'https://www.aesop.com/medias/Aesop-Skin-In-Two-Minds-Facial-Cleanser-100mL-Medium-653x752px.png?context=bWFzdGVyfGltYWdlc3w2NjY3MHxpbWFnZS9wbmd8aW1hZ2VzL2hmMS9oNWIvOTE0NzM0Mjg4MDc5OC5wbmd8ZDcxZTgyMzBiNjc0Yjg4MjhmZGJmMTgyNDI2YzNmMGMyMGU1N2ZjMDRkMzEyYjZkNmNjZGYwYmI3YmIyODBiOA 2x',
            'https://www.aesop.com/medias/Aesop-Skin-In-Two-Minds-Facial-Cleanser-100mL-Small-455x524px.png?context=bWFzdGVyfGltYWdlc3wzNTI4MXxpbWFnZS9wbmd8aW1hZ2VzL2hkZi9oMDMvOTE0NzM0MjcxNjk1OC5wbmd8ZjVlMjMzOGY2NTdmZGU2NzA3MmExMTk4MjhmZTQ3ZDYwMDg2ODlkZjY1NWY3ZWUyNWM5M2RhMGI2MzIwNmMwNQ 2x',
          ],
        },
        img: {
          alt: 'In Two Minds Facial Cleanser in amber glass bottle',
        },
      },
      title: 'In Two Minds Facial Cleanser',
      description:
        'A gentle gel-based formulation that cleanses thoroughly without drying the skin or stripping its natural oils.',
      products: [
        {
          sku: 'abc100ml',
          size: '100mL',
          price: '23',
          title: 'In Two Minds Facial Cleanser',
          picture: {
            srcsets: [
              'https://www.aesop.com/medias/Aesop-Skin-In-Two-Minds-Facial-Cleanser-100mL-Large-835x962px.png?context=bWFzdGVyfGltYWdlc3wxMDM3Mjh8aW1hZ2UvcG5nfGltYWdlcy9oYzAvaGE4LzkxNDczNDMwMTE4NzAucG5nfDVmMGI4ZjNjZmIxN2EyOTAyNDg1NzgwNWFlNTI0ZjUxNmIwOWVlYTE4ZTcwZTM4ZTIwOTU3NGEzMWIyYThkMmY 2x',
              'https://www.aesop.com/medias/Aesop-Skin-In-Two-Minds-Facial-Cleanser-100mL-Medium-653x752px.png?context=bWFzdGVyfGltYWdlc3w2NjY3MHxpbWFnZS9wbmd8aW1hZ2VzL2hmMS9oNWIvOTE0NzM0Mjg4MDc5OC5wbmd8ZDcxZTgyMzBiNjc0Yjg4MjhmZGJmMTgyNDI2YzNmMGMyMGU1N2ZjMDRkMzEyYjZkNmNjZGYwYmI3YmIyODBiOA 2x',
              'https://www.aesop.com/medias/Aesop-Skin-In-Two-Minds-Facial-Cleanser-100mL-Small-455x524px.png?context=bWFzdGVyfGltYWdlc3wzNTI4MXxpbWFnZS9wbmd8aW1hZ2VzL2hkZi9oMDMvOTE0NzM0MjcxNjk1OC5wbmd8ZjVlMjMzOGY2NTdmZGU2NzA3MmExMTk4MjhmZTQ3ZDYwMDg2ODlkZjY1NWY3ZWUyNWM5M2RhMGI2MzIwNmMwNQ 2x',
            ],
          },
          img: {
            alt: 'In Two Minds Facial Cleanser in amber glass bottle',
          },
        },
        {
          sku: 'abc200ml',
          size: '200mL',
          price: '35',
          title: 'In Two Minds Facial Cleanser',
          picture: {
            srcsets: [
              'https://www.aesop.com/medias/Aesop-Skin-In-Two-Minds-Facial-Cleanser-200mL-Large-835x962px.png?context=bWFzdGVyfGltYWdlc3wxNDMwODl8aW1hZ2UvcG5nfGltYWdlcy9oMTAvaGIxLzkxNDczNDM1MDMzOTAucG5nfDUzNDdiMGFhN2I2ZWU5NTliYmI3YjU3ZWExYzk5YWFlNmQ5MWI1ZTU5MTkzNDczNmYwODkyOGJiZmQwMDAzMjk 2x',
              'https://www.aesop.com/medias/Aesop-Skin-In-Two-Minds-Facial-Cleanser-200mL-Medium-653x752px.png?context=bWFzdGVyfGltYWdlc3w4NzU4N3xpbWFnZS9wbmd8aW1hZ2VzL2g4ZC9oMzgvOTE0NzM0MzQ3MDYyMi5wbmd8MGRmODhhNjk4MzgzODdhY2M5ODUxZTgxOTcxNDk3YTVlNWY1Nzc3NWM0MGMzMjhlMDg0MTBiYjdlYmJlYTdlNg 2x',
              'https://www.aesop.com/medias/Aesop-Skin-In-Two-Minds-Facial-Cleanser-200mL-Small-455x524px.png?context=bWFzdGVyfGltYWdlc3wxNTE5MTN8aW1hZ2UvcG5nfGltYWdlcy9oZjYvaDA3LzkwMTk3NzQ2MzE5NjYucG5nfDZkYTA4NGFmZDNkNzE1ZDc5MzgxZGUxMmIzMjBjMTYxYjg2NmNkZTQyOGU2NmEzNmMzZGMyNmIxNjBkMTlhNTY 2x',
            ],
          },
          img: {
            alt: 'In Two Minds Facial Cleanser in amber glass bottle',
          },
        },
      ],
      detailsList: [
        { title: 'Suited To', description: 'Combination skin', button: false },
        {
          title: 'Skin feel',
          description: 'Purified, soft, refreshed',
          button: false,
        },
        {
          title: 'Key ingredients',
          description: 'Witch Hazel, Salicylic Acid, Sage Leaf',
          button: true,
        },
      ],
    }
  },
  methods: {
    openSidePanel() {
      this.$emit('openSidePanel')
    },
    handleSelectedSkuChange(selectedSku) {
      this.selectedSku=selectedSku
    },
    handleSubmit() {
      this.selectedSku.qty = 1
      this.$store.commit('addSkuItemToCart', this.selectedSku)
    },
  },
}
</script>

<style scoped>
.ProductHeader {
  min-height: 90vh;
  padding: 115px 40px 100px;
  position: relative;
}
</style>
