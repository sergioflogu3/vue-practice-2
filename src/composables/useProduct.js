import {reactive, toRefs} from "vue";
import useAxios from "@/composables/useAxios";

export default function (){
    const state = reactive({
        products: [],
        number: 1,
        product: null,
        color: null,
        btnBuy: true
    });

    const getProducts = async () => {
        const request = await useAxios(
            'productos',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        )
        const response = await request.sendRequest();
        state.products = await response.data;
    }

    const add = () => {
        state.number++;
    }

    const subtract = () => {
        if (state.number !== 1) state.number--;
    }

    const getProduct = async (id) => {
        const request = useAxios(
            `productos/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        )
        const response = await request.sendRequest();
        state.product = await response.data;
    }

    const chooseColor = (color) => {
        state.color = color;
        state.btnBuy = false;
    }

    const buy = (id) => {
        alert(`id: ${id}, cantidad: ${state.number}, color: ${state.color}`);
        state.number = 1;
        state.color = null;
        state.btnBuy = true;
    }

    return {
        ... toRefs(state),
        getProducts, add, subtract, getProduct, chooseColor, buy
    }
}