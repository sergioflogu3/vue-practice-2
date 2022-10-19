<template>
    <product-component :product="product"/>
    <hr>
    <div class="row">
        <h4>Productos relacionados</h4>
    </div>
    <div class="row">
        <product-list-component
            v-for="product in products"
            :product="product"
            @click="getProduct(product.id)"
        />
    </div>

    <footer-component
        footer-color="slategrey" />
</template>

<script>
import ProductComponent from '@/components/ProductComponent';
import ProductListComponent from "@/components/ProductListComponent";
import FooterComponent from "@/components/IU/FotterComponent";
import useProduct from "@/composables/useProduct";

export default {
    name: 'ProductView',
    components: {
        FooterComponent,
        ProductComponent, ProductListComponent
    },
    setup(){
        const {product, products,
            getProduct, getProducts
        } = useProduct();
        getProducts();
        return {product, products, getProduct}
    }
}
</script>