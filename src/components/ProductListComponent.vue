<template>
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ product.nombre }}</h5>
                <img :src="product.imagen"
                     alt="" class="img-thumbnail">
                <p class="card-text">
                    {{ product.descripcion }}
                </p>
                <div class="producto-relacionado-precio">Precio: {{ product.precio }} BOB</div>
                <div>
                    <div>
                        <div class="color-box"
                             v-for="color in product.colores"
                             :style="{background: color}"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductListComponent',
    props: ['product']
}
</script>