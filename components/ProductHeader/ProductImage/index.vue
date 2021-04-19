<template>
  <div class="productImageWrapper flex xl:justify-end sm:flex-grow sm:mb-4">
    <div class="productImageFrame">
      <picture class="productPicture">
        <source
          srcset="
            https://www.aesop.com/medias/Aesop-Skin-In-Two-Minds-Facial-Cleanser-100mL-Large-835x962px.png?context=bWFzdGVyfGltYWdlc3wxMDM3Mjh8aW1hZ2UvcG5nfGltYWdlcy9oYzAvaGE4LzkxNDczNDMwMTE4NzAucG5nfDVmMGI4ZjNjZmIxN2EyOTAyNDg1NzgwNWFlNTI0ZjUxNmIwOWVlYTE4ZTcwZTM4ZTIwOTU3NGEzMWIyYThkMmY 2x
          "
          media="(min-width: 1025px)"
        />
        <source
          srcset="
            https://www.aesop.com/medias/Aesop-Skin-In-Two-Minds-Facial-Cleanser-100mL-Medium-653x752px.png?context=bWFzdGVyfGltYWdlc3w2NjY3MHxpbWFnZS9wbmd8aW1hZ2VzL2hmMS9oNWIvOTE0NzM0Mjg4MDc5OC5wbmd8ZDcxZTgyMzBiNjc0Yjg4MjhmZGJmMTgyNDI2YzNmMGMyMGU1N2ZjMDRkMzEyYjZkNmNjZGYwYmI3YmIyODBiOA 2x
          "
          media="(min-width: 640px)"
        />
        <source
          srcset="
            https://www.aesop.com/medias/Aesop-Skin-In-Two-Minds-Facial-Cleanser-100mL-Small-455x524px.png?context=bWFzdGVyfGltYWdlc3wzNTI4MXxpbWFnZS9wbmd8aW1hZ2VzL2hkZi9oMDMvOTE0NzM0MjcxNjk1OC5wbmd8ZjVlMjMzOGY2NTdmZGU2NzA3MmExMTk4MjhmZTQ3ZDYwMDg2ODlkZjY1NWY3ZWUyNWM5M2RhMGI2MzIwNmMwNQ 2x
          "
          media="(min-width: 0px)"
        />
        <img
          class="w-max productImage"
          alt="In Two Minds Facial Cleanser in amber glass bottle "
        />
      </picture>
      <ul
        aria-label="Product sizes"
        class="flex items-center justify-center"
        role="group"
      >
        <li class="px-2">
          <label>
            <input type="radio" name="sku" value="B100SK61" checked="" />
            <span>100 mL</span>
          </label>
        </li>
        <li class="px-2">
          <label>
            <input type="radio" name="sku" value="ASK61" />
            <span>200 mL</span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.productImageFrame {
  animation: 1s ease-out 0s 1 slideInFromRight;
  transition: opacity 1.7s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s,
    transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s;
}

.productImage {
  width: 500px;
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
