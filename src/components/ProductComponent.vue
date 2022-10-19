<template>
    <div v-if="product">
        <div class="row">
            <h3>{{ product.nombre }}</h3>
        </div>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4">
                <img :src="product.imagen"
                     :alt="product.descripcion" class="img-thumbnail">
            </div>
            <div class="col-12 col-sm-6  col-md-8">
                <h6>{{ product.descripcion }}</h6>
                <div class="p-3 mb-2" :style="{backgroundColor: 'orangered', color: 'white', fontWeight: 'bold'}">
                    Precio: {{ product.precio }} BOB
                </div>
                <h5>Color: {{ color }}</h5>
                <div>
                    <div class="color-box clic"
                         v-for="data in product.colores"
                         @click="chooseColor(data)"
                         :style="{background: data}"></div>
                </div>
                <h5>Cantidad</h5>
                <div class="quantity">
                    <button @click="subtract">-</button> <div>{{ number }}</div> <button @click="add">+</button>
                </div>
                <div class="buy-box">
                    <button type="button"
                            class="btn btn-primary"
                            @click="buy(product.id)"
                            :disabled="btnBuy">Comprar</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="row">
            <h3 class="text-danger">No se ha elegido ningun producto</h3>
        </div>
    </div>

</template>

<script>
import useProduct from "@/composables/useProduct";

export default {
    name: 'ProductComponent',
    props: ['product'],
    setup(){
        const {number, color, btnBuy,
            add, subtract, chooseColor, buy} = useProduct();
        return {number, color, btnBuy,
            add, subtract, chooseColor, buy}
    }
}
</script>